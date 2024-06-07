import axios from "axios";

const instance = axios.create({
  baseURL: `https://korea-webtoon-api.herokuapp.com`,
});

export default {
  async getWebtoonList(param) {
    const res = await instance({
      url: `?perPage=${param.perPage}&page=${param.page}&service=${param.service}&updateDay=${param.updateDay}`,
      method: "GET",
    });
    return res;
  },
};
