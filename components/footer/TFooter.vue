<template>
  <footer class="footer-container">
    <div class="company-wrapper">
      <span class="company">APPTEEN PLANET</span>
      <div class="info-wrapper">
        <span>{{ "대표 : 이진국 사업자번호 : 000 - 00 - 00000&nbsp" }} </span>
        <span>
          {{ "서울시 성동구 독서당로39길 48 3층" }}
        </span>
      </div>
    </div>
    <span class="copyright"
      >Copyright 2022 AppteenPlanet Co.,Ltd. All Rights Reserved.</span
    >
  </footer>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.footer-container {
  height: 173px;
  background: #222222;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 90px;

  @include xs_sm {
    height: 280px;
    padding: 0 16px;
    align-items: center;
  }

  .company-wrapper {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    @include xs_sm {
      justify-content: center;
    }

    .company {
      font-weight: 900;
      font-size: 27px;
      line-height: 26px;
      color: #ffffff;
    }
    .info-wrapper {
      display: flex;
      flex-wrap: wrap;
      margin-left: 32px;
      justify-content: center;
      @include xs_sm {
        margin-left: 0;
        margin-top: 20px;
      }
      span {
        font-weight: 400;
        font-size: 12px;
        line-height: 21px;
        color: #ffffff;
      }
    }
  }
  .copyright {
    font-weight: 400;
    font-size: 12px;
    line-height: 24px;
    color: #ffffff;
    margin-top: 10px;
  }
}
</style>
