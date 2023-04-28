import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Popular = () => {
  const [projects, setProjects] = useState([]);
  console.log(projects);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_ROOT}api/v1/project`)
      .then((res) => res.json())
      // .then((data) => setProjects(data.data));
  }, []);
  return (
    <div>
      <div className="py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="flex flex-col justify-center text-center gap-4 mb-4 sm:mb-8 md:mb-12">
            <h2 className=" text-2xl lg:text-3xl font-bold text-center">
              Popular
            </h2>

            <p className="max-w-screen-sm mx-auto">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text.
            </p>
          </div>
            {/* project start here */}
            <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
            <>
              {projects?.map((project) => (
                <>
                  <div className="card  bg-base-100 shadow-xl border border-cyan-500">
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
                      <h2 className="card-title">{project.title}</h2>
                      <p>{project.description}</p>
                      <div className="card-actions">
                        <div className="flex gap-5 text-white pt-8 text-sm md:text-lg relative ml-4 md:ml-5 mb-3">
                          <a href={project.liveLink}>
                            <button className="btn btn-sm btn-primary">
                              Live side
                            </button>
                          </a>
                          <a href={project.serverLink}>
                            <button className="btn btn-sm btn-warning">
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

export default Popular;
