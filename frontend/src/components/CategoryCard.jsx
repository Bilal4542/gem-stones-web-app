import React from 'react'
import category1 from '../assets/category1.jpg'

const CategoryCard = ({image,title,desc,btn}) => {
  return (

        <div className="relative ">
            <div className="">
                <img src={image} alt="" className='rounded ' />
            </div>
            <div className="absolute bottom-0 flex flex-col gap-2 p-5">
                <h1 className='font-bold text-[20px] text-white'>{title}</h1>
                <p className='text-[14px] text-white'>{desc}</p>
                <button className='bg-[rgba(212,175,55,1)] font-semibold px-5 py-3 rounded-lg text-white w-fit'>{btn}</button>
            </div>
        </div>

  )
}

export default CategoryCard
