<template>
  <header :style="{ background: headerColor }" class="header-container">
    <div class="header-pad-wrapper">
      <t-logo />
      <client-only>
        <div v-if="!isXs" class="menu-wrapper">
          <span
            v-for="menu in menus"
            :key="menu.label"
            :style="{ color: textColor }"
            class="menu"
            @click="handleMenu(menu.routeName)"
            >{{ menu.label }}</span
          >
        </div>
        <template v-else>
          <img
            v-if="isMain"
            alt="menu"
            class="mob-menu"
            src="/img/menu.png"
            @click="isMobMenuShow = true"
          />
          <img
            v-else
            alt="menu2"
            class="mob-menu"
            src="/img/icon/menu-black.png"
            @click="isMobMenuShow = true"
          />
        </template>
      </client-only>
      <t-menu v-if="isMobMenuShow" @x-click="isMobMenuShow = false" />
    </div>
  </header>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router";
import { ref } from "@vue/reactivity";
import { computed } from "vue";
import { routeNames } from "~/constants/router.constant";
import { useBrowserResize } from "~/composable/useBrowserResize";
import TLogo from "~/components/logo/TLogo.vue";
import TMenu from "~/components/menu/TMenu.vue";
import { menus } from "~/constants/menu.constant";

const { isXs } = useBrowserResize();
const router = useRouter();
const route = useRoute();
const isMobMenuShow = ref(false);
const isMain = computed(() => route.name === routeNames.MAIN);
const headerColor = computed(() => (isMain.value ? "#111111" : "#ffffff"));
const textColor = computed(() => (isMain.value ? "#ffffff" : "#111111"));

function handleMenu(routeName: string) {
  router.push({ name: routeName });
}
</script>

<style lang="scss" scoped>
.header-container {
  width: 100%;
  position: sticky;
  top: 0;
  background: #111111;
  z-index: 200;

  .header-pad-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    padding: 0 60px;

    @include xs_sm {
      height: 50px;
      padding: 20px;
    }
    .mob-menu {
      cursor: pointer;
    }
  }

  .menu-wrapper {
    display: flex;
    .menu {
      cursor: pointer;
      font-weight: 800;
      font-size: 16px;
      line-height: 19px;

      color: #ffffff;
      margin: 0 30px;
    }
  }
}
</style>
