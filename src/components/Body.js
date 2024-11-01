import Card, { withRating } from "./Card";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import HeaderTwo from "./HeaderTwo";
import { Bannerr } from "../utils/constants";
import useOnlineStatus  from "../utils/useOnlineStatus";
import Offline from "./Offline";
const Body = () => {
  const [resData, setResData] = useState(null);
  const [inputText, setInputText] = useState("");
  const [temp, setTemp] = useState([]);
  // console.log(resData);
  const CardWithRating = withRating(Card);

  useEffect(() => {
    fetched();
  }, []);
  const fetched = async () => {
    try {
      // const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=28.6139298&lng=77.2088282", {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6139298&lng=77.2088282&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING", {
        cache: "no-store",
      });
      const json_data = await data.json();
      // console.log(json_data);
      // const arr = json_data?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants;
      const arr = json_data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setResData(arr);

      setTemp(arr);
    }
    catch (e) {
      console.log(e);
    }
  }
  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false){
    return <Offline/>
  }

  if (resData == null) {
    return <div>
      <HeaderTwo images={Bannerr} />
      <div className="res_container"><Shimmer /></div>
    </div>
  }

  return (
    <div className='body'>
      <HeaderTwo images={Bannerr} />
      <div className="divide">
        Top restaurants
        <button className="filter" onClick={() => {
          const newList = resData.filter((item) => item.info.avgRating > 4);
          setResData(newList);
        }}>Top Rated</button>

        <div className="search"><input className="search_box" placeholder='search' value={inputText} onChange={(e) => {
          setInputText(e.target.value);
        }} />
          <button className="filter " onClick={() => {
            // console.log(temp);
            const newList = temp.filter((item) => {
              return item.info.name.toLowerCase().includes(inputText.toLowerCase());
            })
            setResData(newList);
          }}>search</button>
        </div>

      </div>

      <div className="res_container">
        {
          resData.map((myList) => (
            (myList.info.avgRating > 4.4) ? (<CardWithRating key={myList.info.id} resData={myList}/>) : (<Card key={myList.info.id} resData={myList} />)
            // <CardWithRating key={myList.info.id} resData={myList} />
          ))
        }

      </div>
    </div>
  )
}
export default Body;