<template>
  <div class="content-layout">
    <t-header />
    <div class="content-layout-wrapper">
      <content-title />
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import THeader from "~/components/header/THeader";
import ContentTitle from "~/components/content/ContentTitle.vue";
</script>

<style scoped lang="scss">
.content-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  .content-layout-wrapper {
    max-width: 1200px;
    width: 100%;
  }
}
</style>
