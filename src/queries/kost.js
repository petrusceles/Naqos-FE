import { useQuery } from "@tanstack/react-query";
import {
  get_all_kosts,
  get_kost_cities,
  get_kost_detail,
} from "../api/kost.js";

export const useAvailableCities = () => {
  const getAvailableCitiesQuery = useQuery({
    queryFn: get_kost_cities,
    queryKey: ["kost", "cities"],
    placeholderData: ["Kabupaten Sleman"],
  });
  return getAvailableCitiesQuery;
};

export const useAllKost = ({ keyword, limit, sorted_by, sort, search_by }) => {
  const getAllKostQuery = useQuery({
    queryFn: () =>
      get_all_kosts({ keyword, limit, sorted_by, sort, search_by }),
    queryKey: ["kost", keyword, search_by],
  });
  return getAllKostQuery;
};

export const useKostDetail = ({ id }) => {
  const getKostDetail = useQuery({
    queryFn: () => get_kost_detail({ id }),
    queryKey: ["kost", "detail", id],
  });
  return getKostDetail;
};
