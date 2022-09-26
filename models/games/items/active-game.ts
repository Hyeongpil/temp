import { gamesItem } from "~/models/games/games.model";

const activeColor = "#B3272E";
const randomColor = "#662E87";
const enjoyColor = "#F3A83A";
const singleColor = "#CCD227";
const speedColor = "#2DA3DA";
const thinkColor = "#70D6ED";

// TODO
// 1. [active]삼칙연산 & [think]비번을 맞춰라 new 아이콘 달기-> icon/new.png 로 사진 저장해둠
// 2. [think]비번을 맞춰라 - icon 이미지 없음

export const activeGameItems: gamesItem[] = [
  {
    contentImageUrl: "/img/games/content/3random.png",
    iconImageUrl: "/img/games/icon/3random.png",
    title: "3종랜덤",
    content:
      "3종랜덤은 액티브 게임 중 랜덤으로 3개의 게임을 순차적으로 진행한 후 그 점수의 합으로 순위를 경쟁하는 게임입니다.",
    backgroundColor: activeColor,
  },
  {
    contentImageUrl: "",
    iconImageUrl: "/img/games/icon/taptap.png",
    title: "탭탭",
    content:
      "화면에 있는 하얀 버튼을 10초$동안 마구 두드려주세요. 더 많이 두드린 플레이어가 승리합니다.",
    backgroundColor: activeColor,
  },
  {
    contentImageUrl: "/img/games/content/leftright.png",
    iconImageUrl: "/img/games/icon/leftright.png",
    title: "좌로우로",
    content:
      "화면에 있는 하얀 버튼을 10초동안 마구 두드려주세요. 더 많이 두드린 플레이어가 승리합니다.",
    backgroundColor: activeColor,
  },
  {
    contentImageUrl: "/img/games/content/leftright.png",
    iconImageUrl: "/img/games/icon/leftright.png",
    title: "좌로우로+",
    content:
      "중앙의 개와 고양이를 올바른 곳으로 보내주세요. 올바르게 보내면 점수가 증가하고, 틀리면 점수가 줄어듭니다.",
    backgroundColor: activeColor,
  },
  {
    contentImageUrl: "/img/games/content/chika.png",
    iconImageUrl: "/img/games/icon/chika.png",
    title: "부비부비",
    content:
      "화면에 있는 원을 터치한 상태로 좌우로 마구 비벼주세요. 더 많이 비빈 플레이어가 승리합니다.",
    backgroundColor: activeColor,
  },
  {
    contentImageUrl: "/img/games/content/piano.png",
    iconImageUrl: "/img/games/icon/piano.png",
    title: "피아노",
    content:
      "화면에 나타난 음계에 맞게 피아노 건반을 눌러주세요. 틀리면 점수가 줄어듭니다. 시간내에 많이 맞출수록 점수가 높습니다.",
    backgroundColor: activeColor,
  },
  {
    contentImageUrl: "/img/games/content/1_to_15.png",
    iconImageUrl: "/img/games/icon/1_to_15.png",
    title: "순서대로",
    content:
      "화면에 나타나는 숫자를 1부터 차례대로 터치해서 없애주세요. 더 빨리 없앨 수록 추가 점수를 획득할 수 있습니다.",
    backgroundColor: activeColor,
  },
  {
    contentImageUrl: "/img/games/content/mole.png",
    iconImageUrl: "/img/games/icon/mole.png",
    title: "두더지",
    content:
      "두더지 게임은 화면에 나타나는 두더지를 잡는 게임입니다. 폭탄은 터치하지 마세요.",
    backgroundColor: activeColor,
  },
  {
    contentImageUrl: "/img/games/content/plus.png",
    iconImageUrl: "/img/games/icon/plus.png",
    title: "더하기를 하자",
    content: "빠른 시간 안에 덧셈에 대한 정답을 입력하세요.",
    backgroundColor: activeColor,
  },
  {
    contentImageUrl: "/img/games/content/multiplication.png",
    iconImageUrl: "/img/games/icon/multiplication.png",
    title: "구구단을 하자",
    content: "빠른 시간 안에 구구단에 대한 정답을 입력하세요.",
    backgroundColor: activeColor,
  },
  {
    contentImageUrl: "/img/games/content/foursides.png",
    iconImageUrl: "/img/games/icon/foursides.png",
    title: "사방사방",
    content:
      "화면 가운데에 나타나는 기호를 위, 아래, 좌, 우 방향에 맞는 기호쪽으로 옮겨주세요.",
    backgroundColor: activeColor,
  },
  {
    contentImageUrl: "/img/games/content/eightsides.png",
    iconImageUrl: "/img/games/icon/eightsides.png",
    title: "팔방팔방",
    content:
      "화면 가운데에 나타나있는 기호를 8군데 방향 중 같은 기호가 있는 곳으로 옮겨주세요.",
    backgroundColor: activeColor,
  },
  {
    contentImageUrl: "",
    iconImageUrl: "/img/games/icon/foursides_hard.png",
    title: "사방사방+",
    content:
      "화면 가운데에 나타나는 기호를 위, 아래, 좌, 우 방향에 맞는 기호쪽으로 옮겨주세요.",
    backgroundColor: activeColor,
  },
  {
    contentImageUrl: "",
    iconImageUrl: "/img/games/icon/eightsides_hard.png",
    title: "팔방팔방+",
    content:
      "화면 가운데에 나타나있는 기호를 8군데 방향 중 같은 기호가 있는 곳으로 옮겨주세요.",
    backgroundColor: activeColor,
  },
  {
    contentImageUrl: "/img/games/content/rps.png",
    iconImageUrl: "/img/games/icon/rps.png",
    title: "가위바위보",
    content:
      "화면 가운데에 표시되는 가위, 바위, 보를 보고 하단에 있는 버튼 중 이기는 버튼을 눌러주세요.",
    backgroundColor: activeColor,
  },
  {
    contentImageUrl: "/img/games/content/eraser.png",
    iconImageUrl: "/img/games/icon/eraser.png",
    title: "지우개",
    content:
      "화면에 있는 하얀 부분을 손으로 마구 문질러서 지워주세요. 많이 지울수록 점수가 높아집니다.",
    backgroundColor: activeColor,
  },
  {
    contentImageUrl: "/img/games/content/balloon.png",
    iconImageUrl: "/img/games/icon/balloon.png",
    title: "풍선터뜨리기",
    content:
      "랜덤으로 두개의 색을 제시합니다. 제시어와 같은 색상의 풍선을 터치하세요. 헷갈릴 수 있어요.",
    backgroundColor: activeColor,
  },
  {
    contentImageUrl: "",
    iconImageUrl: "/img/games/icon/select4.png",
    title: "골라골라",
    content:
      "제시되는 도형과 같은 것을 최대한 빨리 찾아서 터치해주세요. 빨리 찾을수록 좋습니다.",
    backgroundColor: activeColor,
  },
  {
    contentImageUrl: "",
    iconImageUrl: "/img/games/icon/select9.png",
    title: "골라골라+",
    content:
      "제시되는 도형과 같은 것을 최대한 빨리 찾아서 터치해주세요. 빨리 찾을수록 좋습니다.",
    backgroundColor: activeColor,
  },
  {
    contentImageUrl: "/img/games/content/touch.png",
    iconImageUrl: "/img/games/icon/touch.png",
    title: "터치터치",
    content:
      "화면에 있는 점을 터치하면 자신의 색으로 바뀝니다. 다른 사람이 터치하면 해당 플레이어의 색으로 다시 변합니다.",
    backgroundColor: activeColor,
  },
  {
    contentImageUrl: "",
    iconImageUrl: "/img/games/icon/arithmetic.png",
    title: "삼칙연산",
    content:
      "랜덤으로 표시되는 산수기호를 보고 높은 수가 나올 수 있도록 아래 숫자들을 넣어보세요. 모든 결과 값을 합해서 점수가 됩니다.",
    backgroundColor: activeColor,
  },
  {
    contentImageUrl: "/img/games/content/shakeit.png",
    iconImageUrl: "/img/games/icon/shakeit.png",
    title: "쉐킷쉐킷",
    content:
      "핸드폰을 마구 흔들어주세요. 그러나 핸드폰이 날아갈 수 있으니 이 게임은 하지 마세요. 책임지지 않습니다.",
    backgroundColor: activeColor,
  },
  {
    contentImageUrl: "/img/games/content/king.png",
    iconImageUrl: "/img/games/icon/king.png",
    title: "제비뽑기",
    content:
      "각자의 폰에 표시되는 카드를 아래로 내려서 숫자를 부여받는 게임입니다.",
    backgroundColor: randomColor,
  },
  {
    contentImageUrl: "/img/games/content/roulette.png",
    iconImageUrl: "/img/games/icon/roulette.png",
    title: "라이트룰렛",
    content:
      "투명한 컵에 음료를 채운 후 화면에 표시되는 원 위에 올려놓습니다. 방장이 시작버튼을 누르면 반짝반짝 빛나다가 한명을 지목해 줍니다.",
    backgroundColor: randomColor,
  },
  {
    contentImageUrl: "/img/games/content/liar.png",
    iconImageUrl: "/img/games/icon/liar.png",
    title: "라이어 게임",
    content: "우리중에 라이어가 있다! 라이어를 찾아내보자",
    backgroundColor: randomColor,
  },
  {
    contentImageUrl: "",
    iconImageUrl: "/img/games/icon/mafia.png",
    title: "마피아게임",
    content:
      "숨어있는 마피아를 찾아 처형하라! 시민과 마피아 수가 같아지면 마피아의 승리. 마피아를 모두 처형하면 시민의 승리.",
    backgroundColor: randomColor,
  },
  {
    contentImageUrl: "/img/games/content/score.png",
    iconImageUrl: "/img/games/icon/score.png",
    title: "제점수는요",
    content:
      "모든 게이머가 점수를 입력하면 평균 점수를 보여줍니다. 노래방 같은 곳에서 특효!",
    backgroundColor: enjoyColor,
  },
  {
    contentImageUrl: "/img/games/content/ox.png",
    iconImageUrl: "/img/games/icon/ox.png",
    title: "OX게임",
    content:
      "O 또는 X 로 게임에 참여하고 있는 사람들의 투표 경과를 알려 줍니다.",
    backgroundColor: enjoyColor,
  },
  {
    contentImageUrl: "/img/games/content/pencil.png",
    iconImageUrl: "/img/games/icon/pencil.png",
    title: "연필돌리기",
    content:
      "연필돌리기 게임은 방장의 폰에서만 진행이 되는 게임으로 연필을 돌려서 멈추는 방향의 사람의 벌칙을 받는 게임입니다.",
    backgroundColor: singleColor,
  },
  {
    contentImageUrl: "/img/games/content/fingerchoice.png",
    iconImageUrl: "/img/games/icon/fingerchoice.png",
    title: "핑거초이스",
    content:
      "방장의 폰에 폴레이어들 모두 한 손가락을 터치한 상태로 기다리면 5초 후 한명을 자동으로 선택해주는 게임입니다.",
    backgroundColor: singleColor,
  },
  {
    contentImageUrl: "/img/games/content/catchruler.png",
    iconImageUrl: "/img/games/icon/catchruler.png",
    title: "자를잡아라",
    content:
      "구멍에서 하얀 자가 나오는 순간 빠르게 화면을 터치하세요. 총 3번 진행이 되며, 나오기 전에 터치하면 0점처리 됩니다.",
    backgroundColor: speedColor,
  },
  {
    contentImageUrl: "",
    iconImageUrl: "",
    title: "비번을 맞춰라",
    content:
      "텐텐 최조의 서든데스 모든 게임! 한명이 끝아면 모두가 끝나는 아주 특별한 모드의 게임이에요! 남들보다 빠르게 비번을 맞춰보세요!",
    backgroundColor: thinkColor,
  },
];
