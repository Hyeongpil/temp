import { computed } from "vue";

export const useBrowserResize = () => {
  const { width, height } = useWindowSize();

  const isXs = computed(() => width.value < 960);

  return {
    width,
    height,
    isXs,
  };
};
