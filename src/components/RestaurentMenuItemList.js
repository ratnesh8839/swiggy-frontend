import React, { useState } from 'react'
import NONVEG from '../assets/non-veg.png'
import VEG from '../assets/veg.png'
import { CLOUDINARY } from '../utils/constants';
const RestaurentMenuItemList = ({ items }) => {
    // console.log(items);
    return (
        <div className=''>
            {
                items.map(item =>
                    <div key={item.card.info.id} className=''>
                        <div className='flex justify-between items-center  py-5'>
                            <div className='flex flex-col flex-wrap px-2'>
                                <img src={((item.card.info.itemAttribute.vegClassifier)=='VEG')?VEG:NONVEG} alt="" className='object-contain w-4 rounded-sm py-1'/>
                                <div className='font-bold'>
                                    <span>{item.card.info.name}</span>
                                </div>
                                <span className='font-bold'>₹ {item.card.info.price / 100}</span>
                                <p>{item.card.info.description}</p>
                            </div>
                            {item.card.info.imageId ? <img src={CLOUDINARY + item.card.info.imageId} alt="" className='h-[144px] w-[156px] aspect-[156/144] rounded-[12px] object-cover pr-2' />:"no image"}
                        </div>
                        <div className='w-full h-[0.5px] bg-gray-300'></div>
                    </div>)
            }
        </div>
    )
}

export default RestaurentMenuItemList