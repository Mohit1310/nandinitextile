import React from "react";
import Slider from "../components/Slider";
import { SliderData } from "../components/data/SliderData";
import AboutSection from "../components/AboutSection";
import './Home.css';
import ProductSection from "../components/ProductSection";
import { ProductData } from "../components/data/ProductData";

const Home = () => {

  return (
    <div className="homePage">
      <Slider slides={SliderData} />

      {/* About Section */}
      <AboutSection />

      {/* Create Cards for products section i.e. towels */}
      <ProductSection cards={ProductData} />

    </div>
  );
};

export default Home;
