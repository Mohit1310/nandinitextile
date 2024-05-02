import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./styles/GoToTop.css";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const goToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 250;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => {window.removeEventListener("scroll", listenToScroll)};
  }, []);

  return (
    isVisible && (
      <div className="goToTop--btn" onClick={goToTop}>
        <FaArrowUp className="goToTop--btnIcon" />
      </div>
    )
  );
};

export default GoToTop;
