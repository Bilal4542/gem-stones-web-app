import React, { useState } from 'react'
import hero1 from '../assets/hero1.jpg'
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const HeroSection = () => {
    const slides = [
    {
      image: hero1,
      title: "Natural Crystal Formations",
      desc: "Display-ready specimens from around the world.",
    },
    {
      image: hero2,
      title: "Rare Mineral Collections",
      desc: "Hand-selected minerals for collectors.",
    },
    {
      image: hero3,
      title: "Premium Cut Stones",
      desc: "Perfectly polished gemstones for jewelry.",
    },
  ];
    const [current, setCurrent] = useState(0);

  return (
    <div>
          <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="h-full"
      >
    {slides.map((item) => {
      return(
        <SwiperSlide>
            <div className="">
        <img src={item.image} alt="" className='h-screen w-full relative transition-all duration-700' />
      </div>
     <div className="flex items-center justify-center">
        <div className="w-[90%]">
             <div className="absolute top-55 flex flex-col gap-5">
        <h1 className='text-[rgba(255,255,255,1)] font-bold text-6xl'> {item.title}</h1>
        <p className='text-[rgba(255,255,255,1)] text-[20px]'>{item.desc}
</p>
        <div className="flex gap-3">
            <button className='uppercase text-[16px] font-semibold bg-[rgba(212,175,55,1)] px-8 py-4 rounded-xl text-[rgba(255,255,255,1)]'>Explore Specimens</button>
            <button className='uppercase text-[16px] font-semibold border-2 px-8 py-4 rounded-xl text-[rgba(255,255,255,1)]'>Shop Cut Stones</button>
        </div>
      </div>
        </div>
     </div>
        </SwiperSlide>
      )
    })}
</Swiper>
    </div>
  )
}

export default HeroSection
