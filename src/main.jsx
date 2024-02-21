import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { DashboardContextProvider } from './context/DashboardContext.jsx'
import { registerLicense } from '@syncfusion/ej2-base';


registerLicense('Ngo9BigBOggjHTQxAR8/V1NAaF1cWWhIfEx1RHxQdld5ZFRHallYTnNWUj0eQnxTdEFjW35ccH1XT2NdUEJxVw==');

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>

    <DashboardContextProvider>
      <App />
    </DashboardContextProvider>
    
  </BrowserRouter>
  
)
