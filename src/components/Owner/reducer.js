export const ownerFormReducer = (state, action) => {
  switch (action.type) {
    case "kost_added":
      return {
        ...state,
        ...action.kost_data,
      };
    case "kost_about_added":
      return {
        ...state,
        ...action.kost_about_data,
      };
    case "kost_photo_added":
      return {
        ...state,
        ...action.kost_photo_data,
      };
    case "room_added":
      return {
        ...state,
        ...action.room_data,
      };
    default:
      throw Error("Unknown action: " + action.type);
  }
};
