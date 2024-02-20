import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-between items-center px-3 md:px-10 lg:px-12 mb-4 pt-3'>
      <div>
        <p className='text-sm md:text-base'>Copyright @2024, Tüm Hakları Saklıdır</p>
        <p className='text-sm md:text-base underline'>Privacy Policy</p>
      </div>

      <div className='flex gap-2 md:gap-4'>
        <i class="fa-brands fa-facebook hover:text-blue-600 text-lg md:text-xl"></i>
        <i class="fa-brands fa-twitter hover:text-cyan-500 text-lg md:text-xl"></i>
        <i class="fa-brands fa-instagram hover:text-purple-500 text-lg md:text-xl"></i>
        <i class="fa-brands fa-linkedin hover:text-blue-500 text-lg md:text-xl"></i>
      </div>
    </div>
  )
}

export default Footer
