<template>
  <div :style="getContainerStyle()" class="news-item-container">
    <span :style="getTxtStyle()" class="category">{{ type }}</span>
    <span :style="getTxtStyle()" class="title">{{ title }}</span>
    <span :style="getTxtStyle()" class="date">{{ date }}</span>
  </div>
</template>

<script lang="ts" setup>
export interface newsItemProps {
  type: string;
  title: string;
  date: string;
  highlight?: boolean;
}

const props = defineProps<newsItemProps>();

function getContainerStyle() {
  if (props.highlight)
    return {
      color: "#fff",
      background: "#FF9C00",
    };
}

function getTxtStyle() {
  if (props.highlight)
    return {
      color: "#fff",
    };
}
</script>

<style lang="scss" scoped>
.news-item-container {
  display: flex;
  align-items: center;
  height: 70px;
  cursor: pointer;
  @include xs_sm {
    height: 140px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  .category {
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #ff9c00;
    flex-grow: 1;
    text-align: center;
    @include xs_sm {
      text-align: left;
      flex-grow: 0;
    }
  }
  .title {
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    color: #111111;
    margin-left: 60px;
    flex-grow: 8;
    @include xs_sm {
      flex-grow: 0;
      margin-top: 10px;
      margin-left: 0;
    }
  }
  .date {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #777777;
    flex-grow: 1;
    text-align: center;
    @include xs_sm {
      text-align: left;
      flex-grow: 0;
      margin-top: 15px;
    }
  }
}
</style>
