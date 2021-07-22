import axios from "axios";
const baseURL = process.env.VUE_APP_BASE_URL;
let Request = axios.create({
  baseURL,
  timeout: 60000,
});
// 请求拦截器
Request.interceptors.request.use((config) => {
  return config;
});
// 响应拦截器
Request.interceptors.response.use((response) => {
  return response;
});
export default Request;
