import React from "react";
import Contact from "./Components/Contact";
import Slider from "./Components/Slider_LandingPage";
import Footer from "./Partials/Footer";
import Navbar from "./Partials/Navbar";

const Welcome = function () {
    return (
        <>
        <Navbar/>
            <div className="min-h-screen bg-gray-100 flex items-center justify-center py-16 px-4 sm:px-6 md:px-12">
                <div className="text-center max-w-4xl mx-auto">
                    <h1
                        className="text-5xl font-bold text-gray-900 mb-8 leading-tight md:text-6xl"
                        data-aos="zoom-y-out"
                        data-aos-delay={150}
                    >
                        Your trusted partner in creating <br className="hidden md:block" />
                        innovative web and mobile solutions
                    </h1>
                    <p
                        className="text-lg text-gray-600 mb-10"
                        data-aos="zoom-y-out"
                        data-aos-delay={300}
                    >
                        We specialize in building modern websites, apps, and digital solutions to help businesses thrive in the digital world.
                    </p>
                    <div className="flex flex-col sm:flex-row sm:justify-center sm:gap-4">
                        <a
                            className="btn bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:mb-0"
                            href="#0"
                            data-aos="zoom-y-out"
                            data-aos-delay={450}
                        >
                            Start Free Trial{" "}
                            <span className="ml-2 tracking-wide transform group-hover:translate-x-1 transition-all">
                                -&gt;
                            </span>
                        </a>
                        <a
                            className="btn bg-white text-gray-800 py-3 px-6 rounded-lg shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 sm:ml-4"
                            href="#0"
                            data-aos="zoom-y-out"
                            data-aos-delay={600}
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
            <div className="mb-4">
                {/* slider */}
                <Slider/>
            </div>
            {/* contact section */}
            <Contact/>
            
            <Footer />
        </>
    )
}
export default Welcome;
