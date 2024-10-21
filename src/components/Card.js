import { Link } from "react-router-dom";
import { CLOUDINARY } from "../utils/constants";
import React, { useContext } from "react";
import UserContext from "../utils/UserContext.js"
const Card = (props) => {
  // const {loggedInUser} = useContext(UserContext)
  const {loggedInUser} = useContext(UserContext)
  const { resData } = props;
  const { costForTwo, cloudinaryImageId, name, avgRating, cuisines, locality, totalRatingsString } = resData?.info;
  const {header} = props?.resData?.info.aggregatedDiscountInfoV3 || {};
  const {subHeader} = props?.resData?.info.aggregatedDiscountInfoV3 || {};
  console.log('/reasturent/' + resData.info.id);
  return (
  <Link className="card_link" to={'/restaurent/' + resData.info.id}>
    <div className="cards">
     {header && subHeader &&(<span class="rating-number">{header +" " + subHeader}</span>)}
      <div className="item">
        <img className='item_image' src={CLOUDINARY + cloudinaryImageId} alt="" />
        <div className="content">
          <ul>
            <li><h4>{name}</h4></li>
            <li>{avgRating}⭐</li>
            <li>{cuisines.join(",")}</li>
            <li>{locality}</li>
            <li>{costForTwo}</li>
            <li>{totalRatingsString}</li>
            <li>By-{loggedInUser}</li>
          </ul>
        </div>
      </div>
    </div>
  </Link>
  )
}

export const withRating = (Card) => {
  return (props) => {
    return (
      <div className="rated">
          {(props.resData.info.avgRating>4.4)?(<span class="recom">Recommended</span>):null}
          <Card {...props}/>
      </div>
    )
  }
}
export default Card;