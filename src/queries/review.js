import { useQuery } from "@tanstack/react-query";
import { get_review_by_kost } from "../api/review.js";

export const useReview = (query) => {
  const getReviewsByKostQuery = useQuery({
    queryFn: () => get_review_by_kost(query),
    queryKey: ["review", query],
    retry: false,
  });
  return getReviewsByKostQuery;
};
