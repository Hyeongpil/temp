<template>
  <section class="main-section2-container">
    <div class="text-wrapper">
      <span class="text-bold">ANYWHERE</span>
      <span class="text-bold">ANYTIME</span>
      <span class="text-transparent">YOU WANT</span>
    </div>
    <div class="img-wrapper">
      <img class="cha-1" src="/img/cha-1.png" />
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.main-section2-container {
  height: 980px;
  background: #ff9c00;
  position: relative;

  .text-wrapper {
    position: absolute;
    top: 50%;
    left: 40%;
    transform: translate(-50%, -50%);
    width: 700px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 16px;

    font-weight: 900;
    font-size: 119px;
    line-height: 119px;

    @include xs_sm {
      left: 50%;
      align-items: center;
      font-size: 64px;
      line-height: 64px;
      width: auto;
    }

    .text-bold {
      color: #ffffff;
      border-bottom: 12px solid #ffffff;
    }
    .text-transparent {
      color: rgba(255, 255, 255, 0);
      -webkit-text-stroke: 1px white;
    }
  }
  .img-wrapper {
    width: 700px;
    position: absolute;
    top: 55%;
    left: 60%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: flex-end;

    @include xs_sm {
      width: auto;
      top: 70%;
      left: 50%;
    }

    .cha-1 {
      @include xs_sm {
        width: 254px;
      }
    }
  }
}
</style>
