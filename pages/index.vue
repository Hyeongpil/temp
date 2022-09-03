<template>
  <div>
    <SectionIntro />
    <SectionMain />
  </div>
</template>

<script setup lang="ts">
import SectionIntro from "~~/components/main/SectionIntro.vue";
import SectionMain from "~~/components/main/SectionMain.vue";

definePageMeta({
  layout: "main",
});
</script>

<style lang="scss" scoped></style>
