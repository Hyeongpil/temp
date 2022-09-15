<template>
  <div>상세</div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
import { definePageMeta } from "#imports";

definePageMeta({
  layout: "content",
});

const route = useRoute();
</script>

<style lang="scss" scoped></style>
