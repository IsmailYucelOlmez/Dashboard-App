import React from 'react'
import Avatar from '../../../data/avatar.jpg'
import Image from '../Image'

const UserProfile = ({setActiveMenu}) => {
  return (
    <div className='absolute xs:w-48 md:w-72 rounded-lg xs:p-1 md:p-3 bg-white dark:bg-slate-600 xs:-bottom-88 md:-bottom-96 xs:right-2 md:right-8'>
      <div className='flex justify-between items-center'>
        <h5 className='font-bold text-lg'>User Profile</h5>

        <i onClick={()=>setActiveMenu("")} className='fa-solid fa-x text-xs rounded-full border border-black dark:border-white py-0.5 px-1'></i>
      </div>

      <div className='flex items-center xs:gap-2 md:gap-5 mt-4'>
        <Image src={Avatar} className={"w-16 h-16 rounded-full"}/>

        <div>

          <p className='font-bold truncate'>Micheal C.</p>
          <p>Admin</p>
          <p className='xs:hidden lg:flex'>micheal@gmail.com</p>

        </div>
      </div>

      <div className='mt-4 xs:mx-1 md:mx-6 flex items-center gap-6'>
        <i class="fa-solid fa-dollar-sign text-2xl "></i>

        <div>
          <p>My Account</p>
          <p className='text-sm font-thin'>Account Settings</p>
        </div>

      </div>

      <div className='mt-4 xs:mx-1 md:mx-5 flex items-center gap-6'>
        <i class="fa-solid fa-inbox text-xl "></i>

        <div>
          <p>My Inbox</p>
          <p className='text-sm font-thin'>Messages & Emails</p>
        </div>

      </div>

      <div className='mt-4 xs:mx-1 md:mx-5 flex items-center gap-6'>
        <i class="fa-solid fa-list-check text-xl "></i>

        <div>
          <p>My Tasks</p>
          <p className='text-sm font-thin'>To-do and Daily Tasks</p>
        </div>

      </div>

      <button className='xs:p-1 md:p-2 mt-4 text-white bg-[#d8315b] rounded-xl w-full border border-white hover:border-[#d8315b]'>Logout</button>
      
      
    </div>
  )
}

export default UserProfile
