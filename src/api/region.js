import axios from "axios";
export const get_province = async () => {
  return await axios.get(
    `https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json`
  );
};

export const get_district = async ({ province }) => {
  return await axios.get(
    `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${province}.json`
  );
};

export const get_subdistrict = async ({ district }) => {
  return await axios.get(
    `https://www.emsifa.com/api-wilayah-indonesia/api/districts/${district}.json`
  );
};
