import { ValueOf } from "~/types/value-of";

export const GROUP_TYPE = {
  ACTIVE: "ACTIVE", // 액티브
  RANDOM: "RANDOM", // 복불복
  ENJOY: "ENJOY", // 엔조이
  SINGLE: "SINGLE", // 하나로
  SPEED: "SPEED", // 순발력
  THINK: "THINK", // 추리력
} as const;
export type GROUP_TYPE = ValueOf<typeof GROUP_TYPE>;
