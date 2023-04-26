import React, { useState } from "react";
import Pic from '../../../assets/heros.jpg'
import Portfolio from "../Portfolio/Portfolio";
import WhatDo from "./WhatDo/WhatDo";
import { Typewriter } from "react-simple-typewriter";
import Contact from "../Contact/Contact";
import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";
import { useEffect } from "react";

const Home = () => {
   const [projects, setProjects] = useState([]);

   useEffect(() => {
     fetch("https://fakestoreapi.com/products")
       .then(res => res.json())
       .then(data => console.log(data))
   }, []);
  return (
    <div>
      <section>
        <div
          className="flex flex-col bg-slate-600 py-2 px-2 rounded-md fixed top-56 left-64 gap-4"
          data-aos="zoom-in"
        >
          <a
            href="https://www.facebook.com/rashariful"
            target="_blank"
            className="text-gray-400 hover:text-blue-500 active:text-gray-600 transition duration-100"
          >
            <FaFacebookSquare className="w-5 h-5"></FaFacebookSquare>
          </a>

          <a
            href="/#"
            target="_blank"
            className="text-gray-400 hover:text-blue-500 active:text-gray-600 transition duration-100"
          >
            <FaTwitterSquare className="w-5 h-5"></FaTwitterSquare>
          </a>

          <a
            href="https://www.linkedin.com/in/rahariful/"
            target="_blank"
            className="text-gray-400 hover:text-blue-500 active:text-gray-600 transition duration-100"
          >
            <FaLinkedin className="w-5 h-5"></FaLinkedin>
          </a>

          <a
            href="https://github.com/rashariful"
            target="_blank"
            className="text-gray-400 hover:text-blue-500 active:text-gray-600 transition duration-100"
          >
            <FaGithubSquare className="w-5 h-5"></FaGithubSquare>
          </a>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-6 mt-16 sm:gap-10 md:gap-16 items-center">
          <div
            className="border-[16px] border-gray-800 rounded-full shadow-2xl drop-shadow-2xl hover:scale-105 transition-all duration-700 "
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <img src={Pic} className="rounded-full w-72" alt="heros" />
          </div>

          <div data-aos="fade-left" data-aos-duration="2000" className="w-1/2">
            <h3 className="capitalize text-lg">
              <span style={{ color: "", fontWeight: "semibold" }}>
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={[
                    "MERN stack Developer",
                    "UI/UX Designer",
                    "Front-End Developer",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h3>

            <h1 className="text-[#f5f5f5] my-4 text-5xl font-bold capitalize">
              md shariful islam
            </h1>
            <p className="sm:text-start">
              Front End Developer, specializing in JavaScript, React JS, HTML5,
              CSS3, JavaScript ES6, Tailwind CSS, Bootstrap 5, React Bootstrap,
              Daisy UI, Flowbite, and Firebase Authentication. I also feel
              comfortable using Nodejs, Express.JS, creating REST API using
              MongoDB CRUD, and Secure API using JWT. I am also familiar with
              Tan Stack or React Query and AXIOS.
            </p>

            <div className="flex gap-6 mt-8">
              <a href="https://drive.google.com/file/d/1hM5kRSTlMTrEZ37xiTYLkDjhVyMD4NfA/view?usp=share_link.pdf" download target="_blank">
                <button className="btn btn-outline btn-primary rounded-full px-12 shadow-2xl drop-shadow-2xl">
                  Download CV
                </button>
              </a>

              <button className="btn btn-outline outline-base rounded-full px-12">
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-36" data-aos="fade-up" data-aos-duration="3000">
        <Portfolio />
      </section>
      <section data-aos="fade-up" data-aos-duration="3000">
        <WhatDo />
      </section>
      <section>{/* <Project /> */}</section>
      <section className="mt-36" data-aos="fade-up" data-aos-duration="3000">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
