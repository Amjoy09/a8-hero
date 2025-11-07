import React from "react";
import { Link } from "react-router";

const AppCard = ({ app }) => {
  const { image, title, downloads, ratingAvg, id, slogan } = app;
  return (
    <Link
      to={`/appDetails/${id}`}
      className="card bg-base-100 shadow-sm p-5 hover:scale-105 transition ease-in-out hover:cursor-pointer"
    >
      <figure>
        <img className="h-[250px]" src={image} alt="Useful Applications" />
      </figure>
      <div className="CARD-TEXTS mt-5">
        <div className="flex items-center">
          <h2 className="card-title">{title}:</h2>
          <p className="card-title">{slogan}</p>
        </div>
        

        <div className="flex items-center justify-between mt-5">
          <div className="flex gap-2 rounded-sm items-center bg-gray-100 px-2 py-1">
            <img
              className="h-5 w-5 text-[#00D390]"
              src="icon-downloads.png"
              alt=""
            />
            <p className="text-[18px] text-[#00D390] font-semibold">
              {downloads}M
            </p>
          </div>
          <div className="flex px-2 py-1 rounded-sm items-center gap-2 bg-[#FFF0E1]"><img className="w-5 h-5" src="icon-ratings.png" alt="" /><p className="text-[18px] font-semibold text-[#FF8811]">{ratingAvg}</p></div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
