import { useState } from 'react';
import './styles/Slider.css';
import './data/SliderData';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { SliderData } from './data/SliderData';

const Slider = () => {
  const [sliderDetail] = useState(SliderData);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <Carousel
        responsive={responsive}
        removeArrowOnDeviceType={[
          'tablet',
          'mobile',
          'desktop',
          'superLargeDesktop',
        ]}
        autoPlay={true}
        infinite={true}
        showDots
        swipeable
      >
        {sliderDetail.map((value, index) => {
          return (
            <div className="sliderImg" key={index}>
              <img src={value.image} alt="slider image" />
            </div>
          );
        })}
      </Carousel>
    </>
  );
};

export default Slider;
