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
  </section>
</template>

<script setup lang="ts">
import ChaBox from "@/components/box/ChaBox.vue";
</script>

<style scoped lang="scss">
.main-section3-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 3200px;
  overflow: hidden;

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
}
</style>
