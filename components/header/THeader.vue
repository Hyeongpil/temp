<template>
  <header :style="{ background: headerColor }" class="header-container">
    <div class="header-pad-wrapper">
      <div class="logo-wrapper" @click="handleMenu('/')">
        <img class="logo" src="/img/logo.png" />
        <span :style="{ color: textColor }" class="title">TENTEN</span>
      </div>
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
      <img v-else src="/img/menu.png" />
    </div>
  </header>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router";
import { ref } from "@vue/reactivity";
import { computed } from "vue";
import { routeNames } from "~/constants/router.constant";
import { useBrowserResize } from "~/composable/useBrowserResize";

interface menu {
  label: string;
  routeName: string;
}

const { isXs } = useBrowserResize();
const router = useRouter();
const route = useRoute();
const headerColor = computed(() =>
  route.name === routeNames.MAIN ? "#111111" : "#ffffff"
);
const textColor = computed(() =>
  route.name === routeNames.MAIN ? "#ffffff" : "#111111"
);

const menus = ref<menu[]>([
  {
    label: "새소식",
    routeName: routeNames.NOTICE,
  },
  {
    label: "콘텐츠",
    routeName: routeNames.CONTENT,
  },
  {
    label: "게임소개",
    routeName: routeNames.GAMES,
  },
]);

function handleMenu(routeName: string) {
  router.push(routeName);
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
      padding: 0 20px;
    }
  }

  .logo-wrapper {
    display: flex;
    align-items: center;
    cursor: pointer;

    .logo {
      width: 49.5px;
      height: 33px;
    }

    .title {
      font-family: "Jalnan";
      font-weight: 700;
      font-size: 22px;
      line-height: 23px;
      letter-spacing: -0.01em;

      color: #ffffff;
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
