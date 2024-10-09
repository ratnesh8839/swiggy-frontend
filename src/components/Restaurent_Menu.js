import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_IMAGE } from "../utils/constants";
import useRestaurentMenu from "../utils/useRestaurentMenu";


const Restaurent_Menu = (e) => {
    const {resId} = useParams();
    const fetchdata = useRestaurentMenu(resId);    

    if (fetchdata.length === 0) {
        return <Shimmer />
    }
    const { name, city, avgRating, cloudinaryImageId, costForTwoMessage, cuisines, } = fetchdata?.data?.cards?.[2]?.card?.card?.info || {};
    const  {itemCards}  = fetchdata?.data?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card.card || [];
    if (!itemCards || itemCards.length === 0) {
        return <p>No items available for this restaurant.</p>;
    }
    return (
        <div  className="mainContainer">
        <h1 className="heading_name">{name}</h1>
            <div className="mainContent">
                <div className="mainContentTwo">
                    <ul className="insideUl">
                        <li>{city}</li>
                        <li>{avgRating}</li>
                        <li>{costForTwoMessage}</li>
                    </ul>
                </div>
            </div>
            <div>
                <h2 >Recommanded</h2>
                <ul>
                    {itemCards.map((item) => {
                        const {id,name,price,description} = item?.card?.info || {};
                        return <div key={item?.card?.info?.id} >
                            <div className="horizontalLine"></div>
                            <div className="outlets" >
                                <div className="contentOfOutlet">
                                    <li className="itemName">{name}</li>
                                    <li className="price">{"RS "}{price / 100}</li>
                                    <li className="description">{description}</li>
                                </div>
                                <img src={MENU_IMAGE+item.card.info.imageId} alt="no image" />
                            </div>
                        </div>

                    })}
                </ul>
            </div>
        </div>
    )
}

export default Restaurent_Menu;