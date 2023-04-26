import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Recent = () => {
  // const [projects, setProjects] = useState([])
  // console.log(projects + "project files here");
  // useEffect(()=>{
  //   fetch("http://localhost:5000/api/project")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data.data));
  // },[])
  return (
    <div>
      <div className="py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="flex justify-between items-center gap-8 mb-4 sm:mb-8 md:mb-12">
            <div className="flex items-center gap-12">
              <h2 className=" text-2xl lg:text-3xl font-bold">Recent</h2>

              <p className="max-w-screen-sm hidden md:block">
                I recently completed those web application with react.js, you
                can see the live side and also you can visit my github profile
                with source code.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 xl:gap-8">
            {/* {projects?.map((project) =>  (
              
              <a
                href="https://used-car-museum.web.app/"
                className="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
              >
                <img
                  src={project.img}
                  loading="lazy"
                  alt="web information"
                  className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                />

                <div className="bg-gradient-to-t from-blue-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

                <div className="flex gap-5 text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">
                  <a href="https://used-car-museum.web.app/">
                    <button className="btn btn-sm btn-primary">
                      Live side
                    </button>
                  </a>
                  <a href="https://used-car-museum.web.app/">
                    <button className="btn btn-sm btn-warning">
                      Source code
                    </button>
                  </a>
                  <Link to={`/project-details/${project.id}`}>
                    details
                  </Link>
                </div>

              </a>
            ))} */}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Recent;
