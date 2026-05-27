import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Restaurantmenu() {

  const { id } = useParams();

  const [menuData,setMenuData] = useState("")

  let mainID = id.split("-").at(-1).replace("rest", "")

  async function fetchmenu() {

    const SWIGGY_API =(`https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.9690247&lng=72.8205292&restaurantId=${mainID}&submitAction=ENTER`);
    const swiggyUrl = await fetch(SWIGGY_API);

    const result = await swiggyUrl.json();

    // console.log(result);
    setMenuData(result?.data?.cards[0].card.card.text)

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

  return <div>{menuData}---{mainID}</div>;
}

export default Restaurantmenu;