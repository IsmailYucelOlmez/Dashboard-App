import React, { useState } from 'react'
import Image from './Image';
import Avatar from '../../data/avatar.jpg'

const Navbar = () => {

  const [notificationSection,setNotificationSection]=useState(false);
  const [messagesSection,setMessagesSection]=useState(false);
  const mobileMenu=false;

  return (
    <div className='flex justify-between px-10 items-center border-b-2 border-black h-16 relative'>

      <div className='flex items-center gap-5'>
        <i className={`xs:block lg:hidden text-xl fa-solid ${!mobileMenu ? 'fa-bars' :'fa-x'}`}></i>
        <div className='flex gap-2 items-center'>
        <input type="text" className='border border-black outline-none px-2 py-1 rounded-xl' placeholder='Search...'/>
        <i class="text-lg fa-solid fa-magnifying-glass"></i>
        </div>

      </div>
        
      <div>
        <i></i>
        <i></i>
        <i></i>
        <Image src={Avatar} className={"w-12 h-12 rounded-full"}/>

      </div>

    </div>
  )
}

export default Navbar
