import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Slider = function () {
  const services = [
    {
      title: "Website Creation",
      description: "We specialize in designing and developing all types of websites, including personal portfolios, business websites, e-commerce platforms, blogs, and more. Our websites are fully responsive, modern, and tailored to meet your unique needs. Additionally, we offer optional hosting solutions, domain name registration, and ongoing support to ensure your website remains secure, fast, and up-to-date.",
      image: "/images/Website-Domain-names-bro.png",
    },
    {
      title: "Web Application Development",
      description:"Build scalable and feature-rich web applications that enhance your business efficiency. We specialize in creating robust web applications using modern JavaScript frameworks, ensuring optimal performance, security, and user experience.",
      image: "/images/Web-application-JavaScript-frameworks-amico.png",
    },
    {
      title: "Mobile App Development",
      description:"Create engaging and high-performance mobile applications for Android and iOS platforms. From user-friendly designs to seamless functionality, we build apps that align with your business goals and captivate your target audience.",
      image: "/images/Mobile-Online-world-bro.png",
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
              <div className="sm:ml-6 mt-6 sm:mt-0 w-1/2">
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
