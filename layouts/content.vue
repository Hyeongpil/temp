<template>
  <div class="content-layout">
    <t-header />
    <div class="content-layout-wrapper">
      <div class="content-layout-pad">
        <content-title />
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import THeader from "~/components/header/THeader";
import ContentTitle from "~/components/content/ContentTitle.vue";
</script>

<style lang="scss" scoped>
.content-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  .content-layout-wrapper {
    max-width: 1200px;
    width: 100%;

    .content-layout-pad {
      padding: 0 40px;
      @include xs_sm {
        padding: 0 20px;
      }
    }
  }
}
</style>
