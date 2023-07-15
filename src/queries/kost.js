import { useQuery } from "@tanstack/react-query";
import { get_all_kosts, get_kost_cities } from "../api/kost.js";

export const useAvailableCities = () => {
  const getAvailableCitiesQuery = useQuery({
    queryFn: get_kost_cities,
    queryKey: ["kost", "cities"],
    placeholderData: ["Kabupaten Sleman"],
  });
  return getAvailableCitiesQuery;
};

export const useAllKost = ({ keyword, limit, sorted_by }) => {
  const getAllKostQuery = useQuery({
    queryFn: () => get_all_kosts({ keyword, limit, sorted_by }),
    queryKey: ["kost",keyword],
  });
  return getAllKostQuery;
};
