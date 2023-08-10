const useClickHandle = (allValues, value, checked) => {
  let newValues = [...allValues, value];
  if (!checked) {
    newValues = newValues.filter((currentValue) => currentValue !== value);
  }
  return newValues;
};

const useSelectAllHandle = (isValueCheckAll, allValuesAvail) => {
  let newIsValueCheckAll = !isValueCheckAll;
  let newValues = allValuesAvail;
  if (!newIsValueCheckAll) {
    newValues = [];
  }
  return [newValues, newIsValueCheckAll];
};

const FilterReducer = (state, action) => {
  switch (action.type) {
    case "kost_type_click_handle": {
      return {
        ...state,
        kost_type: useClickHandle(
          state?.kost_type,
          action?.payload?.kost_type,
          action?.payload?.checked
        ),
      };
    }

    case "kost_type_select_all_handle": {
      let [kost_type, is_kost_type_check_all] = useSelectAllHandle(
        state?.is?.is_kost_type_check_all,
        action.payload?.all_kost_types
      );
      return {
        ...state,
        kost_type,
        is: { ...state.is, is_kost_type_check_all },
      };
    }

    case "time_click_handle": {
      return {
        ...state,
        time: useClickHandle(
          state?.time,
          action?.payload?.time,
          action?.payload?.checked
        ),
      };
    }

    case "time_select_all_handle": {
      let [time, is_time_check_all] = useSelectAllHandle(
        state?.is?.is_time_check_all,
        action?.payload?.all_times
      );
      return {
        ...state,
        time,
        is: {...state.is, is_time_check_all },
      };
    }

    case "room_facility_click_handle": {
      return {
        ...state,
        room_facility: useClickHandle(
          state?.room_facility,
          action?.payload?.room_facility,
          action?.payload?.checked
        ),
      };
    }

    case "room_facility_select_all_handle": {
      let [room_facility, is_room_facility_check_all] = useSelectAllHandle(
        state?.is?.is_room_facility_check_all,
        action?.payload?.all_room_facilities
      );
      return {
        ...state,
        room_facility,
        is: {...state.is, is_room_facility_check_all },
      };
    }

    case "kost_facility_click_handle": {
      return {
        ...state,
        kost_facility: useClickHandle(
          state?.kost_facility,
          action?.payload?.kost_facility,
          action?.payload?.checked
        ),
      };
    }

    case "kost_facility_select_all_handle": {
      let [kost_facility, is_kost_facility_check_all] = useSelectAllHandle(
        state?.is?.is_kost_facility_check_all,
        action?.payload?.all_kost_facilities
      );
      return {
        ...state,
        kost_facility,
        is: {...state.is, is_kost_facility_check_all },
      };
    }

    case "sort_price_handle": {
      return {
        ...state,
        sort_price: action?.payload?.sort_price,
      };
    }

    default:
      break;
  }
};

export default FilterReducer;
