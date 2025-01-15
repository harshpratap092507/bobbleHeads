import React from 'react'

const Giftproduct = ({giftdetail}) => {
   
    const {name, originalPrice,salesPrice,img}=giftdetail;
  return (
    <div className='giftproduct'>
      <div className='gift-img'>
        <img src={img} alt='-gift-img'/>
      </div>
      <p className='giftname'>{name}</p>
      <p className='original-price'>Rs:{originalPrice}</p>
      <p className='sale-price'>Rs:{salesPrice}</p>
    </div>
  )
}

export default Giftproduct
