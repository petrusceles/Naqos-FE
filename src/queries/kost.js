import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import {
  get_all_kosts,
  get_kost_cities,
  get_kost_detail,
  get_all_kost_type,
  create_kost,
  update_kost,
  create_booking,
  get_booking,
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

export const useAllKostInfinite = ({
  keyword,
  limit,
  sorted_by,
  sort,
  search_by,
}) => {
  const newSearchBy = { ...search_by };
  delete newSearchBy?.is;
  console.log(newSearchBy);

  const getAllKostInfiniteQuery = useInfiniteQuery({
    queryKey: ["kost", "infinite", keyword, newSearchBy],
    queryFn:({pageParam = 0}) => get_all_kosts({
      keyword,
      limit,
      sorted_by,
      sort,
      search_by: newSearchBy,
      pageParam

    }),
    getNextPageParam: (response) => {
      const nextLimit = response?.data?.data?.next_limit;
      const nextSkip = response?.data?.data?.next_skip;
      if (nextSkip > nextLimit) return undefined;
      return response?.data?.data?.next_skip;
    }
  });

  return getAllKostInfiniteQuery
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
    mutationKey: ["kost", "create"],
  });
  return createKost;
};

export const useKostDetailMutate = () => {
  const getKostDetail = useMutation({
    mutationFn: get_kost_detail,
    mutationKey: ["kost", "detail", "mutate"],
  });
  return getKostDetail;
};

export const useUpdateKost = () => {
  const updateKost = useMutation({
    mutationFn: update_kost,
    mutationKey: ["kost", "update"],
  });
  return updateKost;
};

export const useCreateBooking = () => {
  const createBooking = useMutation({
    mutationFn: create_booking,
    mutationKey: ["booking"],
  });
  return createBooking;
};

export const useBooking = ({ id }) => {
  const getBooking = useQuery({
    queryFn: () => get_booking({ id }),
    queryKey: ["booking", id],
    retry: false,
  });
  return getBooking;
};
