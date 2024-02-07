import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ReactSVG } from 'react-svg'
import Logo from '../assets/dashboard-logo.svg'
import { GiLouvrePyramid } from "react-icons/gi";
import { BsKanban } from 'react-icons/bs';
import { AiOutlineShoppingCart, AiOutlineBarChart } from 'react-icons/ai';
import { RiContactsLine } from 'react-icons/ri';
import { IoMdContacts } from 'react-icons/io';
import { FaProductHunt } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";


const Sidebar = () => {

  const [settings, setSettings]=useState(false);
  const [theme,setTheme]=useState("light");
  const [themeColor,setThemeColor]=useState("#00BCD4");
  //settings section

  return (
    <div className='bg-[#fff] w-1/5 h-screen py-8 overflow-y-auto text-black scrollbar-thin scrollbar-thumb-slate-400 scrollbar-track-white scrollbar-thumb-rounded-xl'>

      <Link to={"/"} className='flex justify-center items-center gap-3'>
        <ReactSVG src={Logo}/>
        <h1 className='text-xl font-bold'>Dashboard</h1>
      </Link>
      
    {!settings ? (
      <nav className='flex flex-col items-center gap-4 mt-10'>

        <NavLink to={"/"} className={({ isActive }) => ` py-1 w-3/4 text-center rounded-xl flex items-center justify-center gap-3 ${isActive ? `text-xl font-semibold text-white bg-[${themeColor}] ` : 'text-lg hover:bg-slate-200'}`} ><i className='fa-solid fa-house'></i>Home</NavLink>
        <NavLink to={"/customer"} className={({ isActive }) => `py-1 w-3/4 text-center rounded-xl flex items-center justify-center gap-3 ${isActive ? `text-xl font-semibold text-white bg-[${themeColor}] ` : 'text-lg hover:bg-slate-200'}`} > <RiContactsLine /> Customer</NavLink>
        <NavLink to={"/personel"} className={({ isActive }) => `py-1 w-3/4 text-center rounded-xl flex items-center justify-center gap-3 ${isActive ? `text-xl font-semibold text-white bg-[${themeColor}] ` : 'text-lg hover:bg-slate-200'}`} > <IoMdContacts /> Employees</NavLink>
        <NavLink to={"/product"} className={({ isActive }) => `py-1 w-3/4 text-center rounded-xl flex items-center justify-center gap-3 ${isActive ? `text-xl font-semibold text-white bg-[${themeColor}] ` : 'text-lg hover:bg-slate-200'}`} > <FaProductHunt /> Product</NavLink>
        <NavLink to={"/order"} className={({ isActive }) => `py-1 w-3/4 text-center rounded-xl flex items-center justify-center gap-3 ${isActive ? `text-xl font-semibold text-white bg-[${themeColor}] ` : 'text-lg hover:bg-slate-200'}`} > <AiOutlineShoppingCart /> Order</NavLink>
        <NavLink to={"/calendar"} className={({ isActive }) => `py-1 w-3/4 text-center rounded-xl flex items-center justify-center gap-3 ${isActive ? `text-xl font-semibold text-white bg-[${themeColor}] ` : 'text-lg hover:bg-slate-200'}`} > <i class="fa-solid fa-calendar"></i> Calendar</NavLink>
        <NavLink to={"/kanban"} className={({ isActive }) => `py-1 w-3/4 text-center rounded-xl flex items-center justify-center gap-3 ${isActive ? `text-xl font-semibold text-white bg-[${themeColor}] ` : 'text-lg hover:bg-slate-200'}`} > <BsKanban /> Kanban</NavLink>
        <NavLink to={"/line-graphic"} className={({ isActive }) => `py-1 w-3/4 text-center rounded-xl flex items-center justify-center gap-3 ${isActive ? `text-xl font-semibold text-white bg-[${themeColor}] ` : 'text-lg hover:bg-slate-200'}`} > <i class="fa-solid fa-chart-line"></i> Line</NavLink>
        <NavLink to={"/pie-graphic"} className={({ isActive }) => `py-1 w-3/4 text-center rounded-xl flex items-center justify-center gap-3 ${isActive ? `text-xl font-semibold text-white bg-[${themeColor}] ` : 'text-lg hover:bg-slate-200'}`} > <i class="fa-solid fa-chart-pie"></i> Pie</NavLink>
        <NavLink to={"/bar-graphic"}className={({ isActive }) => `py-1 w-3/4 text-center rounded-xl flex items-center justify-center gap-3 ${isActive ? `text-xl font-semibold text-white bg-[${themeColor}] ` : 'text-lg hover:bg-slate-200'}`} > <i class="fa-solid fa-chart-column"></i> Bar</NavLink>
        <NavLink to={"/areachart"} className={({ isActive }) => `py-1 w-3/4 text-center rounded-xl flex items-center justify-center gap-3 ${isActive ? `text-xl font-semibold text-white bg-[${themeColor}] ` : 'text-lg hover:bg-slate-200'}`} > <i class="fa-solid fa-chart-area"></i> Area</NavLink>
        <NavLink to={"/financialchart"} className={({ isActive }) => `py-1 w-3/4 text-center rounded-xl flex items-center justify-center gap-3 ${isActive ? `text-xl font-semibold text-white bg-[${themeColor}] ` : 'text-lg hover:bg-slate-200'}`} > <i class="fa-solid fa-coins"></i> Financial</NavLink>
        <NavLink to={"/pyramidchart"} className={({ isActive }) => `py-1 w-3/4 text-center rounded-xl flex items-center justify-center gap-3 ${isActive ? `text-xl font-semibold text-white bg-[${themeColor}] ` : 'text-lg hover:bg-slate-200'}`} > <GiLouvrePyramid /> Pyramid</NavLink>
        <NavLink to={"/stackedchart"} className={({ isActive }) => `py-1 w-3/4 text-center rounded-xl flex items-center justify-center gap-3 ${isActive ? `text-xl font-semibold text-white bg-[${themeColor}] ` : 'text-lg hover:bg-slate-200'}`} > <AiOutlineBarChart /> Stacked</NavLink>
        <p onClick={()=>setSettings((prev)=>!prev)} className={`py-1 w-3/4 text-center rounded-xl flex items-center justify-center gap-3 ${settings ? `text-xl font-semibold text-white bg-[${themeColor}]`:"text-lg hover:bg-slate-200"}`}><i class="fa-solid fa-gear"></i> Settings</p>

        
      </nav>

    ):(
      <div className='w-full mt-10 flex flex-col items-center justify-center'>

        <div className='w-3/4 flex flex-col justify-center items-center gap-4'>
          <h3 className='text-lg font-semibold'>Theme Color</h3>

          
          <div onClick={()=>setThemeColor("#e63946")} className={`${themeColor=="#e63946" ? 'border-2 border-green-600':'border border-black'} rounded-full w-6 h-6 bg-[#e63946]`}></div>
          <div onClick={()=>setThemeColor("#457b9d")} className={`${themeColor=="#457b9d" ? 'border-2 border-green-600':'border border-black'} rounded-full w-6 h-6 bg-[#457b9d]`}></div>
          <div onClick={()=>setThemeColor("#00BCD4")} className={`${themeColor=="#00BCD4" ? 'border-2 border-green-600':'border border-black'} rounded-full w-6 h-6 bg-[#00BCD4]`}></div>
          <div onClick={()=>setThemeColor("#fca311")} className={`${themeColor=="#fca311" ? 'border-2 border-green-600':'border border-black'} rounded-full w-6 h-6 bg-[#fca311]`}></div>
          <div onClick={()=>setThemeColor("#6a994e")} className={`${themeColor=="#6a994e" ? 'border-2 border-green-600':'border border-black'} rounded-full w-6 h-6 bg-[#6a994e]`}></div>
          <div onClick={()=>setThemeColor("#e07a5f")} className={`${themeColor=="#e07a5f" ? 'border-2 border-green-600':'border border-black'} rounded-full w-6 h-6 bg-[#e07a5f]`}></div>
          <div onClick={()=>setThemeColor("#7209b7")} className={`${themeColor=="#7209b7" ? 'border-2 border-green-600':'border border-black'} rounded-full w-6 h-6 bg-[#7209b7]`}></div>
          

        </div>

        <div className='w-3/4 flex flex-col justify-center items-center gap-4 mt-10'>
          <h3 className='text-lg font-semibold'>Theme</h3>

          {theme=="light" ? (
            <MdSunny className='w-6 h-6' onClick={()=>setTheme("dark")}/>
          ):(
            <FaMoon className='w-6 h-6' onClick={()=>setTheme("light")}/>
          )}

        </div>

        <i className='text-xl fa-x fa-solid mt-10' onClick={()=>setSettings(false)}></i>

      </div>
    )}
      
    </div>
  )
}

export default Sidebar
