import React from 'react'
import hero1 from '../assets/hero1.jpg'
const HeroSection = () => {
  return (
    <div>
      <div className="">
        <img src={hero1} alt="" className='h-screen w-full relative' />
      </div>
     <div className="flex items-center justify-center">
        <div className="w-[90%]">
             <div className="absolute top-80 flex flex-col gap-5">
        <h1 className='text-[rgba(255,255,255,1)] font-bold text-6xl'>Natural Crystal Formations</h1>
        <p className='text-[rgba(255,255,255,1)] text-[20px]'>Display-ready specimens from around the world.</p>
        <div className="flex gap-3">
            <button className='uppercase text-[16px] font-semibold bg-[rgba(212,175,55,1)] px-8 py-4 rounded-xl text-[rgba(255,255,255,1)]'>Explore Specimens</button>
            <button className='uppercase text-[16px] font-semibold border-2 px-8 py-4 rounded-xl text-[rgba(255,255,255,1)]'>Shop Cut Stones</button>
        </div>
      </div>
        </div>
     </div>
    </div>
  )
}

export default HeroSection
