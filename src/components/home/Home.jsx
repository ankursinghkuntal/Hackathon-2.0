import React from 'react'
import { Link } from "react-router-dom";
import Navbar from '../../atoms/Navbar/Navbar'
import "./Home.css"
import Button from '../DashBoard/smallcomponents/Button';

const Home = () => {
  return (
    <div className='home_main'>
        <Navbar/>
        <div className="home_container">ankur</div>
    </div>
  )
}

export default Home