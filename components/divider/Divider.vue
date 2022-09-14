<template>
  <div :style="{ margin: `${yMargin}px 0` }" class="divider-container" />
</template>

<script lang="ts" setup>
interface dividerProps {
  yMargin: number;
}

defineProps<dividerProps>();
</script>

<style lang="scss" scoped>
.divider-container {
  height: 0;
  border-bottom: 1px solid #dddddd;
}
</style>
