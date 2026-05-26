import React, { useEffect, useState } from "react";
import Restaurantcard from "./Restaurantcard";

function TopRestaurant({ data }) {
    console.log(data)
  //   const [data, setdata] = useState([]);
  const [value, setvalue] = useState(0);

  //   async function fetchdata() {
  //     const swiggyUrl = encodeURIComponent(
  //       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9690247&lng=72.8205292&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
  //     );
  //     const data = await fetch(`https://corsproxy.io/?url=${swiggyUrl}`);
  //     const result = await data.json();
  //     // console.log(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  //     setdata(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  //   }

  //   useEffect(() => {
  //     fetchdata();
  //   }, []);

  function handleNext() {
    value >= 300 ? "" : setvalue((prev) => prev + 51);
  }

  function handlePrev() {
    value <= 0 ? "" : setvalue((prev) => prev - 51);
  }

//   console.log(data);
  //   console.log(value)

  return (
    <div>
      <div className="flex justify-between mt-12">
        <h1 className="font-bold text-2xl">Top restaurant chain in Delhi</h1>
        <div className="flex gap-4.5">
          <div
            onClick={handlePrev}
            className={
              `cursor-pointer rounded-full w-9 h-9 flex justify-center items-center ` +
              (value <= 0 ? "bg-gray-100" : "bg-gray-200 ")
            }
          >
            <i
              className={
                `text-2xl mt-1 fi fi-rr-arrow-small-left ` +
                (value <= 0 ? "text-gray-400" : "text-gray-950")
              }
            ></i>
          </div>

          <div
            onClick={handleNext}
            className={
              `cursor-pointer rounded-full w-9 h-9 flex justify-center items-center ` +
              (value >= 300 ? "bg-gray-100" : "bg-gray-200 ")
            }
          >
            <i
              className={
                `text-2xl mt-1 fi fi-rr-arrow-small-right ` +
                (value >= 300 ? "text-gray-400" : "text-gray-950")
              }
            ></i>
          </div>
        </div>
      </div>

      <div
        className={`flex mt-3.5 gap-9 duration-700`}
        style={{ translate: `-${value}%` }}
      >
        {data.map((iteam) => (
          <div className="hover:scale-95 duration-200">
            <Restaurantcard {...iteam} link={iteam?.cta?.link}/>
          </div>
        ))}
      </div>

      <hr className="border-gray-200 mt-12 border-b-1" />
    </div>
  );
}
export default TopRestaurant;
