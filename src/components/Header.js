import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  // let val = "Login";
  const onlineStatus = useOnlineStatus();
  let [val,setVal] = useState("Login");
  let [inputText,setInputText] = useState("");
  const {loggedInUser} = useContext(UserContext);
  const cartItem = useSelector(store => store.cart.items);
    return (
      <div className='header'>
        <div className='logo-container'>
          <img className='logo' src="data:image/jpeg;base64,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" alt='logo' />
        </div>
        <div className='navbar'>
          <ul>
            <li>Online Status:{onlineStatus ? " ✅":" 🔴"}</li>
            <li><Link className="headerlink" to={onlineStatus ?"/grocery":"/"}>Grocery</Link></li>
            <li><Link className="headerlink" to="/">Home</Link></li>
            <li><Link className="headerlink" to={onlineStatus ?"/about":"/"}>About</Link></li>
            <li><Link className="headerlink" to={onlineStatus ?"/contact":"/"}>Contact</Link></li>
            <li><Link to={onlineStatus ?"/cart":"/"}><button className="font-bold">Cart({cartItem.length})</button></Link></li>
            <li><Link className="headerlink font-bold" to={onlineStatus ?"/profile":"/"}>{loggedInUser}</Link></li>
            {/* <button className="log" onClick={(e)=>{
              // console.log(e);
              if(val==="Login") setVal("Logout");
              else
              setVal("Login");
            }}>{val}</button> */}
          </ul>
        </div>
      </div>
    )
  }

    export default Header;