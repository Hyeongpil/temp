<template>
  <section class="main-section6-container">
    <div class="content-wrapper">
      <img class="cha-7" src="/img/cha-7.png" alt="cha-7" />
      <div class="info-wrapper">
        <div class="txt-wrapper">
          <span>텐텐, 지금 바로&nbsp</span>
          <span>다운받아 즐겨보세요!</span>
        </div>
        <div class="btn-wrapper">
          <img src="/img/play-store.png" alt="play-store" />
          <img src="/img/app-store.png" alt="app-store" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.main-section6-container {
  display: flex;
  height: 310px;
  padding: 0 43px;

  @include xs_sm {
    padding: 0;
    height: 400px;
  }

  .content-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ff9c00;
    border-radius: 30px 30px 0px 0px;
    width: 100%;

    @include xs_sm {
      align-items: end;
    }

    .cha-7 {
      position: absolute;
      left: 5%;
      top: -50px;

      @include xs_sm {
        left: 50%;
        top: -30px;
        transform: translate(-50%, -50%);
      }
    }
    .info-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      @include xs_sm {
        margin-bottom: 80px;
      }
      .txt-wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        span {
          font-weight: 700;
          font-size: 37px;
          line-height: 44px;
          color: #ffffff;
          white-space: pre;
          text-align: center;
        }
      }

      .btn-wrapper {
        display: flex;
        gap: 12px;
        margin-top: 27px;
      }
    }
  }
}
</style>
