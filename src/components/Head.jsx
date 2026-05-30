import React from "react";
import { Link, Outlet } from "react-router-dom";

function Head() {
  const navIteam = [
    {
      name: "Swiggy Corporate",
      image: "briefcase",
    },
    {
      name: "search",
      image: "search",
    },
    {
      name: "Offers",
      image: "badge-percent",
    },
    {
      name: "Help",
      image: "home-heart",
    },
    {
      name: "sign in",
      image: "user",
    },
    {
      name: "Cart",
      image: "square-plus",
    },
  ];

  return (
    <>
    <div className="w-full h-20 shadow-gray-300 shadow-md flex justify-center items-center">
      <div className="w-[70%] flex justify-between">
        
        <div className="flex items-center">
        <Link to={"/"}>   
          <img
            className="w-24"
            src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png"
            alt=""
          />
          </Link> 
          <div className="flex items-center gap-1.5">
            <p className="font-bold border-b-2 hover:text-orange-400">Others</p>
            <i className=" mt-2 text-2xl text-orange-400 fi fi-ss-angle-small-down"></i>
          </div>
        </div>

        <div className="flex items-center gap-16 font-semibold text-gray-800">
          
          {navIteam.map((data,i) => (
            <div className="flex items-center gap-3 font-semibold" key={i}>
              <i className={"text-[18px] fi fi-rr-"+ data.image}></i>
              <p className="text-[16px]">{data.name}</p>
            </div>
          ))}

        </div>

      </div>
    </div>
    <Outlet />
    </>
  );
}

export default Head;
