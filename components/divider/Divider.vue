<template>
  <div
    :style="{
      margin: `${yMargin}px 0`,
      borderBottom: `${height}px solid ${color}`,
    }"
    class="divider-container"
  />
</template>

<script lang="ts" setup>
interface dividerProps {
  yMargin?: number;
  height?: number;
  color?: string;
}

withDefaults(defineProps<dividerProps>(), {
  height: 1,
  yMargin: 0,
  color: "#dddddd",
});
</script>

<style lang="scss" scoped>
.divider-container {
  height: 0;
}
</style>
