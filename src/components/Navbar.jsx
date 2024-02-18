import React, { useContext, useState } from 'react'
import Image from './Image';
import Avatar from '../../data/avatar.jpg'
import Badge from '@mui/material/Badge';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaCartShopping } from "react-icons/fa6";
import Notification from './dropdown/Notification'
import Messages from './dropdown/Messages';
import ShoppingCard from './dropdown/ShoppingCard';
import UserProfile from './dropdown/UserProfile';
import { DashboardContext } from '../context/DashboardContext';

const Navbar = () => {

  const [activeMenu,setActiveMenu]=useState("");
  const {mobileMenu}=useContext(DashboardContext);
  const {setMobileMenu}=useContext(DashboardContext);
  

  return (
    <div className='flex justify-between xs:px-3 md:px-8 lg:px-10 items-center border-b-2 border-black h-16 relative'>

      <div className='flex items-center xs:gap-2 lg:gap-5'>
        <i onClick={()=>setMobileMenu((prev)=>!prev)} className={`xs:block lg:hidden text-lg fa-solid ${!mobileMenu ? 'fa-bars' :'fa-x'}`}></i>
        <div className='flex gap-2 items-center'>
        <input type="text" className='border border-black xs:w-36 outline-none px-2 py-1 rounded-xl' placeholder='Search...'/>
        <i className="text-lg fa-solid fa-magnifying-glass cursor-pointer"></i>
        </div>

      </div>
        
      <div className='flex items-center xs:gap-2 md:gap-5 lg:gap-8'>

        {activeMenu!="shop" ? (
          <AiOutlineShoppingCart onClick={()=>setActiveMenu("shop")} className='xs:w-6 md:w-7 xs:h-6 md:h-7'/>
        ):(
          <FaCartShopping onClick={()=>setActiveMenu("")} className='xs:w-5 md:w-6 xs:h-5 md:h-6'/>
        )}
       
        

        <Badge color="primary" badgeContent={2} max={9}>
          <i onClick={()=>{activeMenu=="message" ? setActiveMenu(""):setActiveMenu("message")}} className={`xs:text-lg md:text-xl ${activeMenu=="message" ?'fa-solid':'fa-regular'} fa-message`}></i>
        </Badge>
        
        <Badge color="primary" badgeContent={1} max={9}>
          <i onClick={()=>{activeMenu=="notification" ? setActiveMenu(""):setActiveMenu("notification")}} className={`xs:text-lg md:text-xl ${activeMenu=="notification" ?'fa-solid':'fa-regular'} fa-bell`}></i>
        </Badge>

        <div className='flex items-center gap-2'>
          <Image src={Avatar} className={"xs:w-9 md:w-11 xs:h-9 md:h-11 rounded-full"}/>
          <p className='font-semibold xs:hidden md:block'>Micheal</p>
          <i onClick={()=>{activeMenu=="profile" ? setActiveMenu(""):setActiveMenu("profile")}} className="fa-solid fa-chevron-down"></i>
        </div>

        {activeMenu=="shop" &&(
          <ShoppingCard/>
        )}

        {activeMenu=="notification" && (
          <Notification/>
        )}

        {activeMenu=="message" && (
          <Messages/>
        )}

        {activeMenu=="profile" && (
          <UserProfile/>
        )}
        

      </div>

    </div>
  )
}

export default Navbar
