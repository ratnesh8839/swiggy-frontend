import { useEffect, useState } from 'react';
import { MENU_URL } from './constants';
const useRestaurentMenu = (resId) =>{
    const [resInfo, setResInfo] = useState([]);
useEffect(()=>{
    fetched();
},[]);
const fetched = async () => {
    const data = await fetch(MENU_URL+resId);
    const json = await data.json();
    setResInfo(json);
}
// console.log(resId);
return resInfo;
}

export default useRestaurentMenu;