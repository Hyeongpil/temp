import { routeNames } from "~/constants/router.constant";

interface menu {
  label: string;
  routeName: string;
}

export const menus: menu[] = [
  {
    label: "새소식",
    routeName: routeNames.NEWS,
  },
  {
    label: "콘텐츠",
    routeName: routeNames.CONTENT,
  },
  {
    label: "게임소개",
    routeName: routeNames.GAMES,
  },
];
