import React from "react";


export default function Navbar() {
    return (
        <nav className="sticky top-0 left-0 w-full h-[72px] px-6 flex justify-between items-center gap-6
                      bg-[hsla(var(--public-dark-bg-00-hsl),0.5)] backdrop-blur-[24px]
                      shadow-md z-[9999] transition-all duration-300">
            <div className="text-white font-bold text-xl">
                <img src="/images/logo/Innovent_logo_PM-removebg-preview.png" alt="Innovent Logo" className="h-auto w-32 cursor-pointer" />
            </div>


            <ul className="hidden md:flex gap-6 text-white font-medium">
                <li><a href="#" className="text-black hover:text-gray-600 transition">Accueil</a></li>
                <li><a href="#" className="text-black hover:text-gray-600 transition">Services</a></li>
                <li><a href="#" className="text-black hover:text-gray-600 transition">À propos</a></li>
                <li><a href="#" className="text-black hover:text-gray-600 transition">Contact</a></li>
            </ul>

            <button className="hidden md:block bg-[#377df4] text-white border border-white px-4 py-2 rounded-md text-base font-medium hover:bg-[#2c65c7] transition-colors duration-300">
                Sign in
            </button>

            <button className="md:hidden text-white text-2xl">☰</button>
        </nav>
    );
}
