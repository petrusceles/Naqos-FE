import { useMutation, useQuery } from "@tanstack/react-query";
import {
  get_all_kosts,
  get_kost_cities,
  get_kost_detail,
  get_all_kost_type,
  create_kost,
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
  const newSearchBy = { ...search_by };
  delete newSearchBy?.is;
  // delete search_by?.sort_price;
  const getAllKostQuery = useQuery({
    queryFn: () =>
      get_all_kosts({
        keyword,
        limit,
        sorted_by,
        sort,
        search_by: newSearchBy,
      }),
    queryKey: ["kost", keyword, newSearchBy],
    retry: false,
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

export const useAllKostType = () => {
  const getAllKostType = useQuery({
    queryFn: () => get_all_kost_type(),
    queryKey: ["kost-type"],
  });
  return getAllKostType;
};

export const useCreateKost = () => {
  const createKost = useMutation({
    mutationFn: create_kost,
    mutationKey: ["kost","create"]
  });
  return createKost
};
