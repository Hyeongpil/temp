<template>
  <div class="games-container">
    <div class="title-wrapper">
      <div class="overlay-wrapper">
        <span class="overlay-txt">JUST ONLY 10 SECONDS</span>
      </div>
      <span class="title">한판에 10초면 OK!</span>
      <span class="desc">{{
        `텐텐은 32가지 미니게임으로 즐기는 멀티배틀게임입니다.\n친구 가족들과 함께 즐기고,\n랭커가 되어 신기록을 달성해 보세요`
      }}</span>
    </div>
    <div class="games-item-wrapper">
      <games-title-box :title-item="activeGames.titleItem" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { definePageMeta } from "#imports";
import GamesTitleBox from "~/components/games/GamesTitleBox.vue";
import { activeGames } from "~/models/games/games.model";

definePageMeta({
  layout: "content",
});
</script>

<style lang="scss" scoped>
.games-container {
  display: flex;
  flex-direction: column;
  .title-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    height: 300px;
    margin-top: 65px;
    .overlay-wrapper {
      display: flex;
      justify-content: center;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      z-index: -1;
      .overlay-txt {
        font-weight: 900;
        font-size: 90px;
        line-height: 90px;
        letter-spacing: -0.04em;
        color: #f1f1f1;
      }
    }
    .title {
      font-weight: 700;
      font-size: 40px;
      line-height: 35px;
      color: #111111;
    }
    .desc {
      font-weight: 500;
      font-size: 25px;
      line-height: 35px;
      color: #555555;
      white-space: pre;
      text-align: center;
      margin-top: 40px;
    }
  }
}
</style>
