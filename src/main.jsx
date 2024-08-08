import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom'
import Header from './Components/Header/Header.jsx'
import AboutMe from './Pages/AboutMe.jsx'
import Education from './Pages/Education.jsx'
import Contact from './Pages/Contact.jsx'
import Footer from './Components/Footer/Footer.jsx'




const Maina=()=>{
  return(
    <>
    <Header/>

    <Outlet/>
    <Footer/>

    </>
  )
}
const routera=createBrowserRouter([
  {
    path:'/',
    element:<Maina/>,
    children:[
   {
    path:'/',
    element:<AboutMe/>

   },
   {
    path:'/AboutMe',
    element:<AboutMe/>

   },
   {
    path:'/Education',
    element:<Education/>
   },{
    path:'/Contact',
    element:<Contact/>
   },
 
 
    ]
  }
])
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={routera}/>)
