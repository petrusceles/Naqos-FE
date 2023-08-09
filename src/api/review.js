import axios from "axios";
import config from "../config/index.js";

export const get_review_by_kost = async (kost) => {
  // console.log(kost)
  return await axios.get(`${config.BASE_URL}/review`, {
    params: {kost},
    withCredentials: true,
  });
};

