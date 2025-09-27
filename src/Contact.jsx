
import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';

export const Contact = () => {
  return (
    <main className="max-w-3xl mx-auto p-12 bg-white rounded-xl shadow-lg mt-16 font-sans">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-10 text-center tracking-tight">
        Get in Touch
      </h1>

      <p className="text-center text-gray-700 mb-12 text-lg max-w-xl mx-auto">
        Whether you have a project idea, a question, or want to connect professionally, feel free to reach out to me.
      </p>

      <div className="flex flex-col space-y-8 max-w-xl mx-auto">
        {/* Email */}
        <a
          href="mailto:sambisht884@gmail.com"
          className="flex items-center space-x-5 bg-pink-50 hover:bg-pink-100 transition rounded-lg p-5 shadow-sm"
        >
          <FaEnvelope className="text-pink-600 text-3xl" />
          <div>
            <p className="text-gray-900 font-semibold text-lg">Email</p>
            <p className="text-pink-600 text-md font-medium">sambisht884@gmail.com</p>
          </div>
        </a>

        {/* Phone */}
        <a
          href="tel:+9182799282294"
          className="flex items-center space-x-5 bg-pink-50 hover:bg-pink-100 transition rounded-lg p-5 shadow-sm"
        >
          <FaPhone className="text-pink-600 text-3xl" />
          <div>
            <p className="text-gray-900 font-semibold text-lg">Phone</p>
            <p className="text-pink-600 text-md font-medium">+91 82799 282294</p>
          </div>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/sanjay-bisht-b2844b247"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-5 bg-pink-50 hover:bg-pink-100 transition rounded-lg p-5 shadow-sm"
        >
          <FaLinkedin className="text-pink-600 text-3xl" />
          <div>
            <p className="text-gray-900 font-semibold text-lg">LinkedIn</p>
            <p className="text-pink-600 text-md font-medium truncate max-w-xs">
              linkedin.com/in/sanjay-bisht-b2844b247
            </p>
          </div>
        </a>
      </div>

      <footer className="mt-16 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Sanjay Bisht. All rights reserved.
      </footer>
    </main>
  );
};
