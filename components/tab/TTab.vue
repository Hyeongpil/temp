<template>
  <div class="tab-container">
    <div class="tab-wrapper">
      <div
        v-for="tab in tabs"
        :key="tab.label"
        class="tab-item"
        @click="selectedTab = tab"
      >
        <span
          :class="['title', { selected: selectedTab.label === tab.label }]"
          >{{ tab.label }}</span
        >
      </div>
    </div>
    <div class="divider" />
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "@vue/runtime-core";
import { ref } from "@vue/reactivity";
import { watch } from "vue";
import { useRoute } from "vue-router";

export interface tab {
  label: string;
  routeName: string;
}

export interface tabProps {
  tabs: tab[];
}
const props = defineProps<tabProps>();
const emit = defineEmits(["change"]);
const route = useRoute();
// const nowTab =

const selectedTab = ref(props.tabs[0]);

watch(
  () => selectedTab.value.label,
  () => emit("change", selectedTab.value),
  {
    deep: true,
  }
);
</script>

<style lang="scss" scoped>
.tab-container {
  display: flex;
  flex-direction: column;

  .tab-wrapper {
    display: flex;

    .tab-item:not(:first-child) {
      margin-left: 40px;
      @include xs_sm {
        margin-left: 30px;
      }
    }

    .tab-item {
      display: flex;
      flex-direction: column;
      cursor: pointer;
      font-size: 18px;
      line-height: 21px;
      @include xs_sm {
        font-size: 16px;
        line-height: 19px;
      }
      .selected.title {
        font-weight: 800;
        color: #111111;
        border-bottom: 5px solid;
        padding-bottom: 10px;
      }

      .title {
        font-weight: 400;
        color: #777777;
      }
    }
  }

  .divider {
    border-top: 1px solid #dddddd;
  }
}
</style>
