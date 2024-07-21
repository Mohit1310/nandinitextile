import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import { Carousel } from 'react-responsive-carousel';
import './styles/ImageGallery.css';
import { imageArray } from './data/Images';

const ImageGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openCarousel = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeCarousel = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="image-gallery">
        {imageArray.map((image, index) => (
          <div
            key={index}
            className="image-item"
            onClick={() => openCarousel(index)}
          >
            <LazyLoadImage alt={`image-${index}`} src={image} effect="blur" />
          </div>
        ))}
      </div>

      {isOpen && (
        <div className={`modal ${isOpen ? 'show' : ''}`}>
          <button className="close-button" onClick={closeCarousel}>
            &times;
          </button>
          <div className="modal-content">
            <Carousel
              selectedItem={currentIndex}
              showThumbs={false}
              swipeable
              showIndicators={false}
              showStatus={false}
              onChange={(index) => setCurrentIndex(index)}
            >
              {imageArray.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`image-${index}`} />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
