import axios from "axios";
import config from "../config/index.js";

export const get_all_bookings = async ({
  limit,
  sorted_by = "updatedAt",
  sort = "asc",
  search_by,
  pageParam,
}) => {
  return await axios.get(
    config.BASE_URL + "/booking",
    {
      params: {
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

export const update_booking = async (data) => {
  const form = new FormData();
  console.log(data);
  for (const data_key in data) {
    if (data[data_key] == undefined) {
      continue;
    }
    form.append(data_key, data[data_key]);
  }

  return await axios.put(
    `${config.BASE_URL}/booking/${data?.booking_id}`,
    form,
    {
      withCredentials: true,
    }
  );
};
