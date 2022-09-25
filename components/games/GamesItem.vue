<template>
  <div :style="containerStyle" class="games-item-container">
    <div class="title-wrapper">
      <div class="icon-wrapper">
        <img :src="gamesItem.iconImageUrl" alt="icon" />
      </div>
      <span>{{ gamesItem.title }}</span>
    </div>
    <span>{{ gamesItem.content }}</span>
    <div class="img-wrapper">
      <img :src="gamesItem.contentImageUrl" alt="games-img" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { gamesItem } from "~/models/games.model";

export interface gamesItemProps {
  gamesItem: gamesItem;
}
const props = defineProps<gamesItemProps>();

const containerStyle = computed(() => ({
  backgroundColor: props.gamesItem.backgroundColor,
}));
</script>

<style lang="scss" scoped>
.games-item-container {
  width: 370px;
  height: 470px;
  background: #b3272e;
  border-radius: 20px;
  padding: 60px;
}
</style>
