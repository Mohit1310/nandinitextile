import React, { useState, useEffect } from "react";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
// import { Logo } from "../../public/nandini-logo-1.png";
import { Link } from "react-router-dom";
import { useForm } from "@formspree/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/Footer.css";
import Logo from "../svg/logo";

const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

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
  const [state, handleSubmit] = useForm("xnqkpjgl");

  useEffect(() => {
    if (state.succeeded && !showSuccessToast) {
      toast.success("Thanks for contacting!");
      setShowSuccessToast(true);
      setName("");
      setEmail("");
      setSubject("");
      setDescription("");
    }
  }, [state.succeeded, showSuccessToast]);

  return (
    <div className="footer" id="footer">
      <ToastContainer autoClose={2500} />
      <footer className="footer-container">
        <div className="column logo">
          <Logo />
        </div>
        <div className="column contact">
          <div className="location">
            <CiLocationOn />
            <span>
              703, B-wing, Haripadam Residency, opp. Mahesh Nagar, Samrath
              Chowk, <br /> Solapur - 413 002, Maharashtra (INDIA)
            </span>
          </div>
          <div className="email">
            <AiOutlineMail />
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
              <a href="#products" className="nav-links">
                Products
              </a>
            </li>
            <li className="list-item">
              <a href="#aboutUs" className="nav-links">
                About Us
              </a>
            </li>
            <li className="list-item">
              <a href="#contactUs" className="nav-links">
                Contact Us
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
                style={{ resize: "none" }}
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
      <div className="copyright">
        <p>&copy; 2023 All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
