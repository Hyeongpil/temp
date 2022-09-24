<template>
  <div class="content-detail-container">
    <div class="content-wrapper">
      <div class="content-info-wrapper">
        <div class="media"></div>
        <span class="category">스크린샷</span>
        <div class="title-wrapper">
          <span class="title">텐텐 런칭 서비스 프로모션 </span>
          <span class="date">2022-10-11</span>
        </div>
        <span class="desc">badsasdasdasd</span>
      </div>
    </div>
    <divider :y-margin="30" />
    <div class="content-item-wrapper">
      <content-item
        v-for="content in contents"
        :key="content.title"
        :category="content.category"
        :title="content.title"
        @click="handleContentClick(content.id)"
      />
    </div>
    <div class="btn-wrapper">
      <t-button :label="'목록'" @click="handleList" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { definePageMeta } from "#imports";
import Divider from "~/components/divider/Divider.vue";
import ContentItem from "~/components/content/ContentItem.vue";
import { routeNames } from "~/constants/router.constant";
import TButton from "~/components/button/TButton.vue";

definePageMeta({
  layout: "content",
});

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
    id: "123",
  },
  {
    category: "미디어",
    title: "제목제목",
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

function handleList() {
  router.push({
    name: routeNames.CONTENT,
  });
}
</script>

<style lang="scss" scoped>
.content-detail-container {
  display: flex;
  flex-direction: column;
  margin-top: 60px;

  .content-wrapper {
    display: flex;
    justify-content: center;
    .content-info-wrapper {
      display: flex;
      flex-direction: column;
      max-width: 1000px;
      width: 100%;

      .media {
        width: 100%;
        height: 544px; // 임시
        //height: auto;
        background: #d9d9d9;
        border-radius: 20px;
        @include xs_sm {
          height: 264px;
        }
      }

      .category {
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #ff9c00;
        margin-top: 30px;
      }
      .title-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 15px;
        @include xs_sm {
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          margin-top: 10px;
        }
        .title {
          font-weight: 700;
          font-size: 30px;
          line-height: 36px;
          color: #111111;
          @include xs_sm {
            font-size: 21px;
            line-height: 25px;
          }
        }
        .date {
          font-weight: 400;
          font-size: 14px;
          line-height: 17px;
          color: #777777;
          @include xs_sm {
            margin-top: 10px;
          }
        }
      }
      .desc {
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
        color: #555555;
        margin-top: 30px;
      }
    }
  }

  .content-item-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25%, auto));
    gap: 0 20px;
    @include xs_sm {
      overflow-x: scroll;
    }
  }
  .btn-wrapper {
    display: flex;
    justify-content: center;
    button {
      margin-top: 60px;
    }
  }
}
</style>
