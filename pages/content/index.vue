<template>
  <div class="content-container">
    <t-tab :tabs="tabs" />
    <div class="content-items-wrapper">
      <div class="best-wrapper">
        <span>베스트</span>
        <div class="content-wrapper mt20">
          <content-item
            v-for="content in contents"
            :key="content.title"
            :category="content.category"
            :title="content.title"
          />
        </div>
      </div>
      <divider y-margin="40" />
      <div class="content-wrapper">
        <content-item
          v-for="content in contents"
          :key="content.title"
          :category="content.category"
          :title="content.title"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TTab from "~/components/tab/TTab.vue";
import { definePageMeta } from "#imports";
import ContentItem from "~/components/content/ContentItem.vue";
import Divider from "~/components/divider/Divider.vue";

definePageMeta({
  layout: "content",
});

const tabs = ["전체보기", "스크린샷", "미디어"];

const contents = [
  {
    category: "미디어",
    title: "제목제목",
  },
  {
    category: "222",
    title: "333",
  },
  {
    category: "미디어",
    title: "제목제목",
  },
  {
    category: "222",
    title: "333",
  },
];
</script>

<style lang="scss" scoped>
.content-container {
  @include xs_sm {
    margin-top: 50px;
  }
  .content-items-wrapper {
    margin-top: 60px;

    .mt20 {
      margin-top: 20px;
    }
    .best-wrapper {
      span {
        font-weight: 700;
        font-size: 27px;
        line-height: 32px;

        color: #111111;
      }
    }

    .content-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 40px 20px;
      gap: 40px 20px;
      flex-wrap: wrap;

      @include xs_sm {
        grid-template-columns: 1fr;
      }
    }
  }
}
</style>
