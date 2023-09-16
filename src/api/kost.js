import axios from "axios";
import config from "../config/index.js";

export const get_kost_cities = async () => {
  return await axios.get(`${config.BASE_URL}/kost/cities`, {
    withCredentials: true,
  });
};

export const get_all_kosts = async ({
  keyword,
  limit,
  sorted_by,
  sort,
  search_by,
}) => {
  return await axios.get(
    config.BASE_URL + "/kost",
    {
      params: {
        keyword,
        limit,
        sorted_by,
        sort,
        ...search_by,
      },
    },
    { withCredentials: true }
  );
};

export const get_kost_detail = async ({ id }) => {
  return await axios.get(`${config.BASE_URL}/kost/${id}`, {
    withCredentials: true,
  });
};

export const get_all_kost_type = async () => {
  return await axios.get(`${config.BASE_URL}/kost-type`, {
    withCredentials: true,
  });
};

export const create_kost = async (data) => {
  const form = new FormData();
  console.log(data);
  for (const data_key in data) {
    if (Array.isArray(data[data_key])) {
      for (const data_inside of data[data_key]) {
        form.append(data_key, data_inside);
      }
    } else {
      form.append(data_key, data[data_key]);
    }
  }
  
        console.log("FINAL FORM", form);
  return await axios.post(`${config.BASE_URL}/kost`, form, {
    withCredentials: true,
  });
};
