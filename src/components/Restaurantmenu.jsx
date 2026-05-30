import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Restaurantmenu() {
  // http://localhost:5173/restaurantMenu/mer-konfekt-breach-candy-mahalaxmi-rest313246
  const { id } = useParams();
  let mainID = id.split("-").at(-1).replace("rest", "");

  const [resInfo, setResInfo] = useState("");
  const [menuData, setMenuData] = useState("");
  const [discountData, setDiscountData] = useState("");
  const [loading, setLoading] = useState(true);
  const [value, setvalue] = useState(0);

  console.log(discountData);

  async function fetchmenu() {
    const SWIGGY_API = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.9690247&lng=72.8205292&restaurantId=${mainID}&submitAction=ENTER`;
    const swiggyUrl = await fetch(SWIGGY_API);

    const result = await swiggyUrl.json();

    // console.log(result?.data?.cards);
    setResInfo(result?.data?.cards[2]?.card?.card?.info);
    setDiscountData(
      result?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers,
    );
    setMenuData(
      result?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card,
    );
    setLoading(false);
  }

  // async function fetchdata() {
  //     const swiggyUrl = encodeURIComponent(
  //       "https://www.swiggy.com/dapi/misc/place-autocomplete?input=mumbai",
  //     );
  //     const data = await fetch(`https://corsproxy.io/?url=${swiggyUrl}`);
  //     const result = await data.json();
  //     console.log(result);
  //     setmenudata(
  //       result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
  //         ?.restaurants,
  //     );
  //     setyourminddata(result?.data?.cards[0]?.card?.card?.imageGridCards?.info);
  //   }

  useEffect(() => {
    fetchmenu();
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

  function handleNext() {
    value >= 120 ? "" : setvalue((prev) => prev + 60);
  }

  function handlePrev() {
    value <= 0 ? "" : setvalue((prev) => prev - 60);
  }

  return (
    <div className="w-full">
      <div className="w-[800px] mx-auto pt-6 overflow-hidden">
        <p className="text-[10px] text-slate-500 font- font-semibold">
          <Link to={"/"}>
            <span className="hover:text-black hover:cursor-pointer">Home</span>
          </Link>{" "}
          /{" "}
          <Link to={"/"}>
            <span className="hover:text-black hover:cursor-pointer">
              {resInfo?.city}
            </span>
          </Link>{" "}
          / <span className="text-black font-bold">{resInfo?.name}</span>
        </p>
        <h1 className="text-[28px] font-bold mt-8 ml-1">{resInfo.name}</h1>

        <div className="w-full h-[164px] px-4 pb-4 bg-gradient-to-t from-gray-300 to-white mt-5 rounded-br-[30px] rounded-bl-[30px]">
          <div className="w-full h-full p-4 rounded-[20px] border border-gray-300 bg-white">
            <div className="flex items-center gap-1 font-bold text-[16px]">
              <i className="text-lg text-green-600 fi fi-ss-circle-star mt-1"></i>
              <span>{resInfo?.avgRatingString}</span>
              <span>({resInfo?.totalRatingsString})</span>
              <span className="text-2xl font-bold text-gray-500">·</span>
              <span>{resInfo?.costForTwoMessage}</span>
            </div>
            <p className="text-sm font-bold text-orange-500 underline">
              {resInfo?.cuisines.join(", ")}
            </p>
            <div className="flex gap-2 mt-2">
              <div className="w-[7px] flex flex-col justify-center items-center">
                <div className="w-[7px] h-[7px] bg-gray-300 rounded-full"></div>
                <div className="w-[1px] h-[28px] bg-gray-300 mr-[0.5px]"></div>
                <div className="w-[7px] h-[7px] bg-gray-300 rounded-full"></div>
              </div>
              <div className="flex flex-col gap-3 text-sm">
                <p className="font-bold flex gap-2">
                  Outlet{" "}
                  <span className="text-gray-400 font-extralight">
                    {resInfo?.areaName}
                  </span>
                </p>
                <p className="font-bold">{resInfo?.sla?.slaString}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[768px] h-[133px] mx-auto m-7">
          <div className="flex flex-col justify-between">
            <div className="flex justify-between mb-4">
              <h1 className="text-[21px] font-bold">Deals for you</h1>
              <div className="flex gap-3">
                <div  onClick={handlePrev}
                  className={`cursor-pointer rounded-full w-8 h-[34px] flex justify-center items-center ` + (value <= 0 ? "bg-gray-100" : "bg-gray-200 ")}
                >
                  <i
                    className={`text-2xl mt-1.5 fi fi-rr-arrow-small-left `}
                  ></i>
                </div>

                <div  onClick={handleNext}
                  className={`cursor-pointer rounded-full w-8 h-[34px] flex justify-center items-center ` + (value <= 0 ? "bg-gray-200" : "bg-gray-100")}
                >
                  <i
                    className={`text-2xl mt-1.5 fi fi-rr-arrow-small-right `}
                  ></i>
                </div>
              </div>
            </div>

            <div>
              <div
                className="duration-700 flex gap-4"
                style={{ translate: `-${value}%` }}
              >
                {discountData.map((iteam) => (
                  <div className="min-w-[328px] h-[76px] border border-gray-300 rounded-2xl flex justify-start items-center pl-3.5 gap-2.5">
                    <div>
                      <img
                        className="w-[48px] h-[48px]"
                        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/${iteam?.info?.offerLogo.split("/")[1]}`}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col">
                      <h2 className="text-[16px] font-extrabold">
                        {iteam?.info?.header}
                      </h2>
                      <h2 className="text-sm font-bold text-gray-400">
                        {iteam?.info?.description}
                      </h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Restaurantmenu;
