export const convertObjectKost = (data) => {
  data["available_price"] = [];
  for (const data_key in data) {
    if (data[data_key] == null) continue;
    if (Array.isArray(data[data_key])) {
      data[data_key] = data[data_key].map(
        (data_inside) => data_inside?._id ?? data_inside
      );
    } else if (typeof data[data_key] == "object") {
      console.log("DATA-KEY", data_key);
      data[data_key] = data[data_key]._id;
    }

    if (
      data_key == "outside_photos_url" ||
      data_key == "inside_photos_url" ||
      data_key == "room_photos_url"
    ) {
      const new_data_key = data_key.slice(0, -4);
      data[new_data_key] = data[data_key];
      console.log("NEW-DATA-KEY", data[new_data_key]);
      delete data[data_key];
    }
  }

  if (data["month_price"]) {
    data["available_price"].push("month");
  }
  if (data["week_price"]) {
    data["available_price"].push("week");
  }
  if (data["year_price"]) {
    data["available_price"].push("year");
  }
  return data;
};

export const getDifferentProperties = ({compare, main}) => {
   const diffObject = {};

   for (const key in main) {
     if (main.hasOwnProperty(key) && main[key] !== compare[key]) {
       diffObject[key] = main[key];
     }
   }

   return diffObject;
 };

export const bahasaToEnglish = {
  bulan:"month",
  tahun:"year",
  hari:"day"
}
