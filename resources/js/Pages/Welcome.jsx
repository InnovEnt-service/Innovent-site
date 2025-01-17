import React from "react";
import Footer from "./Partials/Footer";
import Navbar from "./Partials/Navbar";

const Welcome = function(){
    return(
        <>
        <Navbar />
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <div className="bg-white p-8 rounded-lg shadow-lg w-96 text-center">
                    <h1 className="text-4xl font-bold text-gray-800">Welcome to Laravel with React!</h1>
                    <p className="mt-4 text-lg text-gray-600">
                        This is your new React-based welcome page.
                    </p>
                    <div className="mt-8 p-4 bg-indigo-500 text-white rounded-md shadow-md">
                        <h2 className="text-2xl font-semibold">Special Offer!</h2>
                        <p className="mt-2 text-md">Get started with Laravel and React today and enjoy the best development experience.</p>
                    </div>
                </div>
            </div>
        <Footer/>
        </>
    )
}
export default Welcome;
