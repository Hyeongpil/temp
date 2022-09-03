<template>
  <section class="main-section4-container">
    <img class="cha-5" src="/img/cha-5.png" />
    <div class="desc-wrapper">
      <ten-ten-desc
        title="동시 접속"
        :desc="'100명까지 동시접속 가능!\n친구,가족들 다같이 모여 게임을 즐겨보세요.'"
      />
      <ten-ten-desc
        title="32가지 미니게임"
        :desc="'복불복 게임부터 액티비티게임까지 다양한\n미니게임이 무려 32가지나 준비되어 있어요!'"
      />
      <ten-ten-desc
        title="손쉬운 게임시작"
        :desc="'5초안에 손쉬운 방만들기!\n QR코드 스캔으로 다같이 빠르게 게임시작 가능!'"
      />
    </div>
    <img class="cha-6" src="/img/cha-6.png" />
  </section>
</template>

<script lang="ts" setup>
import TenTenDesc from "~/components/main/TenTenDesc";
</script>

<style scoped lang="scss">
.main-section4-container {
  height: 561px;
  background: #222222;
  display: flex;
  align-items: center;
  position: relative;

  @include xs_sm {
    height: 950px;
  }

  .cha-5 {
    position: absolute;
    left: 200px;
    top: -200px;
    width: 405px;
    @include xs_sm {
      left: 0;
    }
  }
  .cha-6 {
    position: absolute;
    right: 350px;
    bottom: -40px;
    width: 230px;
    @include xs_sm {
      right: 100px;
    }
  }

  .desc-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-around;
    @include xs_sm {
      flex-direction: column;
      gap: 80px;
    }
  }
}
</style>
