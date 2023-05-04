import React from "react";
import "./About.css";
import Img from "../../../assets/img-3.png";

const About = () => {
  return (
    <section id="about">
      <div className="about flex flex-col container justify-center gap-24 sm:flex-row items-center">
        <div className="col-left">
          <div className="about-img">
            <img src={Img} alt="img" />
          </div>
        </div>
        <div className="md:w-1/2 sm:w-full rounded-md">
          <h1 className="font-semibold mb-5 text-2xl">
            About <span>me</span>
          </h1>
          <h2 className="uppercase mb-12 md:text-4xl sm:text-lg">mern stack developer</h2>
          <p>
           I have 5 years of strong experience as MERN developer with solid
            understanding of back-end technologies, MVC frameworks, Restful web
            services and Data Base designing. Analyzed business requirements to
            translate into technical flow and developed web application using
            Node.js, Express, MongoDB, and React ( Redux, Saga, and Hooks )
          </p>
          <br />
          <p>
            Front End Developer, specializing in JavaScript, React JS, HTML5,
            CSS3, JavaScript ES6, Tailwind CSS, Bootstrap 5, React Bootstrap,
            Daisy UI, Flowbite, and Firebase Authentication. I also feel
            comfortable using Nodejs, Express.JS, creating REST API using
            MongoDB CRUD, and Secure API using JWT. I am also familiar with Tan
            Stack or React Query and AXIOS.
          </p>
          <a href="#" className="mb-10">
            <button className="btn btn-primary mt-10">Download Resume</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
