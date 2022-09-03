<template>
  <div class="main-layout">
    <slot />
    <t-footer />
  </div>
</template>

<script setup lang="ts">
import TFooter from "~/components/footer/TFooter.vue";
</script>

<style scoped lang="scss"></style>
