<template>
  <div class="default-layout">
    <t-header />
    <slot />
    <t-footer />
  </div>
</template>

<script setup lang="ts">
import TFooter from "~/components/footer/TFooter.vue";
import THeader from "~/components/header/THeader.vue";
</script>

<style scoped lang="scss"></style>
