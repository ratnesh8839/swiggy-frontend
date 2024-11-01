import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_IMAGE } from "../utils/constants";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import RestaurentCategory from "./RestaurentCategory";
import { useState } from "react";


const Restaurent_Menu = (e) => {
    const {resId} = useParams();
    const fetchdata = useRestaurentMenu(resId);    
    const [itemList, setItemList] = useState(0);
    if (fetchdata.length === 0) {
        return <Shimmer />
    }
    const { name, city, avgRating, cloudinaryImageId, costForTwoMessage, cuisines,totalRatingsString
    } = fetchdata?.data?.cards?.[2]?.card?.card?.info || {};
   
    // console.log(fetchdata?.data?.cards?.[2]?.card?.card?.info);
    // console.log(fetchdata?.data?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    const category = fetchdata?.data?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(item=>
        item?.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    if (!category || category.length === 0) {
        return <p>No items available for this restaurant.</p>;
    }
    
// console.log(category);
    return (
        <div className="w-1/2 m-auto mt-5">
            <h1 className="font-bold py-2 text-2xl font-sans ">{name}</h1>
            <div className="border boder-solid border-gray-300 shadow-xl text-left p-2 pl-4 m-2 mainContiner py-5 mb-10">
                <p>⭐{avgRating}({totalRatingsString
                }){" "}{costForTwoMessage}</p>
                <p>{cuisines}</p>
            </div>
            
            {   category.map((items,index)=>(
                <RestaurentCategory 
                    key={items?.card?.card?.title} 
                    data={items?.card?.card} 
                    hide={index==itemList?true:false}
                    setShowIndex={()=>itemList==index?setItemList(-1):setItemList(index)}
                    />
            ))
            // **************************************************************
            // This is called lifiting the state up
            // Now I am controlling the RestaurentCategory component from Restaurent_Menu component so now RestaurentCategory component is a controlled component
            // Previously RestaurentCategory component was uncontrolled component
            }
            
        </div>
    )
}

export default Restaurent_Menu;