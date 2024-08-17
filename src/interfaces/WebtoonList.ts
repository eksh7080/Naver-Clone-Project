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

export interface NewWebtoonList {
  itemList: [NewWebtoonListContents];
}

interface Author {
  id: number;
  name: string;
}

export interface NewWebtoonListContents {
  adult: boolean;
  backImage: string;
  bgColor: string;
  bgImage: string;
  bm: boolean;
  displayAuthor: string;
  frontImage: string;
  new: boolean;
  no: number;
  novelOriginAuthors: Array<Author>;
  painters: Array<Author>;
  rating: boolean;
  rest: boolean;
  starScore: number;
  subTitle: string;
  title: string;
  titleId: number;
  up: boolean;
}

export interface getNewWebtoonListParam {
  week: string;
  tag: string;
  sortByUpdate: string;
}
