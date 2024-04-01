import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4f69fa7bb41b44e9af2368b384d06256",
  },
});
