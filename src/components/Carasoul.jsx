import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { phoneNumber } from "../lib/number";

const slideContents = [
  {
    title: "Amtrak Ticket Purchase",
    description: "Amtrak tickets can be purchased online through the Amtrak website or mobile app, at station kiosks, or by calling Amtrak's reservation line. You can also buy tickets through travel agents or at certain station ticket counters. It's recommended to book in advance, especially for popular routes or during peak travel times, as prices tend to increase closer to the departure date",
    buttonText: "(833 )368 6811",
  },
  {
    title: "Amtrak Buy Ticket on Train  ",
    description:
      "In most cases, it’s possible to purchase tickets directly on the train, but this is subject to availability and may incur additional fees. However, buying a ticket on board is generally discouraged as it can be more expensive than purchasing in advance. Additionally, some routes or trains may require a reservation, so it’s best to confirm availability before boarding without a ticket.",
    buttonText: "(833 )368 6811",
  },
  {
    title: "Is There a Fee to Change Amtrak Ticket? ",
    description: "Amtrak has a flexible ticket change policy depending on the type of fare purchased. If you have a Saver Fare, changes must be made within 24 hours of booking. For Value, Flexible, or Premium fares, you can change your ticket without any change fees up to the time of departure, although fare differences may apply if there is a price increase.",
    buttonText: "(833 )368 6811",
  },
  {
    title: "Amtrak Ticket Information",
    description:"Amtrak tickets typically include the passenger’s name, travel date, departure and arrival stations, and seat or class information. E-tickets are available for most routes and can be presented on a mobile device, but paper tickets are also an option. You can check Amtrak's website or app for detailed information regarding ticketing rules, travel policies, and refund options.",
    buttonText: "(833 )368 6811",
  },
  {
    title: "Amtrak Ticket Reservations  ",
    description:"Making an Amtrak reservation is straightforward and can be done online, through the mobile app, or by phone. Reservations are required on certain long-distance trains and for all sleeper car accommodations. When reserving, you can select your class of service (Coach, Business, First Class, or Sleeper) and see available travel dates. For the best deals, it’s recommended to book as early as possible.",
    buttonText: "(833 )368 6811",
  }
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
        <SwiperSlide>
          <img
            src="https://plus.unsplash.com/premium_photo-1679985958271-6535982b2460?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Slide 3"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1722942440739-eb79d3c8dcc0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Slide 3"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>

      {/* Desktop Banner */}
      <div className="absolute left-0 top-1/3 transform -translate-y-1/2 -translate-x-[10%] w-[600px] h-[300px] bg-[#002436] bg-opacity-70 flex flex-col items-center justify-center text-center z-20 mx-6 md:mx-20 mt-12 mb-10 rounded-lg shadow-lg hidden md:flex">
        <h2 className="text-3xl font-mono text-white mb-2">
          {slideContents[currentSlide]?.title}
        </h2>
        <p className="text-base font-thin text-white mb-4">
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
        <p className="text-base font-thin text-black mb-5">
          {slideContents[currentSlide]?.description}
        </p>
        <a
          href={`tel:${phoneNumber.replace(/[^0-9]/g, "")}`}
          className="px-8 py-3 bg-[#104e3c]  text-white font-semibold rounded-lg shadow-md hover:bg-[#18795d]  transition duration-300"
        >
          {slideContents[currentSlide]?.buttonText}
        </a>
      </div>
    </div>
  );
};

export default ImageCarousel;
