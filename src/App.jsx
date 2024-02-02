import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'

function App() {

  //google font
  //color palette
  //logo and other icons
  //redux state

  return (
    <>

     <div className='w-1/3'>

        <Navbar/>

     </div>

     <div className='w-2/3'>

      <Routes>

        <Route to="/" element={<HomePage/>}/>
        <Route to="/customer" element={<HomePage/>}/>
        <Route to="/personel" element={<HomePage/>}/>
        <Route to="/product" element={<HomePage/>}/>
        <Route to="/order" element={<HomePage/>}/>
        <Route to="/calendar" element={<HomePage/>}/>
        <Route to="/line-graphic" element={<HomePage/>}/>
        <Route to="/pie-graphic" element={<HomePage/>}/>
        <Route to="/bar-graphic" element={<HomePage/>}/>
        <Route to="/kanban" element={<HomePage/>}/>
        <Route to="/faq" element={<HomePage/>}/>
        <Route to="/contact" element={<HomePage/>}/>
        <Route to="/product/:id" element={<HomePage/>}/> {{/* product detail page ?*/}}

      </Routes>

     </div>

    </>
  )
}

export default App
