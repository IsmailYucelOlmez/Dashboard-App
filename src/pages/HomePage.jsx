import React,{ useContext } from 'react'
import { DashboardContext } from '../context/DashboardContext';
import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../../data/dummy.jsx';
import { GoDotFill } from "react-icons/go";
import SparkLine from '../components/charts/SparkLine.jsx';
import Stacked from '../components/charts/Stacked.jsx';

const HomePage = () => {

  const {themeColor}=useContext(DashboardContext);


  return (
    <div className='xs:my-10 lg:my-12 xs:mx-5 md:mx-8 lg:mx-10 '>
      
      <div className='bg-white w-full h-44 border border-black rounded-xl bg-no-repeat bg-hero-banner md:bg-cover bg-center flex justify-between items-center'>
        
        <div className='xs:mx-2 lg:mx-7 text-center'>
          <h3 className='xs:text-sm lg:text-base'>Earnings</h3>
          <p className='lg:text-lg font-semibold'>$63,448.78</p>
          <button className={`mt-3 xs:p-1.5 lg:p-2 xs:text-sm lg:text-base rounded-lg text-white bg-[${themeColor}]`}>Download</button>

        </div>

        <div className='mx-7 '>
          <div className={`w-9 h-9 rounded-full bg-[${themeColor}]`}>

          </div>

        </div>

      </div>

      <div className='w-full bg-white xs:my-8 lg:my-10 lg:h-44 border border-black rounded-xl flex justify-between xs:flex-wrap md:flex-nowrap'>

      {earningData.map((element)=>(

        <div key={element.title} className=" h-44 md:w-56 p-4 xs:pt-7 lg:pt-9 rounded-2xl flex flex-col items-center">

          <button style={{ color: element.iconColor, backgroundColor: element.iconBg }} className="text-2xl rounded-full p-4 ">{element.icon}</button>

          <p className="mt-3">
            <span className="text-lg font-semibold">{element.amount} </span>
            <span className={`text-sm text-${element.pcColor} ml-2`}> {element.percentage} </span>
          </p>

          <p className="text-sm  mt-1">{element.title}</p>

        </div>
  
      ))}

      </div>
      

      <div className='w-full lg:px-10'>

        <div className='flex justify-between items-center'>

          <h5 className='font-semibold text-xl'>Revenue Updates</h5>
          
          <div className='flex xs:flex-col md:flex-row gap-3'>
            <p className="flex items-center gap-2 text-gray-600 ">
              <span>
                <GoDotFill />
              </span>
              <span>Expense</span>
            </p>
            <p className="flex items-center gap-2 text-green-400 ">
              <span>
                <GoDotFill />
              </span>
              <span>Budget</span>
            </p>

          </div>

        </div>

        <div className='flex xs:flex-col xs:items-center md:flex-row justify-around xs:mt-10 md:mt-6 lg:mt-10'>

          <div>

            <div>
              <p>
                <span className="text-2xl font-semibold">$93,438</span>
                <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs"> 23% </span>
              </p>
              <p className="text-gray-500 mt-1">Budget</p>
            </div>

            <div className="my-8">

              <p className="text-2xl font-semibold">$48,487</p>
              <p className="text-gray-500 mt-1">Expense</p>

            </div>

            <SparkLine currentColor={themeColor} id="line-sparkLine" type="Line" height="80px" width="250px" data={SparklineAreaData} color={themeColor}/>

            <button className={` mt-8 p-2 bg-[${themeColor}] text-white rounded-lg`}>Download Report</button>  
            

          </div>

          <div className='xs:mt-16 lg:mt-0'>
            
            <Stacked width="320px" height="360px" />

          </div>

        </div>
      
      </div>

    </div>
  )
}

export default HomePage
