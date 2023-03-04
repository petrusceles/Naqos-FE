import React from "react";
import { Link } from "react-router-dom";
const popularCities = [
  {
    id: 0,
    name: "Jakarta",
    pictureUrl:
      "https://res.cloudinary.com/dqzqbgi8e/image/upload/v1673952068/naqos/cities/jakarta_nwvcvg.png",
  },
  {
    id: 1,
    name: "Bandung",
    pictureUrl:
      "https://res.cloudinary.com/dqzqbgi8e/image/upload/v1673952074/naqos/cities/bandung_c7tocu.png",
  },
  {
    id: 2,
    name: "Surabaya",
    pictureUrl:
      "https://res.cloudinary.com/dqzqbgi8e/image/upload/v1673952075/naqos/cities/surabaya_ghbqjn.png",
  },
  {
    id: 3,
    name: "Bekasi",
    pictureUrl:
      "https://res.cloudinary.com/dqzqbgi8e/image/upload/v1673952068/naqos/cities/bekasi_mnbtyx.png",
  },
  {
    id: 4,
    name: "Tangerang",
    pictureUrl:
      "https://res.cloudinary.com/dqzqbgi8e/image/upload/v1673952075/naqos/cities/tangerang_dbumxu.png",
  },
  {
    id: 5,
    name: "Depok",
    pictureUrl:
      "https://res.cloudinary.com/dqzqbgi8e/image/upload/v1673952064/naqos/cities/depok_yfy8bp.png",
  },
  {
    id: 6,
    name: "Semarang",
    pictureUrl:
      "https://res.cloudinary.com/dqzqbgi8e/image/upload/v1673952067/naqos/cities/semarang_vhglhs.png",
  },
  {
    id: 7,
    name: "Yogyakarta",
    pictureUrl:
      "https://res.cloudinary.com/dqzqbgi8e/image/upload/v1673952071/naqos/cities/yogyakarta_fvnygs.png",
  },
];
function KostCities() {
  return (
    <div className="flex flex-wrap w-full px-8 lg:gap-6 lg:pb-8 bg-[#FAFAFA] container">
      <div className="flex w-full">
        <p className="text-xl lg:text-3xl font-semibold font-montserrat">
          Kos Populer di Kota Besar
        </p>
      </div>
      <div className="w-full grid lg:grid-cols-4 lg:py-8 lg:gap-y-7 lg:gap-x-5 grid-cols-2 py-8 gap-y-3 gap-x-3">
        {popularCities.map((e, i) => {
          return (
            <Link to={`/homepage?city=${e.name}`} key={i}>
              <div
                key={i}
                className="w-full lg:h-[221px] h-[100px] overflow-hidden rounded-lg flex items-center relative object-cover hover:scale-[98%] transition duration-200 ease-in-out cursor-pointer"
              >
                <img src={e.pictureUrl} className="w-full min-h-full" />
                <p className="absolute text-white font-montserrat font-bold lg:text-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  {e.name}
                </p>
                <div className="w-full h-full bg-[#0A008A61] absolute opacity-700" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default KostCities;
