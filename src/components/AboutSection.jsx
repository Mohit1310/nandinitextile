import React from "react";
import "./styles/AboutSection.css";
import AboutUs from "../img/aboutUs.png";

const AboutSection = () => {
  return (
    <div className="aboutSection" id="aboutUs">
      <div className="aboutContent">
        {/* <div className="aboutImg"> */}
        <img src={AboutUs} alt="Towel" />
        {/* </div> */}
        <div className="aboutWriting">
          <h1>About us</h1>
          <p>
            Nandini Textiles is a leading manufacturer and exporter of a wide
            range of towels, catering to diverse needs. With expertise in
            producing high-quality cabana, beach, solid, kitchen, and other
            types of towels, we offer exceptional products that exceed customer
            expectations. Our towels are crafted using premium materials,
            ensuring durability and superior absorption. With a focus on
            innovation and design, Nandini Textiles stays at the forefront of
            the industry, constantly introducing new patterns and styles.
            Committed to customer satisfaction, we provide efficient export
            services, delivering our towels to clients worldwide. Experience the
            luxury and reliability of Nandini Textiles' towels, the perfect
            blend of comfort and functionality.
          </p>
          {/* <button>Read More</button> */}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
