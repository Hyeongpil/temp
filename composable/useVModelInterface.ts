import { computed, Ref } from "vue";

export function useVModelInterface<T>(
  modelValue: Ref,
  update: (value: T) => void
) {
  const value = computed<T>({
    get() {
      return modelValue.value;
    },
    set(value) {
      update(value);
    },
  });

  return {
    value,
  };
}
