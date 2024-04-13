import axios, { AxiosRequestConfig } from "axios";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4f69fa7bb41b44e9af2368b384d06256",
  },
});
class ApiClient<T> {
  endPoint: string;
  constructor(endPoint: string) {
    this.endPoint = endPoint;
  }
  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endPoint, config)
      .then((res) => res.data);
  };
}
export default ApiClient;
