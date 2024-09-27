import { Link } from "react-router-dom";
import { CLOUDINARY } from "../utils/constants";

const Card = (props) => {
    const { resData } = props;
    const { costForTwo, cloudinaryImageId, name, avgRating, cuisines, locality,totalRatingsString } = resData?.info;
    console.log('/reasturent/'+resData.info.id);
    return (<Link className="card_link" to={'/restaurent/'+resData.info.id}>
      <div className="cards">
        <div className="item">
          <img className='item_image' src={CLOUDINARY+cloudinaryImageId} alt="" />
          <div className="content">
            <ul>
              <li><h4>{name}</h4></li>
              <li>{avgRating}⭐</li>
              <li>{cuisines.join(",")}</li>
              <li>{locality}</li>
              <li>{costForTwo}</li>
              <li>{totalRatingsString}</li>
            </ul>
          </div>
        </div>
      </div>
      </Link>
    )
  }
  export default Card;