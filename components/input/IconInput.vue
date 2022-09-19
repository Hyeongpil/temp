<template>
  <div class="icon-input-container">
    <input v-model="value" :placeholder="placeholder" class="input" />
    <img :src="iconPath" alt="icon" class="icon" />
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "@vue/runtime-core";
import { useVModelInterface } from "~/composable/useVModelInterface";
import { toRef } from "#imports";

export interface iconInputProps {
  modelValue: string;
  placeholder?: string;
  iconPath?: string;
}

const props = withDefaults(defineProps<iconInputProps>(), {
  placeholder: "검색어를 입력해주세요",
  iconPath: "/img/icon/search.png",
});
const emits = defineEmits(["update:modelValue"]);

const { value } = useVModelInterface<string>(toRef(props, "modelValue"), (v) =>
  emits("update:modelValue", v)
);
</script>

<style lang="scss" scoped>
.icon-input-container {
  display: flex;
  width: 100%;
  max-width: 310px;
  border: 1px solid #dddddd;
  border-radius: 10px;
  padding: 20px;

  .input {
    border: none;
    flex-grow: 9;
  }
  .input:focus {
    outline: none;
    text-align: left;
    flex-grow: 1;
  }
}
</style>
