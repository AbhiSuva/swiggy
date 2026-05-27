import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import menuData from "../utils/mockMenu.json";

function Restaurantmenu() {
  const { id } = useParams();
  const [menudata, setmenudata] = useState("");

  console.log(id);
  async function fetchmenu() {
    const SWIGGY_API =
      "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.54083579&lng=77.33577989&restaurantId=683828&submitAction=ENTER";
    const swiggyUrl = await fetch(SWIGGY_API);

    const result = await swiggyUrl.json();

    console.log(result);

  }


async function fetchdata() {
    const swiggyUrl = encodeURIComponent(
      "https://www.swiggy.com/dapi/misc/place-autocomplete?input=mumbai",
    );
    const data = await fetch(`https://corsproxy.io/?url=${swiggyUrl}`);
    const result = await data.json();
    console.log(result);
    setmenudata(
      result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setyourminddata(result?.data?.cards[0]?.card?.card?.imageGridCards?.info);
  }

  useEffect(() => {
    fetchmenu();
  }, []);

  return <div>........</div>;
}

export default Restaurantmenu;