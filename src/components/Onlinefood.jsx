import React from "react";
import Restaurantcard from "./Restaurantcard";
import { Link } from "react-router-dom";

function Onlinefood({ data }) {
    // console.log()
  return (
    <div className="flex flex-col gap-14 mt-8">

      <div className="flex flex-col  gap-4">
        <p className="text-2xl font-extrabold">
          Restaurants with online food delivery in Mumbai
        </p>
        <p className="flex gap-2 justify-center items-center border rounded-4xl w-26 py-0.5 px-1.5 border-gray-200 font-semibold text-gray-800">sort By<i class="mt-2 fi fi-rs-angle-small-down"></i></p>
      </div>
      
      <div className="grid grid-cols-4 gap-8">
        {data.map((iteam) => (
          <Link to={`/restaurantMenu/${iteam.cta.link.split("/")[5]}`}>  
          <div className="hover:scale-95 duration-200">
            <div className="relative min-w-[280px] h-[240px]">
              <img
                className="w-full h-full object-cover rounded-2xl"
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
              <p className="text-black/60 font-semibold">
                {iteam?.info?.areaName}
              </p>
            </div>

          </div>
          </Link>
        ))}

      </div>

    </div>
  );
}

export default Onlinefood;
