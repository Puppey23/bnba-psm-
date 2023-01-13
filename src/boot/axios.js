import Vue from "vue";
import axios from "axios";
import { Cookies } from "quasar";

const axiosInstance = axios.create({
  baseURL: "http://172.18.20.5:4010/",
  timeout: 0,
});

export default function ({ Vue, ssrContext }) {
  const cookies = process.env.SERVER ? Cookies.parseSSR(ssrContext) : Cookies;

  axiosInstance.interceptors.request.use(
    (config) => {
      let token = cookies.get("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  Vue.prototype.$axios = axiosInstance;
}

export { axiosInstance };
