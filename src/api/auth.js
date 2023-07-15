import axios from "axios";
import config from "../config/index.js";
const AuthAPI = {
  login: async ({email, password}) => {
    // console.log("SEND")
    return await axios.post(`${config.BASE_URL}/auth/login`, {
      email,
      password,
    },{
      withCredentials: true,
    });
  },
  me: async () => {
    return await axios.get(`${config.BASE_URL}/auth/me`, {
      withCredentials: true,
    });
  },
};
export default AuthAPI;
