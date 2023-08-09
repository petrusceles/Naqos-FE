import { useQuery } from "@tanstack/react-query";
import { get_review_by_kost } from "../api/review.js";

export const useKostReview = ({kost}) => {
  const getReviewsByKostQuery = useQuery({
    queryFn: () => get_review_by_kost(kost),
    queryKey: ["review", { kost }],
    retry: false,
    enabled: !!kost,
  });
  return getReviewsByKostQuery;
};
