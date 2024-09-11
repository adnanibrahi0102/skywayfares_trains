import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { phoneNumber } from "../lib/number";

const slideContents = [
  {
    title: "Discover the Wonders of Nature",
    description: "Explore beautiful landscapes and serene environments.",
    buttonText: "(833 )368 6811",
  },
  {
    title: "Urban Adventures Await",
    description:
      "Experience the excitement of city life and cultural landmarks.",
    buttonText: "(833 )368 6811",
  },
  {
    title: "Relax and Unwind",
    description: "Find peace and tranquility in scenic retreats and getaways.",
    buttonText: "(833 )368 6811",
  },
];

const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.activeIndex);
  };

  return (
    <div className="relative w-full mx-auto">
      {/* Carousel */}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="mySwiper h-[350px]"
        onSlideChange={handleSlideChange}
      >
        <SwiperSlide>
          <img
            src="/hero-mobile2.jpg"
            alt="Slide 1"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/hero-mobile-3.jpg"
            alt="Slide 2"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/hero-mobile-4.jpg"
            alt="Slide 3"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>

      {/* Desktop Banner */}
      <div className="absolute left-0 top-1/3 transform -translate-y-1/2 -translate-x-[10%] w-[600px] h-[300px] bg-[#002436] bg-opacity-70 flex flex-col items-center justify-center text-center z-20 mx-6 md:mx-20 mt-12 mb-10 rounded-lg shadow-lg hidden md:flex">
        <h2 className="text-5xl font-mono text-white mb-2">
          {slideContents[currentSlide]?.title}
        </h2>
        <p className="text-xl font-thin text-white mb-4">
          {slideContents[currentSlide]?.description}
        </p>
        <a
          href={`tel:${phoneNumber.replace(/[^0-9]/g, "")}`}
          className="px-8 py-3 bg-[#1a5d7e] text-white font-semibold rounded-lg shadow-md hover:bg-[#1d6488] transition duration-300"
        >
          {slideContents[currentSlide]?.buttonText}
        </a>
      </div>

      {/* Mobile Banner */}
      <div className="block md:hidden mt-4 p-4  mx-4">
        <h2 className="text-2xl font-mono text-gray-500 mb-2">
          {slideContents[currentSlide]?.title}
        </h2>
        <p className="text-base font-thin text-black mb-4">
          {slideContents[currentSlide]?.description}
        </p>
        <a
          href={`tel:${phoneNumber.replace(/[^0-9]/g, "")}`}
          className="px-8 py-3 bg-[#1a5d7e] text-white font-semibold rounded-lg shadow-md hover:bg-[#1d6488] transition duration-300"
        >
          {slideContents[currentSlide]?.buttonText}
        </a>
      </div>
    </div>
  );
};

export default ImageCarousel;
