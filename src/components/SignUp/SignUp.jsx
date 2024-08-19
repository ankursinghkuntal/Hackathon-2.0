import React from 'react'
import { useState } from 'react'
import './SignUp.css'
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [user, setUser] = useState({
    name:"",
    // lastName:"",
    email:"",
    password:"",
    phoneNumber:"",
  });

  const handleInputChange = (e) => {
    const{ name,value } = e.target;
    setUser((prev)=>({...prev,[name]:value}))
  }

  const handleFormSubmit = (event)=>{
    event.preventDefault();
    console.log(user);
  }

  return (
    <>
    <div className="main">
      <div className="container">
     <form onSubmit={handleFormSubmit}>
      <div>
        <h1>Sign Up</h1>
        <br />
        <p className='para'><b>Please fill in this form to create an account.</b></p>
        <br />
       </div>
        <div className="in">
        <label htmlFor="name">
          <b>Name</b>
        </label>
        <input
         type="text" 
         name='name'
         placeholder='Enter name'
         required
         value={user.name}
         onChange={handleInputChange}
         className='input'
        />
        {/* <br />
        <label htmlFor="lastName">
          <b>Last Name</b>
        </label>
        <input
         type="text" 
         name='lastName'
         placeholder='Enter lastName'
         required
         value={user.lastName}
         onChange={handleInputChange}
        /> */}
        <br />
        <label htmlFor="email">
          <b>Email</b>
        </label>
        <input
        className='input'
         type="email" 
         name='email'
         placeholder='Enter email'
         required
         value={user.email}
         onChange={handleInputChange}
        />
        <br />
        <label htmlFor="password">
          <b>Password</b>
        </label>
        <input
        className='input'
         type="password" 
         name='password'
         placeholder='Enter password'
         required
         value={user.password}
         onChange={handleInputChange}
        />
        <br />
        <label htmlFor="pnone">
          <b>Pnone Number</b>
        </label>
        <input
        className='input'
         type="phone" 
         name='phoneNumber'
         placeholder='Enter pnonenumber'
         required
         value={user.pnone}
         onChange={handleInputChange}
        />
      
        <br />

      <div className="sub">
        <p>
          <p>By creating an account you agree to our</p>
          <a href="#" style={{color:"dodgerblue"}}> Terms and Conditions</a>
        </p>
        <button className='submit1'><b>Submit</b></button> 
      </div>
      <div className="bt12">
        <button className="btn12"><img src="src\components\SignUp\assets\google.png" className='google' alt="" />Google</button>
        <button className="btn12"><img src="src\components\SignUp\assets\apple.png" className='apple' alt="" />Apple</button>
      </div>
      </div>
     </form>
      </div>
     <section
     className='summary'
     style={{textAlign:"center", marginTop:"30px"}}
     >
      <p>
        Hello, my name is 
        <span><b>{user.firstName} {user.lastName}</b></span>
        , My email address is <span><b>{user.email}</b></span> and my phone number is 
        <span><b>{user.phoneNumber}</b></span>
      </p>
     </section>
     </div>
    </>
  )
}

export default SignUp