import React from 'react'
import "./Navbar.css";
import Button from '../../smallcomponents/button/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="header">
        <a href="" className="logo">
          <img className='india' src="src\assets\India.png" alt="" />
        </a>
        <nav className="navbar">
          <Link to='/'><Button name={"Home"}/></Link>
          <Link to='/contact'><Button name={"Contact"}/></Link>
          <Link to='/login'><Button name={"Login"}/></Link>
          <Link to='/signup'><Button name={"Sign up"}/></Link>
          <Link to='/dashboard'><Button name={"Dashboard"}/></Link>
        </nav>
    </nav>
  )
}

export default Navbar