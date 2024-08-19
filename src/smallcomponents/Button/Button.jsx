import React from 'react'
import "./Button.css";

function Button({name}) {
  return (
    <div  className='btn'>
           {name}
    </div>
  )
}

export default Button



