<template>
  <div class="cha-box-container" :style="{ backgroundColor: color }">
    <div class="info-wrapper">
      <span class="title">{{ title }}</span>
      <span class="desc">{{ desc }}</span>
      <img class="img" :src="imgPath" />
    </div>
  </div>
</template>

<script setup lang="ts">
export interface ChaBoxProps {
  title: string;
  desc: string;
  color: string;
  imgPath: string;
}
defineProps<ChaBoxProps>();
</script>

<style scoped lang="scss">
.cha-box-container {
  width: 436px;
  height: 585px;
  position: relative;
  border-radius: 30px;

  @include xs_sm {
    width: 100%;
    height: 449px;
    padding: 0;
  }
  .info-wrapper {
    padding: 70px 60px;
    display: flex;
    flex-direction: column;

    @include xs_sm {
      padding: 0;
    }

    .title {
      font-weight: 700;
      font-size: 25px;
      line-height: 30px;

      color: #ffffff;
      @include xs_sm {
        margin-top: 50px;
        font-size: 16px;
        line-height: 19px;
        margin-left: 40px;
      }
    }
    .desc {
      font-weight: 800;
      font-size: 55px;
      line-height: 66px;
      color: #ffffff;
      margin-top: 20px;
      word-break: keep-all;
      white-space: pre;
      @include xs_sm {
        font-size: 40px;
        line-height: 48px;
        margin-left: 40px;
      }
    }
    .img {
      position: absolute;
      bottom: 0;
      left: 40%;
      @include xs_sm {
        width: 275px;
      }
    }
  }
}
</style>
