import { GROUP_TYPE } from "~/constants/games.constant";
import { activeGameItems } from "~/models/games/items/active-game";

export interface gamesItem {
  iconImageUrl: string;
  title: string;
  content: string;
  backgroundColor: string;
  contentImageUrl: string;
}

export interface gamesTitle {
  title: string;
  count: number;
  desc: string;
  tagList: string[];
  backgroundColor: string;
  groupType: GROUP_TYPE;
  logoUrl: string;
}

export interface games {
  titleItem: gamesTitle;
  games: gamesItem[];
}

export const activeGames: games = {
  titleItem: {
    backgroundColor: "#FFEEEA",
    count: 22,
    tagList: ["#순발력", "#터치"],
    desc: "액티브게임은 이런이런 게임입니다.",
    groupType: GROUP_TYPE.ACTIVE,
    title: "액티브 게임",
    logoUrl: "/img/cha-1.png",
  },
  games: activeGameItems,
};

export const randomGames: games = {
  titleItem: {
    backgroundColor: "#F7EAFF",
    count: 4,
    tagList: ["#순발력", "#터치"],
    desc: "복불복 게임은 이런이런 게임입니다.",
    groupType: GROUP_TYPE.ACTIVE,
    title: "복불복 게임",
    logoUrl: "/img/cha-1.png",
  },
  games: [],
};

export const gameList: games[] = [activeGames, randomGames];
