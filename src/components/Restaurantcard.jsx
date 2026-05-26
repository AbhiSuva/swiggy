import React from "react";
import { Link } from "react-router-dom";

function Restaurantcard(iteam) {
    // console.log("ok")
    console.log(iteam.link )
  return (
    <Link to={`/restaurantMenu/${iteam.link.split("/")[5]}`}>
      <div className="relative min-w-[272px] h-[182px]">
        <img
          className="w-full h-full object-cover rounded-xl"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/${iteam.info.cloudinaryImageId}`}
          alt=""
        ></img>

        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent rounded-xl">
          <h1 className="absolute bottom-2 left-2 text-white font-extrabold text-xl">
            {iteam?.info?.aggregatedDiscountInfoV3?.header}{" "}
            {iteam?.info?.aggregatedDiscountInfoV3?.subHeader}
          </h1>
        </div>
        
      </div>

      <div className="mt-3 ml-4">
        <h2 className="font-bold text-lg">{iteam?.info?.name}</h2>
        <p className="flex items-center gap-1 font-semibold text-base">
          <i class="text-lg text-green-600 fi fi-sr-circle-star"></i>
          {iteam?.info?.avgRating}
          <span className="text-2xl font-bold">·</span>
          <span>{iteam?.info?.sla?.slaString}</span>
        </p>
        <p className="line-clamp-1 text-black/60 font-semibold">
          {iteam.info.cuisines.join(", ")}
        </p>
        <p className="text-black/60 font-semibold">{iteam?.info?.areaName}</p>
      </div>
    </Link>
  );
}

export default Restaurantcard;
