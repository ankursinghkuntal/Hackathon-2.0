import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:4000/login', user);

      if (response.status === 200) {
        alert('Login successful');
        navigate('/'); // Navigate to the home page after successful login
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 404) {
          alert('User not found. Please sign up.');
        } else if (error.response.status === 401) {
          alert('Invalid password');
        } else {
          alert('Error during login. Please try again later.');
        }
      } else {
        console.error('Login error:', error);
        alert('An unexpected error occurred.');
      }
    }
  };

  return (
    <div className="main1">
      <div className="container1">
        <form onSubmit={handleFormSubmit}>
          <h2>Log In</h2>
          <br />
          <p className='para1'><b>Already have an account? Log in here.</b></p>
          <br />
          <div className="in1">
            <label htmlFor="email"><b>Email</b></label>
            <input
              className='input1'
              type="email"
              name='email'
              placeholder='Enter email'
              required
              value={user.email}
              onChange={handleInputChange}
            />
            <br />
            <label htmlFor="password"><b>Password</b></label>
            <input
              className='input1'
              type="password"
              name='password'
              placeholder='Enter password'
              required
              value={user.password}
              onChange={handleInputChange}
            />
            <div className="row">
              <div className='check'>
                <input className='radio' type="checkbox" />
                <div className='remember'>Remember me </div>
              </div>
              <span className="span">Forgot password?</span>
            </div>
            <div className="sub1">
              <button className='submit11'><b>Submit</b></button> 
            </div>
            <div className="bt11">
              <button className="btn11">
                <img src="src/components/Login/assets/google.png" className='google' alt="" />
                Google
              </button>
              <button className="btn11">
                <img src="src/components/Login/assets/apple.png" className='apple' alt="" />
                Apple
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
