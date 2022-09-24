<template>
  <div class="news-detail-container">
    <div class="title-wrapper">
      <span class="type">이벤트</span>
      <span class="title">텐텐프로모션</span>
      <span class="date">2022-22-22</span>
    </div>
    <divider :height="3" :y-margin="50" color="#111111" />
    <div class="content-wrapper">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deleniti
      dolorum enim explicabo minus nam nihil numquam quos rem sunt! Dolor
      ducimus earum illo libero nemo porro recusandae repellendus sit!
    </div>
    <div class="bottom-wrapper">
      <divider />
      <div class="navi-wrapper">
        <div class="navi-item-wrapper">
          <img class="icon" src="/img/icon/left-arrow.png" />
          <div class="navi-title-wrapper">
            <span class="move">이전</span>
            <span class="title">뒤로가기타이틀</span>
          </div>
        </div>
        <div class="navi-divider" />
        <div class="navi-item-wrapper">
          <div class="navi-title-wrapper">
            <span class="move">다음</span>
            <span class="title">앞으로 타이틀</span>
          </div>
          <img class="icon" src="/img/icon/right-arrow.png" />
        </div>
      </div>
      <divider />
    </div>
    <div class="btn-wrapper">
      <t-button label="목록" @click="handleList" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { definePageMeta } from "#imports";
import Divider from "~/components/divider/Divider.vue";
import TButton from "~/components/button/TButton.vue";
import { routeNames } from "~/constants/router.constant";

definePageMeta({
  layout: "content",
});
const router = useRouter();

function handleList() {
  router.push({
    name: routeNames.NEWS,
  });
}
</script>

<style lang="scss" scoped>
.news-detail-container {
  display: flex;
  flex-direction: column;

  .title-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    .type {
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      color: #ff9c00;
    }
    .title {
      font-weight: 700;
      font-size: 30px;
      line-height: 36px;
      color: #111111;
      margin-top: 15px;
    }
    .date {
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: #777777;
      margin-top: 20px;
    }
  }

  .bottom-wrapper {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    .navi-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 30px 0;

      .navi-item-wrapper {
        display: flex;
        align-items: center;
        cursor: pointer;
        .icon {
          height: 20px;
        }
        .navi-title-wrapper {
          display: flex;
          flex-direction: column;
          margin: 0 45px;
          font-weight: 700;
          color: #111111;
          .move {
            font-size: 14px;
            line-height: 17px;
          }
          .title {
            font-size: 18px;
            line-height: 21px;
            margin-top: 10px;
          }
        }
      }
      .navi-divider {
        height: 48px;
        border-left: 1px solid #dddddd;
      }
    }
  }
  .btn-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 40px;
  }
}
</style>
