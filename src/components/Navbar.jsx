import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ReactSVG } from 'react-svg'

const Navbar = () => {

  const [settings, setSettings]=useState(false);
  //settings section

  return (
    <div className='bg-[#fff] w-1/5 h-screen py-8 overflow-y-auto text-black scrollbar-thin scrollbar-thumb-rose-500 scrollbar-track-white scrollbar-thumb-rounded-xl'>

      <Link to={"/"}>
        <ReactSVG src=''/>
      </Link>
      
    {!settings ? (
      <nav className='flex flex-col items-center gap-4 mt-10'>

        <NavLink to={"/"} className={({ isActive }) => `py-1 w-3/4 text-center rounded-xl ${isActive ? 'text-2xl text-white bg-cyan-500 ' : 'text-xl'}`} >Home</NavLink>
        <NavLink to={"/customer"} className={({ isActive }) => `py-1 w-3/4 text-center rounded-xl ${isActive ? 'text-2xl text-white bg-cyan-500 ' : 'text-xl'}`} >Customer</NavLink>
        <NavLink to={"/personel"} className={({ isActive }) => `py-1 w-3/4 text-center rounded-xl ${isActive ? 'text-2xl text-white bg-cyan-500 ' : 'text-xl'}`} >Personel</NavLink>
        <NavLink to={"/product"} className={({ isActive }) => `py-1 w-3/4 text-center rounded-xl ${isActive ? 'text-2xl text-white bg-cyan-500 ' : 'text-xl'}`} >Product</NavLink>
        <NavLink to={"/order"} className={({ isActive }) => `py-1 w-3/4 text-center rounded-xl ${isActive ? 'text-2xl text-white bg-cyan-500 ' : 'text-xl'}`} >Order</NavLink>
        <NavLink to={"/calendar"} className={({ isActive }) => `py-1 w-3/4 text-center rounded-xl ${isActive ? 'text-2xl text-white bg-cyan-500 ' : 'text-xl'}`} >Calendar</NavLink>
        <NavLink to={"/kanban"} className={({ isActive }) => `py-1 w-3/4 text-center rounded-xl ${isActive ? 'text-2xl text-white bg-cyan-500 ' : 'text-xl'}`} >Kanban</NavLink>
        <NavLink to={"/line-graphic"} className={({ isActive }) => `py-1 w-3/4 text-center rounded-xl ${isActive ? 'text-2xl text-white bg-cyan-500 ' : 'text-xl'}`} >Line</NavLink>
        <NavLink to={"/pie-graphic"} className={({ isActive }) => `py-1 w-3/4 text-center rounded-xl ${isActive ? 'text-2xl text-white bg-cyan-500 ' : 'text-xl'}`} >Pie</NavLink>
        <NavLink to={"/bar-graphic"}className={({ isActive }) => `py-1 w-3/4 text-center rounded-xl ${isActive ? 'text-2xl text-white bg-cyan-500 ' : 'text-xl'}`} >Bar</NavLink>
        <NavLink to={"/areachart"} className={({ isActive }) => `py-1 w-3/4 text-center rounded-xl ${isActive ? 'text-2xl text-white bg-cyan-500 ' : 'text-xl'}`} >Area</NavLink>
        <NavLink to={"/financialchart"} className={({ isActive }) => `py-1 w-3/4 text-center rounded-xl ${isActive ? 'text-2xl text-white bg-cyan-500 ' : 'text-xl'}`} >Financial</NavLink>
        <NavLink to={"/pyramidchart"} className={({ isActive }) => `py-1 w-3/4 text-center rounded-xl ${isActive ? 'text-2xl text-white bg-cyan-500 ' : 'text-xl'}`} >Pyramid</NavLink>
        <NavLink to={"/stackedchart"} className={({ isActive }) => `py-1 w-3/4 text-center rounded-xl ${isActive ? 'text-2xl text-white bg-cyan-500 ' : 'text-xl'}`} >Stacked</NavLink>
        <p onClick={()=>setSettings((prev)=>!prev)} className={` py-1 w-3/4 text-center rounded-xl ${settings ? "text-2xl text-white bg-cyan-500":"text-xl"}`}>Settings</p>

        
      </nav>

    ):(
      <div>

      </div>
    )}
      
    </div>
  )
}

export default Navbar
