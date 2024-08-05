/**
 * 파일명: /utils/Webtoon.ts
 * 설명: 웹툰 리스트 관련 유틸함수 모아놓은 스크립트
 */

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
      return "토요일";
      break;
    case "Sun":
      return "일요일";
      break;
    default:
      break;
  }
};

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
