<template>
  <section class="main-section1-container">
    <div class="item-wrapper">
      <div class="title-wrapper">
        <span>언제 어디서나</span>
        <div class="txt-wrapper">
          <span>모두가 즐길 수 있는&nbsp</span>
          <span>멀티 배틀게임</span>
        </div>
      </div>
      <div class="img-wrapper">
        <div class="background" />
        <img class="main-img" src="/img/main_top_img.png" />
      </div>
      <div class="tenten-wrapper">
        <span class="tenten">TENTEN</span>
        <div class="divider" />
        <div class="txt-wrapper">
          <span class="desc">JUST ONLY&nbsp</span>
          <span class="desc">TEN SECONDS</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.main-section1-container {
  height: 1200px;
  background: #111111;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  overflow: hidden;
  .item-wrapper {
    display: flex;
    flex-direction: column;
    max-width: 1240px;
    width: 100%;

    .title-wrapper {
      display: flex;
      flex-direction: column;
      font-weight: 800;
      font-size: 50px;
      line-height: 60px;

      color: #ffffff;
      margin-bottom: 20px;
      .txt-wrapper {
        display: flex;
        flex-wrap: wrap;
      }
    }
    .img-wrapper {
      position: relative;
      .background {
        widows: 100%;
        height: 280px;

        background: #ff9c00;
        border-radius: 20px;

        @include xs_sm {
          height: 440px;
        }
      }
      .main-img {
        position: absolute;
        width: 733px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        @include xs_sm {
          width: 621px;
        }
      }
    }
    .tenten-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 55px;
      max-width: 840px;
      width: 100%;
      align-self: center;
      .tenten {
        font-weight: 900;
        font-size: 179px;
        line-height: 140px;
        letter-spacing: 0.11em;
        color: #ff9c00;
        @include xs_sm {
          font-size: 89px;
          line-height: 89px;
          letter-spacing: 0;
        }
      }
      .divider {
        border: 1px solid #ffffff;
        width: 100%;
        margin: 40px 0;
        @include xs_sm {
          width: 90%;
        }
      }
      .txt-wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        .desc {
          font-weight: 900;
          font-size: 63px;
          line-height: 65px;
          letter-spacing: -0.01em;

          color: #ffffff;
          @include xs_sm {
            font-size: 43px;
            line-height: 45px;
          }
        }
      }
    }
  }
}
</style>
