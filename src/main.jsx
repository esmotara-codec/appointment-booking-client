import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './Component/routes/routes.jsx'
import { AppointmentProvider } from './Component/ContextApi/AppointmentContext.jsx'
import { ToastContainer } from 'react-toastify'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AppointmentProvider>
    <RouterProvider router={router}>
     <App />
     <ToastContainer/>
   </RouterProvider>
   
   </AppointmentProvider>
  </StrictMode>,
)
