import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className=' max-w-xl mx-auto '>
      <RouterProvider router={router}></RouterProvider>
    </div>
  </React.StrictMode>,
)
