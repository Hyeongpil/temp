<template>
  <section class="main-section3-container">
    <div class="download-wrapper">
      <span class="download-num">4,000,000 +</span>
      <span class="download-text">게임 누적 다운로드 수</span>
    </div>
    <div class="cha-box-wrapper">
      <div class="cha-pad">
        <cha-box
          class="cha-1"
          :color="'#FFA901'"
          :desc="'요즘 대세는 \n이 게임'"
          :img-path="'/img/cha-2.png'"
          :title="'앱스토어 선정'"
        />
        <cha-box
          class="cha-2"
          :color="'#C62A26'"
          :desc="'1위'"
          :img-path="'/img/cha-3.png'"
          :title="'무료게임 인기순위'"
        />
        <cha-box
          class="cha-3"
          :color="'#FB692C'"
          :desc="'내용'"
          :img-path="'/img/cha-4.png'"
          :title="'타이틀'"
        />
      </div>
    </div>
    <div class="game-wrapper">
      <span class="title">32가지로 즐기는 멀티배틀게임</span>
      <span class="desc">{{ gameDesc }}</span>
      <div class="icon-wrapper">
        <img class="icon-1" src="/img/icon/icon_game_king.png" alt="king" />
        <img class="icon-2" src="/img/icon/icon_game_catch.png" alt="catch" />
        <img class="icon-3" src="/img/icon/icon_game_bottle.png" alt="bottle" />
        <img class="icon-4" src="/img/icon/icon_game_1_to_15.png" alt="1_15" />
        <img class="icon-5" src="/img/icon/icon_game_eraser.png" alt="eraser" />
        <img class="icon-6" src="/img/icon/icon_game_ox.png" alt="ox" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import ChaBox from "@/components/box/ChaBox.vue";
import { useBrowserResize } from "~/composable/useBrowserResize";

const { isXs } = useBrowserResize();
const gameDesc = computed(() =>
  !isXs
    ? "텐텐은 여러명이 언제 어디서든 모여서 즐길 수 있는 멀티플레이어 배틀게임입니다.\n친구들과 가족들과 동료들과 재미있게 대결을 해보세요!\n아주 단순한 모션으로 최상의 재미를 드립니다."
    : "텐텐은 여러명이 언제 어디서든 모여서 즐길 수 있는\n멀티플레이어 배틀게임입니다.\n친구들과 가족들과 동료들과 재미있게 대결을 해보세요!\n아주 단순한 모션으로 최상의 재미를 드립니다."
);
</script>

<style scoped lang="scss">
.main-section3-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 3300px;
  overflow: hidden;

  @include xs_sm {
    height: 2700px;
  }

  .download-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 300px;

    @include xs_sm {
      margin-top: 224px;
    }

    .download-num {
      font-weight: 900;
      font-size: 92px;
      line-height: 110px;
      letter-spacing: -0.02em;
      color: #ffa901;
      @include xs_sm {
        font-size: 55px;
        line-height: 66px;
      }
    }
    .download-text {
      font-weight: 700;
      font-size: 32px;
      line-height: 38px;
      color: #111111;
      margin-top: 40px;
      @include xs_sm {
        font-size: 20px;
        line-height: 24px;
        margin-top: 26px;
      }
    }
  }

  .cha-box-wrapper {
    margin-top: 86px;

    .cha-pad {
      display: flex;
      flex-direction: column;
      gap: 50px;

      @include xs_sm {
        gap: 30px;
        padding: 0 20px;
      }
    }

    @include xs_sm {
      width: 100%;
      gap: 30px;
    }

    .cha-1,
    .cha-3 {
      margin-right: 600px;
      @include xs_sm {
        margin-right: 0px;
      }
    }
    .cha-2 {
      margin-left: 600px;
      @include xs_sm {
        margin-left: 0px;
      }
    }
  }
  .game-wrapper {
    display: flex;
    flex-direction: column;
    margin-right: 400px;
    margin-top: 230px;
    @include xs_sm {
      margin-right: 0;
      width: 100%;
    }
    .title {
      font-weight: 700;
      font-size: 40px;
      line-height: 48px;
      color: #111111;

      @include xs_sm {
        font-size: 28px;
        line-height: 33px;
        text-align: center;
      }
    }
    .desc {
      font-weight: 400;
      font-size: 18px;
      line-height: 28px;
      color: #555555;
      white-space: pre;
      margin-top: 30px;
      word-break: keep-all;

      @include xs_sm {
        font-weight: 400;
        font-size: 14px;
        line-height: 23px;
        text-align: center;
      }
    }

    .icon-wrapper {
      display: flex;
      position: relative;
      height: 150px;
      margin-top: 50px;
      img {
        width: 100px;
      }
      .icon-1 {
        position: absolute;
        left: -50px;
      }
      .icon-2 {
        position: absolute;
        left: 100px;
        bottom: 0;
      }
      .icon-3 {
        position: absolute;
        left: 250px;
      }
      .icon-4 {
        position: absolute;
        left: 400px;
        bottom: 0;
      }
      .icon-5 {
        position: absolute;
        left: 550px;
      }
      .icon-6 {
        position: absolute;
        left: 700px;
        bottom: 0;
      }
    }
  }
}
</style>
