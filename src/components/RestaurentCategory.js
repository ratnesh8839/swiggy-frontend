import React from 'react'
import RestaurentMenuItemList from './RestaurentMenuItemList';
import down from '../assets/downArrow.svg'
import up from '../assets/upArrow.svg'
const RestaurentCategory = (props) => {
  const { data,hide,setShowIndex} = props;
  // console.log(props.index);
  const { title } = data;
  const size = data.itemCards.length;
  const handleClick = () => {
  //  method 1
    // if(itemList === index){
    // setItemList(-1);}
    // else{
    //   setItemList(index);
    // }
  // method 2
  //   setItemList(prvState =>({
  //     // ...prvState, 
  //     [index]: !hide[index]}));
  // method 3
    setShowIndex();
  }
  return (
    <div className=''>
      <div className=''>
        <div className='flex justify-between hover:shadow-xl bg-gray-50 my-4 font-bold p-4 shadow-lg cursor-pointer items-center' onClick={handleClick}>
          <span className='font-bold text-lg font-mono'>{title + "(" + size + ")"}</span>
          <span>{!hide ?
          // "🔽"
          <img src={down} alt="" className='w-4'/>
          :
          <img src={up} alt="" className='w-4'/>
          }</span>
        </div>
          <div className=''>
            {hide && <RestaurentMenuItemList items={data.itemCards} />}
          </div>
        </div>

    </div>
  )

}

export default RestaurentCategory