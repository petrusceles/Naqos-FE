import { useInfiniteQuery, useMutation } from "@tanstack/react-query";
import { get_all_bookings,update_booking } from "../api/booking.js";

export const useAllBookingInfinite = ({
  limit,
  sorted_by,
  sort,
  search_by,
}) => {
  console.log(search_by);
  const getAllBookingInfiniteQuery = useInfiniteQuery({
    queryKey: ["booking", "infinite", search_by],
    queryFn: ({ pageParam = 0 }) =>
      get_all_bookings({
        limit,
        sorted_by,
        sort,
        search_by,
        pageParam,
      }),
    getNextPageParam: (response) => {
      const nextLimit = response?.data?.data?.next_limit;
      const nextSkip = response?.data?.data?.next_skip;
      console.log("nextLimit", nextLimit);
      console.log("nextSkip", nextSkip);
      if (nextSkip >= nextLimit) return undefined;
      return response?.data?.data?.next_skip;
    },
  });

  return getAllBookingInfiniteQuery;
};

export const useUpdateBooking = () => {
  const updateBooking = useMutation({
    mutationFn: update_booking,
    mutationKey:["booking", "update"]
  });
  return updateBooking;
}