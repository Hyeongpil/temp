<template>
  <div class="content-list-container">
    <div class="best-wrapper">
      <span>베스트</span>
      <div class="content-wrapper mt20">
        <content-item
          v-for="content in contents"
          :key="content.title"
          :category="content.category"
          :title="content.title"
          @click="handleContentClick(content.id)"
        />
      </div>
    </div>
    <divider :y-margin="40" />
    <div class="content-wrapper">
      <content-item
        v-for="content in contents"
        :key="content.title"
        :category="content.category"
        :title="content.title"
        @click="handleContentClick(content.id)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import ContentItem from "./ContentItem";
import Divider from "~/components/divider/Divider.vue";
import { routeNames } from "~/constants/router.constant";

const router = useRouter();

const contents = [
  {
    category: "미디어",
    title: "제목제목",
    id: "abc",
  },
  {
    category: "222",
    title: "333",
    id: "abc",
  },
  {
    category: "미디어",
    title: "제목제목",
    id: "abc",
  },
  {
    category: "222",
    title: "333",
    id: "abc",
  },
];

function handleContentClick(id: string) {
  router.push({
    name: routeNames.CONTENT_DETAIL,
    params: {
      id,
    },
  });
}
</script>

<style lang="scss" scoped>
.content-list-container {
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
    grid-template-columns: repeat(auto-fill, minmax(25%, auto));
    grid-gap: 40px 20px;
    gap: 40px 20px;
    flex-wrap: wrap;

    @include xs_sm {
      grid-template-columns: 1fr;
    }
  }
}
</style>
