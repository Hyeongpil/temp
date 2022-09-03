<template>
  <div class="main-section-container">
    <t-header />

    <section1 />
    <section2 />
    <section3 />
    <section4 />
    <section5 />
    <section6 />
  </div>
</template>

<script setup lang="ts">
import Section3 from "./Section3.vue";
import Section2 from "./Section2.vue";
import Section1 from "./Section1.vue";
import THeader from "@/components/header/THeader.vue";
import Section4 from "~/components/main/Section4.vue";
import Section5 from "~/components/main/Section5.vue";
import Section6 from "~/components/main/Section6.vue";
</script>

<style scoped lang="scss">
.main-section2-container {
  display: flex;
  flex-direction: column;
  position: relative;
}
</style>
