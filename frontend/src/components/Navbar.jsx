import React from 'react'
import { CiShoppingCart, CiUser,CiHeart , CiSearch  } from "react-icons/ci";
const Navbar = () => {
  return (
    <div className='flex items-center justify-center shadow'>
      <div className="w-[90%] flex items-center justify-between py-8">
        <div className="">
            <a href="" className='uppercase text-[18px] bg-[rgba(212,175,55,1)] px-6 py-3 rounded-2xl'>Gems</a>
        </div>
        <div className="flex items-center gap-5">
            <CiSearch size={30}/>
            <CiHeart  size={30}/>
            <CiShoppingCart size={30}/>
            <CiUser  size={30}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
