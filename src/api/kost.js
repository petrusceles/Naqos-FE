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
  sorted_by='name',
  sort='asc',
  search_by,
  pageParam,
}) => {
  return await axios.get(
    config.BASE_URL + "/kost",
    {
      params: {
        keyword,
        limit,
        sorted_by,
        sort,
        skip: pageParam,
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
    if (data[data_key] == undefined) {
      continue;
    }
    if (Array.isArray(data[data_key])) {
      for (const data_inside of data[data_key]) {
        form.append(data_key, data_inside);
      }
    } else {
      form.append(data_key, data[data_key]);
    }
  }
  return await axios.post(`${config.BASE_URL}/kost`, form, {
    withCredentials: true,
  });
};

export const update_kost = async (data) => {
  console.log("KOST_ID", data);
  const roomPhotos = data["room_photos"];
  data["room_photos"] = [];
  data["room_photos_onhold_url"] = [];
  for (const photo of roomPhotos) {
    if (typeof photo == "string") {
      data["room_photos_onhold_url"].push(photo);
    } else {
      data["room_photos"].push(photo);
    }
  }

  const outsidePhotos = data["outside_photos"];
  data["outside_photos"] = [];
  data["outside_photos_onhold_url"] = [];
  for (const photo of outsidePhotos) {
    if (typeof photo == "string") {
      data["outside_photos_onhold_url"].push(photo);
    } else {
      data["outside_photos"].push(photo);
    }
  }

  const insidePhotos = data["inside_photos"];
  data["inside_photos"] = [];
  data["inside_photos_onhold_url"] = [];
  for (const photo of insidePhotos) {
    if (typeof photo == "string") {
      data["inside_photos_onhold_url"].push(photo);
    } else {
      data["inside_photos"].push(photo);
    }
  }
  console.log("FINAL DATA TO BE SENT", data);
  const form = new FormData();
  for (const data_key in data) {
    if (data[data_key] == undefined) {
      continue;
    }
    if (Array.isArray(data[data_key])) {
      for (const data_inside of data[data_key]) {
        form.append(data_key, data_inside);
      }
    } else {
      form.append(data_key, data[data_key]);
    }
  }
  return await axios.put(`${config.BASE_URL}/kost/${data?.kost_id}`, form, {
    withCredentials: true,
  });
};

export const create_booking = async (data) => {
  console.log(data);
  return await axios.post(config.BASE_URL + "/booking", data, {
    withCredentials: true,
  });
};

export const get_booking = async ({ id }) => {
  return await axios.get(config.BASE_URL + "/booking/" + id, {
    withCredentials: true,
  });
};
