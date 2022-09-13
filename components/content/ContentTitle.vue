<template>
  <div class="content-title-container">
    <div class="title-wrapper">
      <span class="title">{{ getTitle }}</span>
      <span class="desc">{{ getDesc }}</span>
    </div>
    <div class="bread-wrapper">
      <img class="home" src="/img/icon/home.png" />
      <img class="arrow" src="/img/icon/right-arrow.png" />
      <span>{{ getTitle }}</span>
    </div>
    <div class="overlay-wrapper">
      <span>{{ getOverlay }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { routeNames } from "~/constants/router.constant";
import { computed, ref, watch } from "vue";

const route = useRoute();
const routeName = ref(route.name);
const { GAMES, NOTICE, CONTENT } = routeNames;
const getTitle = computed(() => {
  switch (routeName.value) {
    case NOTICE:
      return "새소식";
    case GAMES:
      return "게임소개";
    case CONTENT:
      return "컨텐츠";
    default:
      return "";
  }
});

const getDesc = computed(() => {
  switch (routeName.value) {
    case NOTICE:
      return "텐텐의 이벤트 및 업데이트 최신 소식을 확인하세요!";
    case GAMES:
      return "텐텐의 32가지 풍성한 게임을 소개합니다.";
    case CONTENT:
      return "스크린샷, 영상으로 당신의 10초를 공유해주세요";
    default:
      return "";
  }
});

const getOverlay = computed(() => {
  switch (routeName.value) {
    case NOTICE:
      return "NEWS";
    case GAMES:
      return "TENTEN";
    case CONTENT:
      return "CONTENTS";
    default:
      return "";
  }
});

watch(
  () => route.name,
  () => {
    routeName.value = route.name;
  }
);
</script>

<style scoped lang="scss">
.content-title-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 200px;
  position: relative;

  @include xs_sm {
    height: 220px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .title-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;

    @include xs_sm {
      z-index: 100;
      padding: 0 20px;
      flex-direction: column;
      align-items: flex-start;
      margin-top: 70px;
    }
    .title {
      font-weight: 800;
      font-size: 40px;
      line-height: 48px;
      color: #111111;

      @include xs_sm {
        font-size: 30px;
        line-height: 36px;
      }
    }

    .desc {
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: #555555;
      margin-left: 25px;
      @include xs_sm {
        margin-left: 0;
        margin-top: 20px;
      }
    }
  }

  .bread-wrapper {
    display: flex;
    align-items: center;
    z-index: 10;
    font-weight: 800;
    font-size: 14px;
    line-height: 17px;
    color: #111111;

    @include xs_sm {
      padding: 0 20px;
      margin-top: 50px;
    }
    .home {
      width: 8px;
      height: 10.5px;
    }
    .arrow {
      width: 3px;
      height: 8px;
      margin: 0 10px;
    }
  }

  .overlay-wrapper {
    position: absolute;
    top: 50%;
    right: 0;

    transform: translate(0, -50%);
    span {
      font-weight: 900;
      font-size: 140px;
      line-height: 167px;
      color: #f1f1f1;

      @include xs_sm {
        font-size: 130px;
        line-height: 155px;
      }
    }
  }
}
</style>