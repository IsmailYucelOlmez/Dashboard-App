import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { LuLayoutDashboard } from "react-icons/lu";
import { GiLouvrePyramid } from "react-icons/gi";
import { BsKanban } from 'react-icons/bs';
import { AiOutlineBarChart } from 'react-icons/ai';
import { RiContactsLine } from 'react-icons/ri';
import { IoMdContacts } from 'react-icons/io';
import { FaProductHunt } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { DashboardContext } from '../context/DashboardContext';



const Sidebar = () => {

  const [settings, setSettings]=useState(false);
  const {mobileMenu}=useContext(DashboardContext);
  const {setMobileMenu}=useContext(DashboardContext);
  const {theme}=useContext(DashboardContext);
  const {setTheme}=useContext(DashboardContext);
  const {themeColor}=useContext(DashboardContext);
  const {setThemeColor}=useContext(DashboardContext);
  
  const toggleMenu=()=>{
    if(settings==true){
         
    }
    else{
      setMobileMenu(false)
    }
    
  }
  

  return (

    <div onClick={()=>toggleMenu()} className={`${(mobileMenu || settings) ? 'xs:w-full':'xs:w-0'} h-screen xs:absolute z-20 lg:relative lg:w-1/5`}>
    <div className={`bg-[#fff] dark:bg-slate-800 dark:text-white ${(mobileMenu || settings) ? 'xs:block':'xs:hidden'} lg:block xs:w-1/2 md:w-1/3 h-screen lg:w-full xs:absolute top-0 left-0 py-8 overflow-y-auto text-black scrollbar-none hover:scrollbar-thin scrollbar-thumb-slate-400 dark:scrollbar-thumb-white scrollbar-track-white dark:scrollbar-track-slate-800 scrollbar-thumb-rounded-xl`}>

      <Link to={"/"} className='flex justify-center items-center gap-3'>
        <LuLayoutDashboard className='xs:text-3xl lg:text-5xl'/>
        <h1 className='xs:text-lg md:text-xl font-bold'>Dashboard</h1>
      </Link>
      
    {!settings ? (
      <nav className='flex flex-col items-center gap-4 mt-10'>

        <NavLink to={"/"} className={({ isActive }) => ` py-1 w-3/4 text-center rounded-xl flex items-center justify-center gap-3 ${isActive ? `xs:text-lg md:text-xl font-semibold text-white bg-[${themeColor}] ` : 'xs:text-base md:text-lg hover:bg-slate-200 dark:hover:bg-slate-500'}`} ><i className='fa-solid fa-house'></i>Home</NavLink>
        <NavLink to={"/customer"} className={({ isActive }) => `py-1 w-3/4 text-center rounded-xl flex items-center justify-center gap-3 ${isActive ? `xs:text-lg md:text-xl font-semibold text-white bg-[${themeColor}] ` : 'xs:text-base md:text-lg hover:bg-slate-200 dark:hover:bg-slate-500'}`} > <RiContactsLine /> Customer</NavLink>
        <NavLink to={"/personel"} className={({ isActive }) => `py-1 w-3/4 text-center rounded-xl flex items-center justify-center gap-3 ${isActive ? `xs:text-lg md:text-xl font-semibold text-white bg-[${themeColor}] ` : 'xs:text-base md:text-lg hover:bg-slate-200 dark:hover:bg-slate-500'}`} > <IoMdContacts /> Employees</NavLink>
        <NavLink to={"/product"} className={({ isActive }) => `py-1 w-3/4 text-center rounded-xl flex items-center justify-center gap-3 ${isActive ? `xs:text-lg md:text-xl font-semibold text-white bg-[${themeColor}] ` : 'xs:text-base md:text-lg hover:bg-slate-200 dark:hover:bg-slate-500'}`} > <FaProductHunt /> Product</NavLink>
        <NavLink to={"/order"} className={({ isActive }) => `py-1 w-3/4 text-center rounded-xl flex items-center justify-center gap-3 ${isActive ? `xs:text-lg md:text-xl font-semibold text-white bg-[${themeColor}] ` : 'xs:text-base md:text-lg hover:bg-slate-200 dark:hover:bg-slate-500'}`} > <i className="fa-solid fa-cart-shopping"></i> Order</NavLink>
        <NavLink to={"/calendar"} className={({ isActive }) => `py-1 w-3/4 text-center rounded-xl flex items-center justify-center gap-3 ${isActive ? `xs:text-lg md:text-xl font-semibold text-white bg-[${themeColor}] ` : 'xs:text-base md:text-lg hover:bg-slate-200 dark:hover:bg-slate-500'}`} > <i className="fa-solid fa-calendar"></i> Calendar</NavLink>
        <NavLink to={"/kanban"} className={({ isActive }) => `py-1 w-3/4 text-center rounded-xl flex items-center justify-center gap-3 ${isActive ? `xs:text-lg md:text-xl font-semibold text-white bg-[${themeColor}] ` : 'xs:text-base md:text-lg hover:bg-slate-200 dark:hover:bg-slate-500'}`} > <BsKanban /> Kanban</NavLink>
        <NavLink to={"/linegraphic"} className={({ isActive }) => `py-1 w-3/4 text-center rounded-xl flex items-center justify-center gap-3 ${isActive ? `xs:text-lg md:text-xl font-semibold text-white bg-[${themeColor}] ` : 'xs:text-base md:text-lg hover:bg-slate-200 dark:hover:bg-slate-500'}`} > <i className="fa-solid fa-chart-line"></i> Line</NavLink>
        <NavLink to={"/piegraphic"} className={({ isActive }) => `py-1 w-3/4 text-center rounded-xl flex items-center justify-center gap-3 ${isActive ? `xs:text-lg md:text-xl font-semibold text-white bg-[${themeColor}] ` : 'xs:text-base md:text-lg hover:bg-slate-200 dark:hover:bg-slate-500'}`} > <i className="fa-solid fa-chart-pie"></i> Pie</NavLink>
        <NavLink to={"/bargraphic"}className={({ isActive }) => `py-1 w-3/4 text-center rounded-xl flex items-center justify-center gap-3 ${isActive ? `xs:text-lg md:text-xl font-semibold text-white bg-[${themeColor}] ` : 'xs:text-base md:text-lg hover:bg-slate-200 dark:hover:bg-slate-500'}`} > <i className="fa-solid fa-chart-column"></i> Bar</NavLink>
        <NavLink to={"/areachart"} className={({ isActive }) => `py-1 w-3/4 text-center rounded-xl flex items-center justify-center gap-3 ${isActive ? `xs:text-lg md:text-xl font-semibold text-white bg-[${themeColor}] ` : 'xs:text-base md:text-lg hover:bg-slate-200 dark:hover:bg-slate-500'}`} > <i className="fa-solid fa-chart-area"></i> Area</NavLink>
        <NavLink to={"/financialchart"} className={({ isActive }) => `py-1 w-3/4 text-center rounded-xl flex items-center justify-center gap-3 ${isActive ? `xs:text-lg md:text-xl font-semibold text-white bg-[${themeColor}] ` : 'xs:text-base md:text-lg hover:bg-slate-200 dark:hover:bg-slate-500'}`} > <i className="fa-solid fa-coins"></i> Financial</NavLink>
        <NavLink to={"/pyramidchart"} className={({ isActive }) => `py-1 w-3/4 text-center rounded-xl flex items-center justify-center gap-3 ${isActive ? `xs:text-lg md:text-xl font-semibold text-white bg-[${themeColor}] ` : 'xs:text-base md:text-lg hover:bg-slate-200 dark:hover:bg-slate-500'}`} > <GiLouvrePyramid /> Pyramid</NavLink>
        <NavLink to={"/stackedchart"} className={({ isActive }) => `py-1 w-3/4 text-center rounded-xl flex items-center justify-center gap-3 ${isActive ? `xs:text-lg md:text-xl font-semibold text-white bg-[${themeColor}] ` : 'xs:text-base md:text-lg hover:bg-slate-200 dark:hover:bg-slate-500'}`} > <AiOutlineBarChart /> Stacked</NavLink>
        <p  onClick={()=>{setSettings(true); setMobileMenu(true)}} className={`py-1 w-3/4 text-center rounded-xl flex items-center justify-center gap-3 ${settings ? `xs:text-lg md:text-xl font-semibold text-white bg-[${themeColor}]`:"xs:text-base md:text-lg hover:bg-slate-200 dark:hover:bg-slate-500"}`}><i className="fa-solid fa-gear"></i> Settings</p>

        
      </nav>

    ):(
      <div className='w-full h-screen mt-10 flex flex-col items-center '>

        <div className='w-3/4 flex flex-col justify-center items-center gap-4'>
          <h3 className='text-lg font-semibold'>Theme Color</h3>

          
          <div onClick={()=>setThemeColor("#e63946")} className="border border-black dark:border-white flex justify-center items-center text-white text-xs rounded-full w-6 h-6 bg-[#e63946]">{themeColor=="#e63946" && (<i className='fa-solid fa-check'></i>)}</div>
          <div onClick={()=>setThemeColor("#457b9d")} className="border border-black dark:border-white flex justify-center items-center text-white text-xs rounded-full w-6 h-6 bg-[#457b9d]">{themeColor=="#457b9d" && (<i className='fa-solid fa-check'></i>)}</div>
          <div onClick={()=>setThemeColor("#00BCD4")} className="border border-black dark:border-white flex justify-center items-center text-white text-xs rounded-full w-6 h-6 bg-[#00BCD4]">{themeColor=="#00BCD4" && (<i className='fa-solid fa-check'></i>)}</div>
          <div onClick={()=>setThemeColor("#fca311")} className="border border-black dark:border-white flex justify-center items-center text-white text-xs rounded-full w-6 h-6 bg-[#fca311]">{themeColor=="#fca311" && (<i className='fa-solid fa-check'></i>)}</div>
          <div onClick={()=>setThemeColor("#6a994e")} className="border border-black dark:border-white flex justify-center items-center text-white text-xs rounded-full w-6 h-6 bg-[#6a994e]">{themeColor=="#6a994e" && (<i className='fa-solid fa-check'></i>)}</div>
          <div onClick={()=>setThemeColor("#e07a5f")} className="border border-black dark:border-white flex justify-center items-center text-white text-xs rounded-full w-6 h-6 bg-[#e07a5f]">{themeColor=="#e07a5f" && (<i className='fa-solid fa-check'></i>)}</div>
          <div onClick={()=>setThemeColor("#7209b7")} className="border border-black dark:border-white flex justify-center items-center text-white text-xs rounded-full w-6 h-6 bg-[#7209b7]">{themeColor=="#7209b7" && (<i className='fa-solid fa-check'></i>)}</div>
          

        </div>

        <div className='w-3/4 flex flex-col justify-center items-center gap-4 mt-10'>
          <h3 className='text-lg font-semibold'>Theme</h3>

          {theme=="light" ? (
            <MdSunny className='w-6 h-6' onClick={()=>setTheme("dark")}/>
          ):(
            <FaMoon className='w-6 h-6 ' onClick={()=>setTheme("light")}/>
          )}

        </div>

        <i className='text-xl fa-x fa-solid mt-10' onClick={()=>setSettings(false)}></i>

      </div>
    )}

    {mobileMenu && (
      <div className='absolute xs:block lg:hidden w-full h-screen'>

        <nav className='w-1/3 h-full'>

        </nav>

      </div>
    )}
      
    </div>
    </div>
  )
}

export default Sidebar
