/**
 * 파일명: /utils/Webtoon.ts
 * 설명: 웹툰 리스트 관련 유틸함수 모아놓은 스크립트
 */

import { WebtoonListAll, WebtoonListContents } from "@interfaces/WebtoonList";

/**
 * 금일 요일에 따른 몽고 디비 특정 document ID 반환
 * @return {string}
 */
export const ConvertWeekId = (week: string) => {
  switch (week) {
    case "Mon":
      return "668baea54e7cd397eff17a62";
      break;
    case "Tue":
      return "66b0e9d260b5c9a93a76b073";
      break;
    case "Wed":
      return "668e4da164e8e817fa7029f9";
      break;
    case "Thu":
      return "668f80840b1c028976874581";
      break;
    case "Fri":
      return "6690e6b74610b5edb1e19926";
      break;
    case "Sat":
      return "66c04ff1915b2fa57999aefa";
      break;
    case "Sun":
      return "66c1df0cd64ee266174ac471";
      break;
    default:
      break;
  }
};

// 요일 반환 함수
export const ConvertTodayWeek = (week: string) => {
  switch (week) {
    case "Mon":
      return "MONDAY";
      break;
    case "Tue":
      return "TUESDAY";
      break;
    case "Wed":
      return "WEDNESDAY";
      break;
    case "Thu":
      return "THURSDAY";
      break;
    case "Fri":
      return "FRIDAY";
      break;
    case "Sat":
      return "SATURDAY";
      break;
    case "Sun":
      return "SUNDAY";
      break;
    default:
      break;
  }
};

export const ConvertNewWebtoonId = (week: string) => {
  return "66c1eb29b41a3725ec17b4ee";

  // switch (week) {
  //   case "Mon":
  //     return "";
  //     break;
  //   case "Tue":
  //     return "";
  //     break;
  //   case "Wed":
  //     return "";
  //     break;
  //   case "Thu":
  //     return "";
  //     break;
  //   case "Fri":
  //     return "";
  //     break;
  //   case "Sat":
  //     return "";
  //     break;
  //   case "Sun":
  //     return "";
  //     break;
  //   default:
  //     return "66c07002cfc9e878a2c6bba0";
  //     break;
  // }
};

export const FilterTodayNewWebtoon = (webtoonList: WebtoonListAll) => {
  const today = new Date();
  const week = today.toString().split(" ")[0];
  if (webtoonList) {
    const filterList = webtoonList[ConvertTodayWeek(week)].filter(
      (list: WebtoonListContents) => list.new === true,
    );
    return filterList;
  }
};
