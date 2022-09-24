<template>
  <div class="logo-wrapper" @click="handleLogo()">
    <img alt="logo" class="logo" src="/img/logo.png" />
    <span :style="{ color: textColor }" class="title">TENTEN</span>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { routeNames } from "~/constants/router.constant";

const router = useRouter();
const route = useRoute();
const isMain = computed(() => route.name === routeNames.MAIN);
const textColor = computed(() => (isMain.value ? "#ffffff" : "#111111"));

function handleLogo() {
  router.push({
    name: routeNames.MAIN,
  });
}
</script>

<style lang="scss" scoped>
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
</style>
