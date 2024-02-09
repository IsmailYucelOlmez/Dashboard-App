import React, { useState } from 'react'
import Image from './Image';
import Avatar from '../../data/avatar.jpg'
import Badge from '@mui/material/Badge';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaCartShopping } from "react-icons/fa6";
import Notification from './dropdown/Notification'
import Messages from './dropdown/Messages';
import ShoppingCard from './dropdown/ShoppingCard';
import UserProfile from './dropdown/UserProfile';

const Navbar = () => {

  const [activeMenu,setActiveMenu]=useState("");
  const mobileMenu=false;
  //when clicked icons filled

  return (
    <div className='flex justify-between px-10 items-center border-b-2 border-black h-16 relative'>

      <div className='flex items-center gap-5'>
        <i className={`xs:block lg:hidden text-xl fa-solid ${!mobileMenu ? 'fa-bars' :'fa-x'}`}></i>
        <div className='flex gap-2 items-center'>
        <input type="text" className='border border-black outline-none px-2 py-1 rounded-xl' placeholder='Search...'/>
        <i class="text-lg fa-solid fa-magnifying-glass cursor-pointer"></i>
        </div>

      </div>
        
      <div className='flex items-center gap-8'>

        {activeMenu!="shop" ? (
          <AiOutlineShoppingCart onClick={()=>setActiveMenu("shop")} className='w-7 h-7'/>
        ):(
          <FaCartShopping onClick={()=>setActiveMenu("")} className='w-6 h-6'/>
        )}
       
        

        <Badge color="primary" badgeContent={2} max={9}>
          <i onClick={()=>{activeMenu=="message" ? setActiveMenu(""):setActiveMenu("message")}} class={`text-xl ${activeMenu=="message" ?'fa-solid':'fa-regular'} fa-message`}></i>
        </Badge>
        
        <Badge color="primary" badgeContent={1} max={9}>
          <i onClick={()=>{activeMenu=="notification" ? setActiveMenu(""):setActiveMenu("notification")}} class={`text-xl ${activeMenu=="notification" ?'fa-solid':'fa-regular'} fa-bell`}></i>
        </Badge>

        <div className='flex items-center gap-2'>
          <Image src={Avatar} className={"w-11 h-11 rounded-full"}/>
          <p className='font-semibold'>Micheal</p>
          <i onClick={()=>{activeMenu=="profile" ? setActiveMenu(""):setActiveMenu("profile")}} class="fa-solid fa-chevron-down"></i>
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
