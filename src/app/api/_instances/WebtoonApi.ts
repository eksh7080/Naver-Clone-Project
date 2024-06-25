import axios from "axios";

const instance = axios.create({
  baseURL: ``,
});

export default {
  async getWebtoonList(param) {
    const res = await instance({
      url: `https://korea-webtoon-api.herokuapp.com?perPage=${param.perPage}&page=${param.page}&service=${param.service}&updateDay=${param.updateDay}`,
      method: "GET",
    });
    return res;
  },

  async getNaverWebtoonList() {
    const res = await instance({
      url: `http:`,
      method: "GET",
    });
    return res;
  },
};
