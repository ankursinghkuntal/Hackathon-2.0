import React from 'react'

import Home from './components/home/Home'
import Contact from './components/Contact/Contact'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import DashBoard from './components/DashBoard/DashBoard'

import {createBrowserRouter,RouterProvider} from "react-router-dom";
import { Link } from "react-router-dom";
import './App.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <div><Home/></div>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/signup",
    element: <SignUp/>,
  },
  {
    path: "/dashboard",
    element: <DashBoard/>,
  },
]);


function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
