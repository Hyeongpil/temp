<template>
  <div class="content-layout">
    <t-header />
    <div class="content-layout-wrapper">
      <div class="content-layout-pad">
        <content-title />

        <t-tab
          v-if="tabs.length > 0"
          :tabs="tabs"
          class="tab"
          @change="handleTab"
        />
        <slot />
      </div>
    </div>
    <t-footer class="content-footer" />
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import THeader from "~/components/header/THeader";
import ContentTitle from "~/components/content/ContentTitle.vue";
import TFooter from "~/components/footer/TFooter.vue";
import TTab, { tab } from "~/components/tab/TTab.vue";
import { routeNames } from "~/constants/router.constant";
import { contentTabs } from "~/components/tab/content.tabs";
import { newsTabs } from "~/components/tab/news.tabs";

const route = useRoute();
const router = useRouter();
const routeName = ref(route.name);
const {
  CONTENT,
  SCREENSHOT,
  MEDIA,
  CONTENT_DETAIL,
  NEWS,
  NEWS_EVENT,
  NEWS_NOTICE,
  NEWS_UPDATE,
  NEWS_DETAIL,
} = routeNames;

const tabs = computed(() => {
  switch (routeName.value) {
    case CONTENT:
    case SCREENSHOT:
    case MEDIA:
    case CONTENT_DETAIL:
      return contentTabs;
    case NEWS:
    case NEWS_UPDATE:
    case NEWS_EVENT:
    case NEWS_NOTICE:
    case NEWS_DETAIL:
      return newsTabs;

    default:
      return [];
  }
});

function handleTab(tab: tab) {
  router.push({ name: tab.routeName });
}

watch(
  () => route?.name,
  () => {
    routeName.value = String(route.name);
  }
);
</script>

<style lang="scss" scoped>
.content-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  .content-layout-wrapper {
    max-width: 1200px;
    width: 100%;

    .content-layout-pad {
      padding: 0 40px;
      @include xs_sm {
        padding: 0 20px;
      }

      .tab {
        @include xs_sm {
          margin-top: 50px;
        }
      }
    }
  }
  .content-footer {
    margin-top: 130px;
  }
}
</style>
