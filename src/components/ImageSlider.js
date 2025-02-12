import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



// Import your local images
import image1 from '../assets/photo1.jpg';
import image2 from '../assets/photo2.jpg';
import image3 from '../assets/photo3.jpg';
import image4 from '../assets/photo4.jpg';

const images = [
  { id: 1, src: image1, alt: 'Red and Gray Industrial Machinery', sliderTitle: "" },
  { id: 2, src: image2, alt: 'Image 2', sliderTitle: "" },
  { id: 3, src: image3, alt: 'Image 3', sliderTitle: "" },
  { id: 4, src: image4, alt: 'Image 4', sliderTitle: "" },
];

function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="w-full max-w-4x2 mx-auto mt-6"> {/* Center and set max width */}
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id} className="relative w-full h-[70vh] flex items-center justify-center">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            {image.sliderTitle && (
              <p className="absolute bottom-5 bg-black bg-opacity-60 text-white text-lg px-4 py-2 rounded-md">
                {image.sliderTitle}
              </p>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageSlider;
