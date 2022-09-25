import { gamesItem } from "~/models/games/games.model";

const activeColor = "#B3272E";

export const activeGameItems: gamesItem[] = [
  {
    contentImageUrl: "/img/games/content/3random.png",
    iconImageUrl: "/img/games/icon/3random.png",
    title: "3종랜덤",
    content:
      "3종랜덤은 액티브 게임 중 랜덤으로 3개의 게임을 순차적으로 진행한 후 그 점수의 합으로 순위를 경쟁하는 게임입니다.",
    backgroundColor: activeColor,
  },
];
