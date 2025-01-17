import { getNewWebtoonListParam } from "@interfaces/WebtoonList";
import axios from "axios";

const instance = axios.create({
  baseURL: ``,
});

// 디비에 저장된 네이버 웹툰 리스트
export const getNaverWebtoonList = async () => {
  return (await instance.get("http://localhost:3000/api/webtoonList"))?.data;
};

// 신작 웹툰 리스트 디비에 저장
export const getNaverNewWebtoonList = async (param: getNewWebtoonListParam) => {
  return (await instance.get("http://localhost:3000/api/newWebtoon", param))
    ?.data;
};

// 디비에 저장된 신작 웹툰 리스트
export const getDbNewWebtoonList = async () => {
  return (await instance.get("http://localhost:3000/api/newWebtoonList"))?.data;
};
