<template>
  <div class="menu-container">
    <div class="header-wrapper">
      <t-logo />
      <img
        alt="x"
        class="icon"
        src="/img/icon/icon-x.png"
        @click="$emit('x-click')"
      />
    </div>
    <div class="menu-wrapper">
      <div class="menu-item-wrapper">
        <span
          v-for="menu in menus"
          :key="menu.label"
          class="menu"
          @click="handleMenu(menu.routeName)"
          >{{ menu.label }}</span
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { defineEmits } from "@vue/runtime-core";
import TLogo from "~/components/logo/TLogo.vue";
import { useBodyScrollLock } from "~/composable/useBodyScrollLock";
import { menus } from "~/constants/menu.constant";

const emit = defineEmits(["x-click"]);
const { onMountBodyScrollLock } = useBodyScrollLock();
const router = useRouter();

onMountBodyScrollLock(true);

function handleMenu(routeName: string) {
  router.push({ name: routeName });
  emit("x-click");
}
</script>

<style lang="scss" scoped>
.menu-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #fff;
  .header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    padding: 20px;
    .icon {
      width: 14px;
      cursor: pointer;
    }
  }
  .menu-wrapper {
    position: relative;
    height: 100%;
    .menu-item-wrapper {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      > :not(:first-child) {
        margin-top: 45px;
      }
      .menu {
        font-weight: 800;
        font-size: 29px;
        line-height: 35px;
        color: #111111;
        cursor: pointer;
      }
    }
  }
}
</style>
