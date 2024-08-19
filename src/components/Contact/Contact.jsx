import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"; // Importing Facebook icon and others
import "./Contact.css"; // Assuming the CSS is the same as before
import { Link } from "react-router-dom";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleFocus = (e) => {
    const parent = e.target.parentNode;
    parent.classList.add("focus");
  };

  const handleBlur = (e) => {
    const parent = e.target.parentNode;
    if (e.target.value === "") {
      parent.classList.remove("focus");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleFormSubmit = (event)=>{
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div className="container123">
      <span className="big-circle"></span>
      <img src="img/shape.png" className="square" alt="" />
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum adipisci recusandae praesentium dicta!
          </p>

          <div className="info">
            <div className="information">
              <img src="src\components\Contact\assets\location.png" className="icon1" alt="werew" />
              <p>92 Cherry Drive Uniondale, NY 11553</p>
            </div>
            <div className="information">
              <img src="src\components\Contact\assets\email.png" className="icon1" alt="ffrw" />
              <p>lorem@ipsum.com</p>
            </div>
            <div className="information">
              <img src="src\components\Contact\assets\phone.png" className="icon1" alt="ewr" />
              <p>123-456-789</p>
            </div>
          </div>

          <div className="social-media">
            <p>Connect with us :</p>
            <div className="social-icons">
              <a href="#">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form onSubmit={handleFormSubmit} className="frm1" autoComplete="off">
            <h3 className="title">Contact us</h3>
            <div className="input-container123">
              <input
                type="text"
                name="name"
                className="input123"
                value={formData.name}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <label>Username</label>
              <span>Username</span>
            </div>
            <div className="input-container123">
              <input
                type="email"
                name="email"
                className="input123"
                value={formData.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <label>Email</label>
              <span>Email</span>
            </div>
            <div className="input-container123">
              <input
                type="tel"
                name="phone"
                className="input123"
                value={formData.phone}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <label>Phone</label>
              <span>Phone</span>
            </div>
            <div className="input-container123 textarea">
              <textarea
                name="message"
                className="input123"
                value={formData.message}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              ></textarea>
              <label>Message</label>
              <span>Message</span>
            </div>
            <button className="btn111">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
