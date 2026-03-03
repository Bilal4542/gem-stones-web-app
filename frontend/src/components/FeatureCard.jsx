import React from 'react'
import feature1 from '../assets/feature1.jpg'
const FeatureCard = ({image,title,desc,price}) => {
  return (
        <div className='flex flex-col gap-4 shadow '>
      <div className="">
        <img src={image} alt="" />
      </div>
      <div className="p-2 flex flex-col gap-2">
        <h1 className='font-semibold text-[16px]'>{title}</h1>
        <p className='text-[rgba(102,102,102,1)] text-[14px]'>{desc}</p>
        <p className='font-bold text-[rgba(212,175,55,1)] text-[16px]'>{price}</p>
      </div>
    </div>
  )
}

export default FeatureCard
