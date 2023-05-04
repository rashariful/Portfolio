import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Recent = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_ROOT}api/v1/project`)
      .then((res) => res.json())
      .then((data) => setProjects(data.data));
  }, []);

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
          
          {/* project start here */}
          <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
            <>
              {projects?.map((project) => (
                <>
                  <div className="card  bg-base-100 shadow-xl border border-gray-700 hover:border-cyan-500 transition-all duration-300">
                    <Link to={`/project-details/${project._id}`}>
                      <figure className="px-10 pt-10 transition duration-300 hover:scale-110 ">
                        <img
                          src={project?.thumbnail}
                          alt="Shoes"
                          className="rounded-xl"  
                        />
                      </figure>
                    </Link>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title capitalize">{project.title}</h2>
                      <p className="" >{project.description}</p>
                      <div className="card-actions">
                        <div className="flex flex-col md:flex-row gap-5 text-white pt-8 text-sm md:text-lg relative ml-4 md:ml-5 mb-3">
                          <a href={project.liveLink}>
                            <button className="btn btn-sm btn-primary">
                              Live side
                            </button>
                          </a>
                          <a href={project.serverLink}>
                            <button className="btn btn-sm btn-outline">
                              Source code
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recent;
