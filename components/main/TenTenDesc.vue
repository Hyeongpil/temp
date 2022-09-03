<template>
  <div class="tenten-desc-container">
    <span class="title">{{ title }}</span>
    <span class="desc">{{ desc }}</span>
  </div>
</template>

<script lang="ts" setup>
interface tentenDescProps {
  title: string;
  desc: string;
}
defineProps<tentenDescProps>();
</script>

<style scoped lang="scss">
.tenten-desc-container {
  display: flex;
  flex-direction: column;

  .title {
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    text-align: center;
    color: #ff9c00;
  }
  .desc {
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    text-align: center;
    color: #dddddd;
    margin-top: 20px;
    white-space: pre;
  }
}
</style>
