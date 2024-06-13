/**
 * 파일명: /utils/Webtoon.ts
 * 설명: 헤더 관련 유틸함수 모아놓은 스크립트
 */

export const ConvertWeekChange = (week: string) => {
  switch (week) {
    case "mon":
      return "월요일";
      break;
    case "tue":
      return "화요일";
      break;
    case "wed":
      return "수요일";
      break;
    case "thu":
      return "목요일";
      break;
    case "fri":
      return "금요일";
      break;
    case "sat":
      return "토요일";
      break;
    case "sun":
      return "일요일";
      break;
    default:
      break;
  }
};
