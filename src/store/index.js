import { createStore } from "vuex";
// 导入user模块
import User from "./modules/user";
export default createStore({
  modules: {
    user: User,
  },
  strict: process.env.NODE_ENV !== "production", // 开发环境启用严格模式
});
