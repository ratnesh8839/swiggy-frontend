import React, { useContext, useState } from 'react'
import UserContext from "../utils/UserContext.js";
const Profile = () => {
  const {loggedInUser,setUserName} = useContext(UserContext);
  const [valuee, setValue] = useState();
  return (
    <div>
      {/* create profile information */}
        <input type="text" placeholder='Change User Name' className='border border-gray-200 p-4 font-bold mr-2 my-2 rounded-md shadow-sm' value={valuee} onChange={(e)=>{setValue(e.target.value)}}/>
        <button className='border border-gray-300 shadow-md p-2 rounded-md hover:shadow-lg' onClick={()=>{valuee?setUserName(valuee):setUserName(loggedInUser)}}>Change</button>
        <h1>Profile</h1>
        <p>Username: <b>{loggedInUser}</b></p>
        <p>Email:<b>ratnesh@gmail.com</b></p>

    </div>
  )
}

export default Profile