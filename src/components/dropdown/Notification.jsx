import React from 'react'
import Image from '../Image'
import Avatar from '../../../data/avatar.jpg'
import Avatar2 from '../../../data/avatar2.jpg'
import Avatar3 from '../../../data/avatar3.png'
import Avatar4 from '../../../data/avatar4.jpg'

const Notification = ({setActiveMenu}) => {

  return (
    <div className='absolute xs:w-48 md:w-72 rounded-lg xs:p-1 md:p-3 bg-white dark:bg-slate-600 xs:-bottom-76 md:-bottom-88 xs:right-2 md:right-6 lg:right-16'>
      
      <div className='flex justify-between items-center'>
        <h5 className='font-bold text-lg'>Notifications</h5>

        <i onClick={()=>setActiveMenu("")} className='fa-solid fa-x text-xs rounded-full border border-black dark:border-white py-0.5 px-1'></i>
      </div>

      <div className='flex xs:gap-2 md:gap-5 mt-4 items-center '>
        <Image src={Avatar2} className={"xs:w-14 w-16 xs:h-14 md:h-16 rounded-full"}/>

        <div>

          <p className='font-bold xs:text-sm md:text-base'>Sophia S.</p>
          <p className='xs:text-sm md:text-base'>Welcome to team</p>
        </div>

      </div>

      <div className='flex xs:gap-2 md:gap-5 mt-4 items-center '>
        <Image src={Avatar3} className={"xs:w-14 md:w-16 xs:h-14 md:h-16 rounded-full"}/>

        <div>

          <p className='font-bold'>Mike D.</p>
          <p>New files ready</p>
        </div>
      </div>
    
      <div className='flex xs:gap-2 md:gap-5 mt-4 items-center'>
        <Image src={Avatar4} className={"xs:w-14 md:w-16 xs:h-14 md:h-16 rounded-full"}/>

        <div>

          <p className='font-bold xs:text-sm md:text-base'>Mike D.</p>
          <p className='xs:text-sm md:tex-base'>Meeting Date Changed</p>
        </div>

      </div>

      <button className='xs:p-1 md:p-2 mt-4 xs:text-sm md:text-base text-white bg-[#3e92cc] rounded-xl w-full border border-white hover:border-[#3e92cc]'>See All Notifications</button>
      

    </div>
  )
}

export default Notification
