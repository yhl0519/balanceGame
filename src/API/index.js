import axios from 'axios'

axios.defaults.baseURL = 'https://heronoah.github.io/Woori_Balance';

const API = {
  // 게임 멘트 가져오기
  async getGameItem(category) {
    try {
      const url = `/${category}.json`;
      const res = await axios.get(url);
      return res.data;
    } catch (error) {
      console.log("getGameItem error > ", error);
      return error;
    }
  },

  // 벌칙 가져오기
  async getFailItem() {
    try {
      const url = `/fail.json`;
      const res = await axios.get(url);
      return res.data;
    } catch (error) {
      console.log("getFailItem error > ", error);
      return error;
    }
  },
};

export default API;