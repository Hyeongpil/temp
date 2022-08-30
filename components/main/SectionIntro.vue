<template>
  <div class="main-section1-container">
    <div class="main-img-wrapper">
      <img class="main-label" src="/img/main_label.png" />
      <img class="main-img" src="/img/main_top_img.png" />
    </div>

    <div class="tenten-wrapper">
      <span class="tenten">TENTEN</span>
      <span class="tenten white">TENTEN</span>
      <span class="tenten">TENTEN</span>
    </div>
    <div class="scroll-wrapper">
      <span>Scroll Down</span>
      <img src="/img/arrow-down.png" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.main-section1-container {
  position: relative;
  width: 100%;
  height: 980px;
  background-color: #b3272e;

  .main-img-wrapper {
    max-width: 980px;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;

    .main-label {
      z-index: 1;
      position: absolute;
      top: 0%;
      left: 75%;
      @include xs_sm {
        width: 120px;
      }
    }
    .main-img {
      width: 100%;
    }
  }

  .tenten-wrapper {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);

    .tenten {
      width: 573px;
      height: 140px;

      color: rgba(255, 255, 255, 0);
      -webkit-text-stroke: 1px white;

      font-weight: 900;
      font-size: 153px;
      line-height: 140px;

      text-align: center;
      letter-spacing: -0.04em;
      margin: 0px 8px;

      &.white {
        color: #fff;
      }

      @include xs_sm {
        font-size: 75px;
      }
    }
  }
  .scroll-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;

    position: absolute;
    top: 75%;
    left: 50%;
    transform: translate(-50%, -50%);

    span {
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;

      color: #ffffff;
    }
    img {
      width: 37px;
      height: 18.5px;
      margin-top: 20px;
    }
  }
}
</style>
