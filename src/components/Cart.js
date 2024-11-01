import React from 'react'
import { useSelector } from 'react-redux'
import NONVEG from '../assets/non-veg.png'
import VEG from '../assets/veg.png'
import { CLOUDINARY } from '../utils/constants';
const Cart = () => {
    const cartItem = useSelector(store => store.cart.items);
    console.log(cartItem);
    return (
        <div>
           {
           cartItem.length ? cartItem.map(item=>(
            <div key={item?.id} className=''>
            <div className='flex justify-between items-center  py-5'>
                <div className='flex flex-col flex-wrap px-2'>
                    <img src={((item?.itemAttribute.vegClassifier) == 'VEG') ? VEG : NONVEG} alt="" className='object-contain w-4 rounded-sm py-1' />
                    <div className='font-bold'>
                        <span>{item?.name}</span>
                    </div>
                    <span className='font-bold'>₹ {item?.price / 100}</span>
                    <p>{item?.description}</p>
                </div>
                <div className='h-[144px] w-[156px] aspect-[156/144] flex flex-col items-center'>
                    {item?.imageId ? <img src={CLOUDINARY + item?.imageId} alt="" className='h-[144px] w-[156px] aspect-[156/144] rounded-[12px] object-cover pr-2' /> : "no image"}
                    {/* add item button */}
                </div>
            </div>
            <div className='w-full h-[0.5px] bg-gray-300'></div>
        </div>
           )
        )
        :<h1>No itme in cart</h1>
        }
        </div>
    )
}

export default Cart