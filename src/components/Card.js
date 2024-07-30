const Card = (props) => {
    const { resData } = props;
    const { costForTwo, cloudinaryImageId, name, avgRating, cuisines, locality,totalRatingsString } = resData?.info;
    return (
      <div className="cards">
        <div className="item">
          <img className='item_image' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="" />
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
    )
  }
  export default Card;