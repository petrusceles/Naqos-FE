import axios from "axios";
import config from "../config/index.js";

export const get_kost_cities = async () => {
  return await axios.get(`${config.BASE_URL}/kost/cities`, {
    withCredentials: true,
  });
};

export const get_all_kosts = async ({keyword,limit,sorted_by}) => {
  return await axios.get(
    config.BASE_URL + "/kost",
    {
      params: {
        keyword,
        limit,
        sorted_by,
      },
    },
    { withCredentials: true }
  );
};
