<template>
  <div class="media-container">
    <content-list />
  </div>
</template>

<script lang="ts" setup>
import { definePageMeta } from "#imports";
import ContentList from "~/components/content/ContentList.vue";

definePageMeta({
  layout: "content",
});
</script>

<style lang="scss" scoped>
.media-container {
  @include xs_sm {
    margin-top: 50px;
  }
}
</style>
