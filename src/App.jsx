import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CustomerPage from './pages/CustomerPage'
import PersonelPage from './pages/PersonelPage'
import ProductPage from './pages/ProductPage'
import OrderPage from './pages/OrderPage'
import CalendarPage from './pages/CalendarPage'
import ContactPage from './pages/ContactPage'
import KanbanPage from './pages/KanbanPage'
import FAQPage from './pages/FAQPage'
import LineGraphicPage from './pages/LineGraphicPage'
import BarGraphicPage from './pages/BarGraphicPage'
import PieGraphicPage from './pages/PieGraphicPage'
import AreaGraphicPage from './pages/AreaGraphicPage'
import FinancialChartPage from './pages/FinancialChartPage'
import PyramidChartPage from './pages/PyramidChartPage'
import StackedChartPage from './pages/StackedChartPage'


function App() {

  //google font
  //color palette
  //logo and other icons
  //redux state
  //<Route path="/product/:id" element={""}/>  product detail page ?

  return (
    <div className="flex">

     

      <Navbar/>

      <div className='w-4/5 bg-[#FAF7FF]'>
      <Routes>

        <Route path="/" element={<HomePage/>}/>
        <Route path="/customer" element={<CustomerPage/>}/>
        <Route path="/personel" element={<PersonelPage/>}/>
        <Route path="/product" element={<ProductPage/>}/>
        <Route path="/order" element={<OrderPage/>}/>
        <Route path="/calendar" element={<CalendarPage/>}/>
        <Route path="/linegraphic" element={<LineGraphicPage/>}/>
        <Route path="/piegraphic" element={<PieGraphicPage/>}/>
        <Route path="/bargraphic" element={<BarGraphicPage/>}/>
        <Route path="/kanban" element={<KanbanPage/>}/>
        <Route path="/faq" element={<FAQPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/areachart" element={<AreaGraphicPage/>}/>
        <Route path="/financialchart" element={<FinancialChartPage/>}/>
        <Route path="/pyramidchart" element={<PyramidChartPage/>}/>
        <Route path="/stackedchart" element={<StackedChartPage/>}/>


      </Routes>
      
      </div>

     

    </div>
  )
}

export default App
