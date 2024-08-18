import { getNewWebtoonListParam } from "@interfaces/WebtoonList";
import axios from "axios";

const instance = axios.create({
  baseURL: ``,
});

export default {
  // 디비에 저장된 네이버 웹툰 리스트
  async getNaverWebtoonList() {
    const res = await instance({
      url: `http://localhost:3000/api/webtoonList`,
      method: "GET",
    });
    return res;
  },
  // 신작 웹툰 리스트 디비에 저장
  async getNaverNewWebtoonList(param: getNewWebtoonListParam) {
    const res = await instance({
      url: `http://localhost:3000/api/newWebtoon`,
      method: "GET",
      params: param,
    });
    return res;
  },
  // 디비에 저장된 신작 웹툰 리스트
  async getDbNewWebtoonList() {
    const res = await instance({
      url: `http://localhost:3000/api/newWebtoonList`,
      method: "GET",
    });
    return res;
  },
};
