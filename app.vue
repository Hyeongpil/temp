<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script lang="ts" setup>
useHead({
  meta: [
    {
      name: "viewport",
      content:
        "width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1",
    },
  ],
});
</script>
<style lang="scss"></style>
