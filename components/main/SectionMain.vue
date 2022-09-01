<template>
  <div class="main-section-container">
    <THeader />

    <Section1 />
    <Section2 />
    <Section3 />
  </div>
</template>

<script setup lang="ts">
import THeader from "@/components/header/THeader.vue";
import Section3 from "./Section3.vue";
import Section2 from "./Section2.vue";
import Section1 from "./Section1.vue";
</script>

<style scoped lang="scss">
.main-section2-container {
  display: flex;
  flex-direction: column;
  position: relative;
}
</style>
