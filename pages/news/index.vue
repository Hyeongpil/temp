<template>
  <div class="news-all-container">
    <div class="fixed-wrapper">
      <news-item
        v-for="data in datas"
        id="123"
        :key="data.title"
        :date="data.date"
        :highlight="true"
        :title="data.title"
        :type="data.type"
      />
    </div>
    <div class="content-wrapper">
      <divider :height="2" color="#111111" />
      <div v-for="data in datas" :key="data.title">
        <news-item :date="data.date" :title="data.title" :type="data.type" />
        <divider />
      </div>
    </div>
    <div class="bottom-wrapper">
      <icon-input v-model="search" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity";
import { definePageMeta } from "#imports";
import Divider from "~/components/divider/Divider.vue";
import NewsItem, { newsItemProps } from "~/components/news/NewsItem.vue";
import IconInput from "~/components/input/IconInput.vue";

definePageMeta({
  layout: "content",
});
const search = ref("");

const datas: newsItemProps[] = [
  {
    date: "2022-10-22",
    title: "텐텐 런칭",
    type: "이벤트",
  },
  {
    date: "2022-10-22",
    title: "텐텐 런칭",
    type: "이벤트",
  },
  {
    date: "2022-10-22",
    title: "텐텐 런칭",
    type: "이벤트",
  },
  {
    date: "2022-10-22",
    title: "텐텐 런칭",
    type: "이벤트",
  },
];
</script>

<style lang="scss" scoped>
.news-all-container {
  .fixed-wrapper {
    margin-top: 60px;
    > :not(:first-child) {
      margin-top: 1px;
    }
  }
  .content-wrapper {
    margin-top: 50px;
  }
  .bottom-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 45px;

    .search-input {
      position: relative;
      width: 100%;
      max-width: 310px;
      border: 1px solid #dddddd;
      border-radius: 10px;
      padding: 20px;
    }
    .icon {
      position: absolute;
      top: 0;
      right: 30%;
    }
  }
}
</style>
