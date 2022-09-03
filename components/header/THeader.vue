<template>
  <header class="header-container">
    <div class="logo-wrapper">
      <img class="logo" src="/img/logo.png" />
      <span class="title">TENTEN</span>
    </div>
    <div v-if="!isXs" class="menu-wrapper">
      <span
        v-for="menu in menus"
        :key="menu.label"
        class="menu"
        @click="handleMenu(menu.routeName)"
        >{{ menu.label }}</span
      >
    </div>
    <img v-else src="/img/menu.png" />
  </header>
</template>

<script setup lang="ts">
import { useBrowserResize } from "~~/composable/useBrowserResize";
interface menu {
  label: string;
  routeName: string;
}

const { isXs } = useBrowserResize();

const menus = ref<menu[]>([
  {
    label: "새소식",
    routeName: "notice",
  },
  {
    label: "콘텐츠",
    routeName: "contents",
  },
  {
    label: "게임소개",
    routeName: "games",
  },
]);

function handleMenu(routeName: string) {
  console.log("메뉴클릭 :", routeName);
}
</script>

<style scoped lang="scss">
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  position: sticky;
  top: 0;
  padding: 0 60px;
  background: #111111;
  z-index: 100;

  .logo-wrapper {
    display: flex;
    align-items: center;

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
