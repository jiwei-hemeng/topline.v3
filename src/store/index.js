import { createStore } from "vuex";
// 导入user模块
import User from "./modules/user";
export default createStore({
  modules: {
    user: User,
  },
});
