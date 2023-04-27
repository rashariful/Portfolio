import React from "react";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" pt-4 sm:pt-10 lg:pt-12">
      <footer className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div className="flex flex-col items-center pt-6">
          <nav className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 md:gap-6 mb-4">
            <a
              href="/#"
              className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
            >
              About
            </a>
            <a
              href="/#"
              className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
            >
              Investor Relations
            </a>
            <a
              href="/#"
              className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
            >
              Jobs
            </a>
            <a
              href="/#"
              className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
            >
              Press
            </a>
            <a
              href="/#"
              className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
            >
              Blog
            </a>
          </nav>

          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/rashariful"
              target="_blank"
              className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
            >
              <FaFacebookSquare className="w-5 h-5"></FaFacebookSquare>
            </a>

            <a
              href="/#"
              target="_blank"
              className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
            >
              <FaTwitterSquare className="w-5 h-5"></FaTwitterSquare>
            </a>

            <a
              href="https://www.linkedin.com/in/rahariful/"
              target="_blank"
              className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
            >
              <FaLinkedin className="w-5 h-5"></FaLinkedin>
            </a>

            <a
              href="https://github.com/rashariful"
              target="_blank"
              className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
            >
              <FaGithubSquare className="w-5 h-5"></FaGithubSquare>
            </a>
          </div>
        </div>

        <div className="text-gray-400 text-sm text-center py-8">
          © 2023 - Present Md Shariful Islam. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
