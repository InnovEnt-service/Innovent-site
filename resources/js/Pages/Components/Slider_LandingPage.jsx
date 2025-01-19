import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Slider = function () {
  const services = [
    {
      title: "Website Creation",
      description: "We design and develop responsive and modern websites.",
      image: "path/to/website-image.jpg", // Replace with your image path
    },
    {
      title: "Web Application Development",
      description: "Build scalable and feature-rich web applications.",
      image: "path/to/webapp-image.jpg", // Replace with your image path
    },
    {
      title: "Mobile App Development",
      description: "Create engaging mobile applications for Android and iOS.",
      image: "path/to/mobileapp-image.jpg", // Replace with your image path
    },
  ];

  return (
    <div className="slider-container mt-16">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        spaceBetween={30}
        slidesPerView={1}
        className="w-full max-w-5xl mx-auto"
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center text-center sm:flex-row sm:text-left">
              <img
                src={service.image}
                alt={service.title}
                className="w-1/2 sm:w-1/3 rounded-lg shadow-md"
              />
              <div className="sm:ml-6 mt-6 sm:mt-0">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
