import React from "react";
import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";

export const Contact = () => {
  return (
    <main className="max-w-3xl mx-auto mt-12 sm:mt-16 px-4 sm:px-6 lg:px-12 py-10 sm:py-12 bg-white rounded-xl shadow-lg font-sans">
      
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 sm:mb-10 text-center tracking-tight">
        Get in Touch
      </h1>

      {/* Description */}
      <p className="text-center text-gray-700 mb-8 sm:mb-12 text-base sm:text-lg max-w-xl mx-auto">
        Whether you have a project idea, a question, or want to connect
        professionally, feel free to reach out to me.
      </p>

      {/* Contact Cards */}
      <div className="flex flex-col gap-5 sm:gap-8 max-w-xl mx-auto">
        
        {/* Email */}
        <a
          href="mailto:sambisht884@gmail.com"
          className="flex items-start sm:items-center gap-4 sm:gap-5 bg-pink-50 hover:bg-pink-100 transition rounded-lg p-4 sm:p-5 shadow-sm"
        >
          <FaEnvelope className="text-pink-600 text-2xl sm:text-3xl flex-shrink-0" />
          <div>
            <p className="text-gray-900 font-semibold text-base sm:text-lg">
              Email
            </p>
            <p className="text-pink-600 text-sm sm:text-md font-medium break-all">
              sambisht884@gmail.com
            </p>
          </div>
        </a>

        {/* Phone */}
        <a
          href="tel:+9182799282294"
          className="flex items-start sm:items-center gap-4 sm:gap-5 bg-pink-50 hover:bg-pink-100 transition rounded-lg p-4 sm:p-5 shadow-sm"
        >
          <FaPhone className="text-pink-600 text-2xl sm:text-3xl flex-shrink-0" />
          <div>
            <p className="text-gray-900 font-semibold text-base sm:text-lg">
              Phone
            </p>
            <p className="text-pink-600 text-sm sm:text-md font-medium">
              +91 82799 282294
            </p>
          </div>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/sanjay-bisht-b2844b247"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start sm:items-center gap-4 sm:gap-5 bg-pink-50 hover:bg-pink-100 transition rounded-lg p-4 sm:p-5 shadow-sm"
        >
          <FaLinkedin className="text-pink-600 text-2xl sm:text-3xl flex-shrink-0" />
          <div>
            <p className="text-gray-900 font-semibold text-base sm:text-lg">
              LinkedIn
            </p>
            <p className="text-pink-600 text-sm sm:text-md font-medium break-all sm:truncate sm:max-w-xs">
              linkedin.com/in/sanjay-bisht-b2844b247
            </p>
          </div>
        </a>
      </div>

    
      <footer className="mt-12 sm:mt-16 text-center text-gray-400 text-xs sm:text-sm">
         {new Date().getFullYear()} Sanjay Bisht. All rights reserved.
      </footer>
    </main>
  );
};
