import React from "react";
import { Link } from "react-router";

const AppCard = ({app}) => {
    const {image, title, description, downloads, ratingAvg, id} = app;
  return (
    <Link to={`/appDetails/${id}`} className="card bg-base-100 shadow-sm p-5 hover:scale-105 transition ease-in-out hover:cursor-pointer">
      <figure>
        <img className="h-[250px]"
          src={image}
          alt="Useful Applications"
        />
      </figure>
      <div className="CARD-TEXTS mt-5">
        <h2 className="card-title">
          {title}
        </h2>
        <p>
          {description}
        </p>
        <div className="card-actions justify-between mt-5">
          <div className="badge badge-outline">{downloads}</div>
          <div className="badge badge-outline">{ratingAvg}</div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
