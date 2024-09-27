import Card from "./Card";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import HeaderTwo from "./HeaderTwo";
import { Bannerr } from "../utils/constants";
const Body = () => {
  const [resData, setResData] = useState([]);
  const [inputText, setInputText] = useState("");
  const [temp, setTemp] = useState([]);
  useEffect(() => {
    fetched();
  }, []);
  const fetched = async () => {
    try {
      const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=28.6139298&lng=77.2088282", {
        cache: "no-store",
      });
      const json_data = await data.json();
      console.log(json_data);
      const arr = json_data?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants;
      setResData(arr);

      setTemp(arr);
    }
    catch (e) {
      console.log(e);
    }
  }
  if (resData.length === 0) {
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
            console.log(temp);
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
            <Card key={myList.info.id} resData={myList} />
          ))
        }

      </div>
    </div>
  )
}
export default Body;