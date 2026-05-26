import React, { useEffect, useState } from "react";
import YourMind from "./YourMind";
import TopRestaurant from "./TopRestaurant";
import Onlinefood from "./Onlinefood";

function Body() {
  const [topRestaurantdata, settopRestaurantdata] = useState([]);
  const [yourminddata, setyourminddata] = useState([]);

  async function fetchdata() {
    const swiggyUrl = encodeURIComponent(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9690247&lng=72.8205292&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const data = await fetch(`https://corsproxy.io/?url=${swiggyUrl}`);
    const result = await data.json();
    // console.log(result);
    settopRestaurantdata(
      result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setyourminddata(result?.data?.cards[0]?.card?.card?.imageGridCards?.info);
  }

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="w-full">
      <div className="w-[80%] mx-auto mt-3 overflow-hidden">
        <YourMind data={yourminddata} />
        <TopRestaurant data={topRestaurantdata} />
        <Onlinefood data={topRestaurantdata}/>
      </div>
    </div>
  );
}

export default Body;
