import React, { useState } from 'react';
import axios from 'axios';
import './signUp.css';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // For the eye icons

const SignUp = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    phoneNumber: '',
  });
  const [passwordVisible, setPasswordVisible] = useState(false); // State to toggle password visibility

  const navigate = useNavigate(); // Initialize useNavigate

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const validateFormData = () => {
    const { username, email, password, phoneNumber } = user;

    if (!username || !email || !password || !phoneNumber) {
      alert('Please fill in all the fields');
      return false;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert('Please enter a valid email address');
      return false;
    }

    if (password.length < 6) {
      alert('Password must be at least 6 characters long');
      return false;
    }

    if (!/^\d{10}$/.test(phoneNumber)) {
      alert('Please enter a valid 10-digit phone number');
      return false;
    }

    return true;
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!validateFormData()) {
      return;
    }

    console.log('Submitting user data:', user);

    try {
      const response = await axios.post('http://localhost:3000/signup', user);

      if (response.status >= 200 && response.status < 300) {
        alert('User created successfully');
        setUser({
          username: '',
          email: '',
          password: '',
          phoneNumber: '',
        });
        navigate('/login'); // Navigate to the login page after successful signup
      } else {
        alert(`Error: ${response.data.message || 'Unknown error occurred'}`);
      }
    } catch (error) {
      if (error.response) {
        console.error('Error response data:', error.response.data);
        console.error('Error response status:', error.response.status);
        console.error('Error response headers:', error.response.headers);
        alert(`Error: ${error.response.data.message || 'Server error'}`);
      } else if (error.request) {
        console.error('Error request data:', error.request);
        alert('No response received from server');
      } else {
        console.error('Error message:', error.message);
        alert('An unexpected error occurred');
      }
    }
  };

  return (
    <div className="main">
      <div className="container">
        <form onSubmit={handleFormSubmit}>
          <div>
            <h1>Sign Up</h1>
            <br />
            <p className="para"><b>Please fill in this form to create an account.</b></p>
            <br />
          </div>
          <div className="in">
            <label htmlFor="username">
              <b>Username</b>
            </label>
            <input
              type="text"
              name="username"
              placeholder="Enter username"
              required
              value={user.username}
              onChange={handleInputChange}
              className="input"
            />
            <br />
            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Enter email"
              required
              value={user.email}
              onChange={handleInputChange}
            />
            <br />
            <label htmlFor="password">
              <b>Password</b>
            </label>
            <div className="password-container">
              <input
                className="input password-input"
                type={passwordVisible ? 'text' : 'password'}
                name="password"
                placeholder="Enter password"
                required
                value={user.password}
                onChange={handleInputChange}
              />
              <span
                className="password-toggle"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <br />
            <label htmlFor="phoneNumber">
              <b>Phone Number</b>
            </label>
            <input
              className="input"
              type="text"
              name="phoneNumber"
              placeholder="Enter phone number"
              required
              value={user.phoneNumber}
              onChange={handleInputChange}
            />
            <br />
            <div className="sub">
              <p>
                By creating an account you agree to our
                <a href="#" style={{ color: "dodgerblue" }}> Terms and Conditions</a>
              </p>
              <button className="submit1"><b>Submit</b></button>
            </div>
            <div className="bt12">
              <button className="btn12"><img src="src/components/SignUp/assets/google.png" className="google" alt="" />Google</button>
              <button className="btn12"><img src="src/components/SignUp/assets/apple.png" className="apple" alt="" />Apple</button>
            </div>
          </div>
        </form>
      </div>
      <section className="summary" style={{ textAlign: "center", marginTop: "30px" }}>
        <p>
          Hello, my name is <span><b>{user.username}</b></span>,
          My email address is <span><b>{user.email}</b></span> and my phone number is
          <span><b>{user.phoneNumber}</b></span>.
        </p>
      </section>
    </div>
  );
};

export default SignUp;
