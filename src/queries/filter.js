import { useQuery } from "@tanstack/react-query";

import {
  get_kost_facility,
  get_room_facility,
  get_kost_type,
} from "../api/filter.js";

export const useKostFacility = () => {
  const getKostFacilityQuery = useQuery({
    queryFn: get_kost_facility,
    queryKey: ["kost-facility"],
  });
  return getKostFacilityQuery;
};

export const useRoomFacility = () => {
  const getRoomFacilityQuery = useQuery({
    queryFn: get_room_facility,
    queryKey: ["room_facility"],
  });
  return getRoomFacilityQuery;
};

export const useKostType = () => {
  const getKostTypeQuery = useQuery({
    queryFn: get_kost_type,
    queryKey: ["kost-type"],
  });
  return getKostTypeQuery;
};
