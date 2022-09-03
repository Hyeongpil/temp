<template>
  <section class="main-section5-container">
    <div class="info-wrapper">
      <div class="title-wrapper">
        <span class="title">{{
          "한판에 10초면 OK!\n32가지의 다양한 미니게임"
        }}</span>
        <div class="btn-wrapper">
          <img src="/img/icon/left-btn.png" alt="left" />
          <img src="/img/icon/right-btn.png" alt="right" />
        </div>
      </div>
      <div class="games-wrapper"></div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.main-section5-container {
  height: 885px;
  display: flex;
  justify-content: center;
  align-items: center;

  .info-wrapper {
    display: flex;
    .title-wrapper {
      display: flex;
      flex-direction: column;
      .title {
        font-weight: 700;
        font-size: 32px;
        line-height: 42px;
        color: #111111;
        white-space: pre;
      }
      .btn-wrapper {
        display: flex;
        margin-top: 45px;
        gap: 16px;
        img {
          width: 50px;
          cursor: pointer;
        }
      }
    }
    .games-wrapper {
      width: 50vw;
    }
  }
}
</style>
