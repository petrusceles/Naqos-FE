import axios from "axios";
import config from "../config/index.js";

export const get_kost_type = async () => {
  return await axios.get(`${config.BASE_URL}/kost-type`, {
    withCredentials: true,
  });
};

export const get_room_facility = async () => {
  return await axios.get(`${config.BASE_URL}/room-facility`, {
    withCredentials: true,
  });
};

export const get_kost_facility = async () => {
  return await axios.get(`${config.BASE_URL}/kost-facility`, {
    withCredentials: true,
  });
};
