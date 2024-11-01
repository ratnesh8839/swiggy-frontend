import React, { useEffect, useState } from 'react'
import NONVEG from '../assets/non-veg.png'
import VEG from '../assets/veg.png'
import { CLOUDINARY } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../utils/cartSlice';
const RestaurentMenuItemList = ({ items }) => {
    // console.log(items);
    const dispatch = useDispatch();
    // const addItemInCart = ()=>{
    //     dispatch(addItem(item));
    // }
    const [hideRemoveButton, setHideRemoveButton] = useState(false);
    const [itemHandler, setItemHandler] = useState({});
    const addItemInCart = async (info) => {
        
        setItemHandler(prv => ({ 
            ...prv, 
            [info.id]: 
                {
                    added:true,
                    count: (prv[info.id]?.count || 0) + 1
                } 
                }))
                itemHandler[info.id]?.count==undefined?dispatch(addItem(info)):null
                // console.log(itemHandler[info.id]);
                // console.log(itemHandler[info.id]?.count)   
    }
   
    const removeItemCart = (info) => {
        setItemHandler(prv => 
            {   const currentCount = prv[info.id]?.count || 0;
                if(currentCount>1){
                    return{
                        ...prv,
                        [info.id]:{
                            added:true,
                            count:currentCount-1,
                        }
                    }
                }
                else{
                    return{
                        ...prv,
                        [info.id]:{
                            added:false,
                            count:0,
                        }
                    }
                }
            })
        dispatch(removeItem(info))
    }
    // console.log(itemHandler)
    return (
        <div className=''>
            {
                items.map(item =>
                    <div key={item.card.info.id} className=''>
                        <div className='flex justify-between items-center  py-5'>
                            <div className='flex flex-col flex-wrap px-2'>
                                <img src={((item.card.info.itemAttribute.vegClassifier) == 'VEG') ? VEG : NONVEG} alt="" className='object-contain w-4 rounded-sm py-1' />
                                <div className='font-bold'>
                                    <span>{item.card.info.name}</span>
                                </div>
                                <span className='font-bold'>₹ {item.card.info.price / 100}</span>
                                <p>{item.card.info.description}</p>
                            </div>
                            <div className='h-[144px] w-[156px] aspect-[156/144] flex flex-col items-center'>
                                {item.card.info.imageId ? <img src={CLOUDINARY + item.card.info.imageId} alt="" className='h-[144px] w-[156px] aspect-[156/144] rounded-[12px] object-cover pr-2' /> : "no image"}
                                {/* add item button */}
                                {!itemHandler[item.card.info.id]?.added && <div className='flex absolute m-[125px] bg-green-100 text-green-600 shadow-md px-2 py-1 font-bold text-lg gap-2 rounded-md'>
                                    <button className='pl-2 pr-2' onClick={() => addItemInCart(item.card.info)}>Add</button>
                                </div>}
                                {itemHandler[item.card.info.id]?.added &&
                                    <div className='flex absolute m-[125px] bg-green-100 text-green-600 shadow-md px-3 py-1 font-bold text-lg gap-2 rounded-md'>
                                        <button className='' onClick={() =>removeItemCart(item.card.info)}>-</button>
                                        <span className=''>{itemHandler[item.card.info.id].count}</span>
                                        <button className='' onClick={() => addItemInCart(item.card.info)}>+</button>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className='w-full h-[0.5px] bg-gray-300'></div>
                    </div>)
            }
        </div>
    )
}

export default RestaurentMenuItemList