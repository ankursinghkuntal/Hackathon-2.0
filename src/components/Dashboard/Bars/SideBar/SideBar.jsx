import React from 'react';
import "./SideBar.css";
import Button from '../../smallcomponents/Button';
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className='side'>
        <div className="preside">
          <Link to='/'><Button name={"Home"}/></Link>
          <Link to='/contact'><Button name={"Contact"}/></Link>
          <Link to='/login'><Button name={"Login"}/></Link>
          <Link to='/signup'><Button name={"Sign up"}/></Link>
          <Link to='/dashboard'><Button name={"Dashboard"}/></Link>
        </div>
    </div>
  )
}

export default SideBar