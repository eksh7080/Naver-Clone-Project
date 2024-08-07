/**
 * 파일명: WebtoonList.ts
 * 설명: 웹툰 리스트 인터페이스 스크립트
 */

export interface WebtoonListAll {
  MONDAY: WebtoonListContents[];
  TUESDAY: WebtoonListContents[];
  WEDNESDAY: WebtoonListContents[];
  THURSDAY: WebtoonListContents[];
  FRIDAY: WebtoonListContents[];
  SATURDAY: WebtoonListContents[];
  SUNDAY: WebtoonListContents[];
}

export interface WebtoonListContents {
  adult: boolean;
  author: string;
  bestChallengeLevelUp: boolean;
  bm: boolean;
  finish: boolean;
  new: boolean;
  openToday: boolean;
  potenUp: boolean;
  rest: boolean;
  starScore: number;
  thumbnailUrl: string;
  titleId: number;
  titleName: string;
  up: boolean;
  viewCount: number;
  _id: string;
}
