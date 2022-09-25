import { tab } from "~/components/tab/TTab.vue";

export const gamesTabs: tab[] = [
  {
    label: "전체보기",
    routeName: "games",
  },
  {
    label: "액티브게임",
    routeName: "games-active",
  },
  {
    label: "복불복게임",
    routeName: "games-random",
  },
  {
    label: "엔조이게임",
    routeName: "games-enjoy",
  },
  {
    label: "핸드폰하나로",
    routeName: "games-single",
  },
  {
    label: "순발력게임",
    routeName: "games-speed",
  },
  {
    label: "추리력게임",
    routeName: "games-think",
  },
];
