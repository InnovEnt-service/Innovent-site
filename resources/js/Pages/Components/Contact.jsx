import React from "react";

const Contact = function () {
    return (
        <div className="bg-white py-16 px-8 md:px-32 text-center" id="contact">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Contact Us
            </h2>
            <p className="text-lg text-gray-600 mb-12">
                Have a question or want to work with us? Feel free to send us a message.
            </p>
            <form className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                    type="text"
                    placeholder="Full Name"
                    className="col-span-1 md:col-span-2 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="email"
                    placeholder="Email Address"
                    className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    placeholder="Subject"
                    className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                    placeholder="Your Message"
                    rows="5"
                    className="col-span-1 md:col-span-2 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <div className="col-span-1 md:col-span-2">
                    <button
                        type="submit"
                        className="w-full py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Contact;

