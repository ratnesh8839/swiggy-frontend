import resObj from "../utils/mockData";
import Card from "./Card";
import { useState } from "react";
const Body = () => {
    const [resData, setResData] = useState(resObj);
    return (
      <div className='body'>
        <div className="divide">Top restaurants
        <button className="filter" onClick={()=>{
            const newList = resData.filter((item)=>item.info.avgRating>4);
            setResData(newList);
        }}>Top Rated</button>
        </div>
        
        <div className="res_container">
          {/* <Card resData={resObj[0]}/> */}
          {/* call for 10 cards */}
          
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