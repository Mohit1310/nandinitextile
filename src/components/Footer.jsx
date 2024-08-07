import React, { useState, useEffect } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { CiMail } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { useForm } from '@formspree/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/Footer.css';
import Logo from '../img/logo.png';

const Footer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [state, handleSubmit] = useForm('xnqkpjgl');

  useEffect(() => {
    if (state.succeeded && !showSuccessToast) {
      toast.success('Thanks for contacting!');
      setShowSuccessToast(true);
      setName('');
      setEmail('');
      setSubject('');
      setDescription('');
    }
  }, [state.succeeded, showSuccessToast]);

  return (
    <div className="footer" id="footer">
      <ToastContainer autoClose={2500} />
      <footer className="footer-container">
        <div className="column logo">
          {/* <Logo /> */}
          <img src={Logo} alt="logo" width={100} />
        </div>
        <div className="contact">
          <div className="location">
            <CiLocationOn fontSize={36} className="locationIcon" />
            <span>
              703, B-wing, Haripadam Residency, opp. Mahesh Nagar, Samrath
              Chowk, Solapur - 413 002, Maharashtra (India)
            </span>
          </div>
          <div className="email">
            <CiMail fontSize={20} />
            <span>nandinitextile@gmail.com</span>
          </div>
        </div>
        <div className="column nav">
          {/* Navigation */}
          <ul className="flex-list">
            <li className="list-item">
              <Link to="/" className="nav-links">
                Home
              </Link>
            </li>
            <li className="list-item">
              <Link to="/products" className="nav-links">
                Products
              </Link>
            </li>
            <li className="list-item">
              <Link to="/about" className="nav-links">
                About
              </Link>
            </li>
            <li className="list-item">
              <a href="#footer" className="nav-links">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="column form">
          {/* Contact Form */}
          <form onSubmit={handleSubmit}>
            <div className="nameAndEmail">
              <input
                type="text"
                name="Name"
                placeholder="Name"
                required
                autoComplete="off"
                value={name}
                onChange={handleNameChange}
              />
              <input
                type="email"
                name="Email"
                placeholder="demo@example.com"
                required
                autoComplete="off"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="subject">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                autoComplete="off"
                value={subject}
                onChange={handleSubjectChange}
              />
            </div>
            <div className="textareaAndBtn">
              <textarea
                placeholder="Description"
                name="Description"
                rows={5}
                style={{ resize: 'none' }}
                required
                autoComplete="off"
                value={description}
                onChange={handleDescriptionChange}
              />
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </footer>
      {/* <div className="copyright">
        <p>&copy; 2024 All rights reserved</p>
      </div> */}
    </div>
  );
};

export default Footer;
