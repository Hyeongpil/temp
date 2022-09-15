<template>
  <div class="content-item-container">
    <!--    <img />-->
    <div class="img"></div>
    <span class="category">{{ category }}</span>
    <span class="title">{{ title }}</span>
  </div>
</template>

<script lang="ts" setup>
export interface contentItemProps {
  category: string;
  title: string;
}

defineProps<contentItemProps>();
</script>

<style lang="scss" scoped>
.content-item-container {
  display: flex;
  flex-direction: column;
  cursor: pointer;

  .img {
    width: 100%;
    height: 100%;
    min-height: 264px;
    background: #d9d9d9;
    border-radius: 20px;
  }
  .category {
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #ff9c00;
    margin-top: 20px;
  }
  .title {
    font-weight: 700;
    font-size: 21px;
    line-height: 25px;
    color: #111111;
    margin-top: 10px;
  }
}
</style>
