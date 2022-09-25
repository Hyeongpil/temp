<template>
  <div :style="containerStyle" class="games-title-box-container">
    <div class="title-wrapper">
      <span class="title">{{ titleItem.title }}</span>
      <div class="count-wrapper">
        <span class="count">{{ titleItem.count }}</span>
      </div>
    </div>
    <span class="desc">{{ titleItem.desc }}</span>
    <div class="tag-wrapper">
      <div v-for="tag in titleItem.tagList" :key="tag" class="tag">
        <span class="tag-txt">{{ tag }}</span>
      </div>
    </div>
    <div class="img-wrapper">
      <img :src="titleItem.logoUrl" alt="cha" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { gamesTitle } from "~/models/games.model";

export interface gamesTitleBoxProps {
  titleItem: gamesTitle;
}

const props = defineProps<gamesTitleBoxProps>();

const containerStyle = computed(() => ({
  backgroundColor: props.titleItem.backgroundColor,
}));
</script>

<style lang="scss" scoped>
.games-title-box-container {
  position: relative;
  border-radius: 20px;
  padding: 50px 60px;

  .title-wrapper {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    .title {
      font-weight: 700;
      font-size: 30px;
      line-height: 36px;
      color: #111111;
    }
    .count-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 58px;
      height: 44px;
      background: #ffffff;
      border-radius: 100px;
      margin-left: 6px;
      .count {
        font-weight: 800;
        font-size: 16px;
        line-height: 26px;
        color: #b3272e;
      }
    }
  }
  .desc {
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #555555;
  }
  .tag-wrapper {
    display: flex;
    margin-top: 20px;
    > :not(:first-child) {
      margin-left: 10px;
    }
    .tag {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 95px;
      height: 44px;
      background: #ffffff;
      border: 1px solid #dddddd;
      border-radius: 100px;
      .tag-txt {
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
        color: #555555;
      }
    }
  }
  .img-wrapper {
    position: absolute;
    top: 20%;
    right: -10%;
    transform: translate(-50%, -50%);
    img {
      width: 264px;
      height: 235px;
    }
  }
}
</style>
