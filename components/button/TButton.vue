<template>
  <button class="t-btn" @click="$emit('click')">{{ label }}</button>
</template>

<script lang="ts" setup>
export interface TButtonProps {
  label: string;
}
defineProps<TButtonProps>();
</script>

<style lang="scss" scoped>
.t-btn {
  cursor: pointer;
  width: 160px;
  height: 50px;
  background: #111111;
  border-radius: 5px;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
}
</style>
