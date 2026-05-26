import React, { useEffect, useState } from "react";

function YourMind({data}) {

//   const [data, setdata] = useState([]);

  const [value, setvalue] = useState(0);

//   async function fetchdata() {
//     const swiggyUrl = encodeURIComponent(
//       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9690247&lng=72.8205292&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
//     );
//     const data = await fetch(`https://corsproxy.io/?url=${swiggyUrl}`);
//     const result = await data.json();
//     // console.log(result?.data?.cards[0]?.card?.card?.imageGridCards?.info);
//     setdata(result?.data?.cards[0]?.card?.card?.imageGridCards?.info);
//   }

//   useEffect(() => {
//     fetchdata();
//   }, []);

//   console.log(value)


  function handleNext() {
    value >= 123 ? "" : setvalue((prev) => prev + 41);
  }

  function handlePrev() {
    value <= 0 ? "" : setvalue((prev) => prev - 41);
  }

  return (
    <div>
      <div className="flex justify-between mt-4">
        <h1 className="font-bold text-2xl">What's on your mind?</h1> 
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
              (value >= 123 ? "bg-gray-100" : "bg-gray-200 ")
            }
          >
            <i
              className={
                `text-2xl mt-1 fi fi-rr-arrow-small-right ` +
                (value >= 123 ? "text-gray-400" : "text-gray-950")
              }
            ></i>
          </div>
        </div>

      </div>

      <div
        style={{ translate: `-${value}%` }}
        className={`flex mt-3.5 gap-5 duration-400`}
      >
        {data.map((item,i) => (
          <img
            className="w-38" key={i}
            src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`}
          />
        ))}
      </div>
       <hr className="border-gray-200 mt-10 border-b-1"/>
    </div>
  );
}

export default YourMind;
