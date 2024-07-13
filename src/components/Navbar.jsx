import "./styles/Navbar.css";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
// import Logo from "../svg/logo";
import Logo from "../img/logo.png";

const Navbar = () => {
  const [Mobile, setMobile] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [navbarTop, setNavbarTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isVisible = prevScrollPos > currentScrollPos;

      if (isVisible) {
        setNavbarTop(0);
      } else {
        setNavbarTop(-70);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const toggleMobileMenu = () => {
    setMobile(!Mobile);
  };

  const closeMobileMenu = () => {
    setMobile(false);
  };

  return (
    <nav className="navBar" style={{ top: `${navbarTop}px` }}>
      <div className="navLogo">
        {/* <Logo /> */}
        <img src={Logo} alt="logo" width={100} />
      </div>
      <div onClick={toggleMobileMenu} className="menu-icons">
        {Mobile ? (
          <FaTimes className="menu-icon" />
        ) : (
          <FaBars className="menu-icon" />
        )}
      </div>
      <ul
        className={Mobile ? "nav-menu active" : "nav-menu"}
        onClick={closeMobileMenu}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="#products">Products</a>
        </li>
        <li>
          <a href="#aboutUs">About Us</a>
        </li>
        <li>
          <a href="#footer">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
