import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import menuData from "../utils/mockMenu.json";

function Restaurantmenu() {
  const { id } = useParams();
  const [menudata, setmenudata] = useState("");

  console.log(id);
  //   async function fetchmenu() {
  //     const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
  //     const SWIGGY_API =
  //       "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.54083579&lng=77.33577989&restaurantId=396434&submitAction=ENTER";
  //     const swiggyUrl = await fetch(SWIGGY_API);

  //     const data = await fetch(
  //       `https://corsproxy.io/?url=${swiggyUrl}`
  //     );

  //     console.log(data)
  //     const result = await data.json();

  //     console.log(swiggyUrl);
  //   }

  // async function fetchdata() {
  //   const swiggyUrl = encodeURIComponent(
  //     "https://www.swiggy.com/dapi/misc/place-autocomplete?input=mumbai",
  //   );
  //   const data = await fetch(`https://corsproxy.io/?url=${swiggyUrl}`);
  //   const result = await data.json();
  //   console.log(result);
  // //   setmenudata(
  // //     result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
  // //       ?.restaurants,
  // //   );
  // //   setyourminddata(result?.data?.cards[0]?.card?.card?.imageGridCards?.info);
  // }

  // useEffect(() => {
  //   fetchdata();
  // }, []);

  //   async function fetchmenu() {
  //     const result = menuData;

  //     console.log(result?.data?.cards[0]?.card?.card.text);
  //     setmenudata(result?.data?.cards[0]?.card?.card.text)
  //   }

  async function fetchmenu() {
    const data = await fetch(
      `/api/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.9690247&lng=72.8205292&restaurantId=683064`,
    );

        console.log(data);
    const json = await data.json();

    setmenudata(json);
  }

  useEffect(() => {
    fetchmenu();
  }, []);

  return <div>........</div>;
}

export default Restaurantmenu;
