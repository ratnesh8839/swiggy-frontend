import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_IMAGE } from "../utils/constants";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import { useState } from "react";
import downArrow from "../assets/downArrow.svg";
import upArrow from "../assets/upArrow.svg";
import useOnlineStatus from "../utils/useOnlineStatus";

const Restaurent_Menu = () => {
    const { resId } = useParams();
    const fetchdata = useRestaurentMenu(resId);
    // Store hide state for each title by index
    const [hiddenSections, setHiddenSections] = useState({2:true}); // Object to manage multiple sections
    const onlineStatus = useOnlineStatus();
    if (fetchdata.length === 0) {
        return <Shimmer />
    }
    const { name, city, avgRating, costForTwoMessage } = fetchdata?.data?.cards?.[2]?.card?.card?.info || {};
    const listOfInfo = fetchdata?.data?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

    const toggleSectionVisibility = (index) => {
        setHiddenSections((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
        // setHiddenSections({[index]: !hiddenSections[index]});
    };

    return (
        onlineStatus && (<div className="mainContainer">
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
                {
                    listOfInfo.map((info, index) => {
                        const listOfItem = info?.card?.card?.itemCards;

                        if (index > 1 && listOfItem) {
                            return (
                                <div key={index}>
                                    {/* Title that toggles the visibility of the section */}
                                    <div className="title" onClick={() => toggleSectionVisibility(index)}>
                                    <h3>
                                        {info.card.card.title}
                                    </h3>
                                    {hiddenSections[index]?(<img className="arrow" src={upArrow} alt="" />):(<img className="arrow" src={downArrow} alt="" />)}
                                    </div>
                                    {/* Conditionally render items if the section is not hidden */}
                                    {
                                    hiddenSections[index] && (
                                        listOfItem.map((item) => {
                                            const { id, name, price, description, imageId } = item?.card?.info || {};
                                            return (
                                                <div key={id} className="itemContainer">
                                                    <div className="horizontalLine"></div>
                                                    <div className="outlets">
                                                        <div className="contentOfOutlet">
                                                            <li className="itemName">{name}</li>
                                                            <li className="price">{"RS "}{price / 100}</li>
                                                            <li className="description">{description}</li>
                                                        </div>
                                                        {imageId?(<img src={MENU_IMAGE + imageId} alt="No image available" />):"No image"}
                                                    </div>
                                                </div>
                                            );
                                        })
                                    )}
                                </div>
                            );
                        }
                        return null; // Skip if index is <= 1 or no items
                    })
                }
            </div>
        </div>
    ));
};

export default Restaurent_Menu;
