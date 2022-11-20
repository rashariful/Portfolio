import React from "react";
import { Link } from "react-router-dom";

const Resume = () => {
  return (
    <div>
      <section className="w-1/2 mx-auto">
        <div className="gap-12 mt-32">
          <div className="flex-1">
            <div>
              <div className="mb-10">
                <div>
                  <h3 className="text-2xl my-3 font-bold">Skills</h3>
                </div>
                <div className="my-5 bg-slate-800 hover:bg-slate-900 shadow-inner dropdown-bottom drop-shadow-2xl rounded-lg  hover:scale-105 transition-all duration-700">
                  <p className="border-t border-b border-spacing-y-1.5 rounded-lg border-primary drop-shadow-md py-5 px-2">
                    <span className="font-bold text-lg">Comfortable: </span>
                    <br />
                    <span className="text-gray-500">
                      Javascript, ES6, React, React Router,Tailwind CSS, HTML,
                      CSS, Web Design.
                    </span>
                  </p>
                </div>
                <div className="my-5 bg-slate-800 hover:bg-slate-900 shadow-inner dropdown-bottom drop-shadow-2xl rounded-lg  hover:scale-105 transition-all duration-700">
                  <p className="border-t border-b border-spacing-y-1.5 rounded-lg border-primary drop-shadow-md py-5 px-2">
                    <span className="font-bold text-lg">Familiar: </span> <br />
                    <span className="text-gray-500">
                      Node.js, MongoDB, Express.js, React Bootstrap, Wordpress,
                      Elementor
                    </span>
                  </p>
                </div>
                <div className="my-5 bg-slate-800 hover:bg-slate-900 shadow-inner dropdown-bottom drop-shadow-2xl rounded-lg  hover:scale-105 transition-all duration-700">
                  <p className="border-t border-b border-spacing-y-1.5 rounded-lg border-primary drop-shadow-md py-5 px-2">
                    <span className="font-bold text-lg">Tools: </span> <br />
                    <span className="text-gray-500">
                      Git, VS Code, Chrome Dev Tools, Digitalocean, Godaddy,
                      Netlify, Vercel, Firebase, Figma, Photoshop, Illustrator,
                      XD.
                    </span>
                  </p>
                </div>
              </div>
              {/* Project start here */}
              <div className="mb-10">
                <div>
                  <h3 className="text-2xl my-3 font-bold">Project</h3>
                </div>
                <div className="my-5 bg-slate-800 hover:bg-slate-900 shadow-inner dropdown-bottom drop-shadow-2xl rounded-lg  hover:scale-105 transition-all duration-700">
                  <p className="border-t border-b border-spacing-y-1.5 rounded-lg border-primary drop-shadow-md py-5 px-2">
                    <span className="font-bold text-lg">Explore The World</span>
                    <br />
                    <span className="text-gray-500">
                      <ul>
                        <li className="list-disc ml-6">
                          for Servers using Express in node.js
                        </li>
                        <li className="list-disc ml-6">
                          Load all services by API through Dynamically
                        </li>
                        <li className="list-disc ml-6">
                          Users can add Services from the dashboard & also
                          update, delete his
                        </li>
                        <li className="list-disc ml-6">
                          Reviews and they can see all reviews in a user
                          profiles
                        </li>
                        <li className="list-disc ml-6 text-primary">
                          <a href="https://the-edu-planner.web.app/">
                            Live side ac
                          </a>
                        </li>
                        <li className="list-disc ml-6 text-primary">
                          <Link to="https://github.com/Porgramming-Hero-web-course/b6a11-service-review-client-side-rashariful">
                            Source code
                          </Link>
                        </li>
                      </ul>
                    </span>
                  </p>
                </div>
                <div className="my-5 bg-slate-800 hover:bg-slate-900 shadow-inner dropdown-bottom drop-shadow-2xl rounded-lg  hover:scale-105 transition-all duration-700">
                  <p className="border-t border-b border-spacing-y-1.5 rounded-lg border-primary drop-shadow-md py-5 px-2">
                    <span className="font-bold text-lg">The Edu Planner </span>{" "}
                    <br />
                    <span className="text-gray-500">
                      <ul>
                        <li className="list-disc ml-6">
                          Build by React.js and Tailwind CSS
                        </li>
                        <li className="list-disc ml-6">
                          Server side Express.js with node.js
                        </li>
                        <li className="list-disc ml-6">
                          Load courses by dynamic API from server side
                        </li>

                        <li className="list-disc ml-6 text-primary">
                          <Link to="https://the-edu-planner.web.app/">
                            Live side
                          </Link>
                        </li>
                        <li className="list-disc ml-6 text-primary">
                          <Link to="https://github.com/Porgramming-Hero-web-course/b6a11-service-review-client-side-rashariful">
                            Source code
                          </Link>
                        </li>
                      </ul>
                    </span>
                  </p>
                </div>
                <div className="my-5 bg-slate-800 hover:bg-slate-900 shadow-inner dropdown-bottom drop-shadow-2xl rounded-lg  hover:scale-105 transition-all duration-700">
                  <p className="border-t border-b border-spacing-y-1.5 rounded-lg border-primary drop-shadow-md py-5 px-2">
                    <span className="font-bold text-lg">Learn With Quiz </span>{" "}
                    <br />
                    <span className="text-gray-500">
                      <ul>
                        <li className="list-disc ml-6">
                          front-end developed with React.js and Tailwind CSS
                        </li>
                        <li className="list-disc ml-6">
                          Open source API call to quiz load
                        </li>
                        <li className="list-disc ml-6">
                          Application mobile, tablet, and desktop responsive
                        </li>
                        <li className="list-disc ml-6 text-primary">
                          <Link to="https://634673a74bb4764154b2d653--courageous-nasturtium-848e5d.netlify.app/home">
                            Live side
                          </Link>
                        </li>
                        <li className="list-disc ml-6 text-primary">
                          <Link to="https://github.com/Porgramming-Hero-web-course/b6a11-service-review-client-side-rashariful">
                            Source code
                          </Link>
                        </li>
                      </ul>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side content */}
          <div className="flex-1">
            <div>
              <div>
                <h3 className="text-2xl my-3 font-bold">Extra activities</h3>
              </div>
              <div>
                <div className="my-5 bg-slate-800 hover:bg-slate-900 shadow-inner dropdown-bottom drop-shadow-2xl rounded-lg  hover:scale-105 transition-all duration-700">
                  <p className="border-t border-b border-spacing-y-1.5 rounded-lg border-primary drop-shadow-md py-5 px-2">
                    <span className="text-gray-500">
                      <ul>
                        <li className="list-disc ml-6">Sports</li>
                        <li className="list-disc ml-6">Teamwork</li>
                        <li className="list-disc ml-6">Problem solving</li>
                      </ul>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div>
                <h3 className="text-2xl my-3 font-bold">Hobbies</h3>
              </div>
              <div>
                <div className="my-5 bg-slate-800 hover:bg-slate-900 shadow-inner dropdown-bottom drop-shadow-2xl rounded-lg  hover:scale-105 transition-all duration-700">
                  <p className="border-t border-b border-spacing-y-1.5 rounded-lg border-primary drop-shadow-md py-5 px-2">
                    <span className="text-gray-500">
                      <ul>
                        <li className="list-disc ml-6">Traveling</li>
                        <li className="list-disc ml-6">New learning</li>
                        <li className="list-disc ml-6">Chess playing</li>
                      </ul>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div>
                <h3 className="text-2xl my-3 font-bold">Languages</h3>
              </div>
              <div>
                <div className="my-5 bg-slate-800 hover:bg-slate-900 shadow-inner dropdown-bottom drop-shadow-2xl rounded-lg  hover:scale-105 transition-all duration-700">
                  <p className="border-t border-b border-spacing-y-1.5 rounded-lg border-primary drop-shadow-md py-5 px-2">
                    <span className="text-gray-500">
                      <ul>
                        <li className="list-disc ml-6">Bangla-Native</li>
                        <li className="list-disc ml-6">English-Medium</li>
                        <li className="list-disc ml-6">Hindi-Comfortable</li>
                      </ul>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
