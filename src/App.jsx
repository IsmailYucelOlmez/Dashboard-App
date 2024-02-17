import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CustomerPage from './pages/CustomerPage'
import PersonelPage from './pages/PersonelPage'
import ProductPage from './pages/ProductPage'
import OrderPage from './pages/OrderPage'
import CalendarPage from './pages/CalendarPage'
import KanbanPage from './pages/KanbanPage'
import LineGraphicPage from './pages/LineGraphicPage'
import BarGraphicPage from './pages/BarGraphicPage'
import PieGraphicPage from './pages/PieGraphicPage'
import AreaGraphicPage from './pages/AreaGraphicPage'
import FinancialChartPage from './pages/FinancialChartPage'
import PyramidChartPage from './pages/PyramidChartPage'
import StackedChartPage from './pages/StackedChartPage'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'


function App() {

  //white logo (react icon avaliable)
  //dropdown
  //product page
  //dark theme
  //local storage for dark theme and theme color 
  //responsive design  
  //code review

  return (
    <div className=" flex ">

     

      <Sidebar/>

      <div className='w-4/5 bg-[#FAF7FF] h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-slate-400 scrollbar-track-white scrollbar-thumb-rounded-xl'>

        <Navbar/>

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
        <Route path="/areachart" element={<AreaGraphicPage/>}/>
        <Route path="/financialchart" element={<FinancialChartPage/>}/>
        <Route path="/pyramidchart" element={<PyramidChartPage/>}/>
        <Route path="/stackedchart" element={<StackedChartPage/>}/>


      </Routes>

        <Footer/>
      
      </div>

     

    </div>
  )
}

export default App
