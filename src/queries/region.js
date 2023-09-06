import { useQuery, useMutation } from "@tanstack/react-query";

import { get_province, get_district, get_subdistrict } from "../api/region.js";


export const useProvince = () => {
  const getProvince = useQuery({
    queryFn: () => get_province(),
    queryKey: ["province"],
  });
  return getProvince;
};

export const useDistrict = () => {
  // console.log("QUERY", province)
  const getDistrict = useMutation({
    mutationFn: get_district,
    mutationKey: ["district"],
  });
  return getDistrict;
};

export const useSubdistrict = () => {
  const getSubdistrict = useMutation({
    mutationFn: get_subdistrict,
    mutationKey: ["subdistrict"],
  });
  return getSubdistrict
};
