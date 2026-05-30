import React, { useEffect, useState } from "react";
import YourMind from "./YourMind";
import TopRestaurant from "./TopRestaurant";
import Onlinefood from "./Onlinefood";

function Body() {
  const [topRestaurantdata, settopRestaurantdata] = useState([]);
  const [yourminddata, setyourminddata] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchdata() {
    // const swiggyUrl = encodeURIComponent(
    //   "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=28.54083579&lng=77.33577989&carousel=true&third_party_vendor=1",
    // );
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
    setLoading(false);
  }

  useEffect(() => {
    fetchdata();
  }, []);

  if (loading)
    return (
      <div className="w-[800px] mx-auto py-6">
        <div
          className="skeleton"
          style={{ height: 14, width: 220, marginBottom: 20 }}
        ></div>

        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}
        >
          {[1, 2].map((i) => (
            <div key={i}>
              <div className="skeleton skeleton-img"></div>
              <div className="skeleton skeleton-line1"></div>
              <div className="skeleton skeleton-line2"></div>
              <div className="skeleton skeleton-line3"></div>
              <div className="skeleton-footer">
                <div className="skeleton skeleton-btn"></div>
                <div className="skeleton skeleton-btn"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );

  return (
    <div className="w-full">
      <div className="w-[80%] mx-auto mt-3 overflow-hidden">
        <YourMind data={yourminddata} />
        <TopRestaurant data={topRestaurantdata} />
        <Onlinefood data={topRestaurantdata} />
      </div>
    </div>
  );
}

export default Body;
