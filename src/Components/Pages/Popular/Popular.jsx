import React from "react";

const Popular = () => {
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
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 xl:gap-8">
            <a
              href="https://used-car-museum.web.app/"
              className="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
            >
              <img
                src="https://cdn.dribbble.com/users/7058259/screenshots/15508460/media/09a96b82d700bae74c35b5a025bbf20d.jpg"
                loading="lazy"
                alt="Photo by Minh Pham"
                className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
              />

              <div className="bg-gradient-to-t from-blue-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

              <div className="flex gap-5 text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">
                <a href="https://used-car-museum.web.app/">
                  <button className="btn btn-sm btn-primary">Live side</button>
                </a>
                <a href="https://used-car-museum.web.app/">
                  <button className="btn btn-sm btn-warning">
                    Source code
                  </button>
                </a>
              </div>
            </a>

            <a
              href="https://used-car-museum.web.app/"
              className="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
            >
              <img
                src="https://cdn.dribbble.com/users/2969830/screenshots/18302151/media/6a0590d87fda388ddc2bcf20acb05963.png"
                loading="lazy"
                alt="Photo by Minh Pham"
                className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
              />

              <div className="bg-gradient-to-t from-blue-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

              <div className="flex gap-5 text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">
                <a href="https://used-car-museum.web.app/">
                  <button className="btn btn-sm btn-primary">Live side</button>
                </a>
                <a href="https://used-car-museum.web.app/">
                  <button className="btn btn-sm btn-warning">
                    Source code
                  </button>
                </a>
              </div>
            </a>
            <a
              href="https://used-car-museum.web.app/"
              className="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
            >
              <img
                src="https://cdn.dribbble.com/users/12230255/screenshots/19060384/media/cd2789249cb005acd550fe43a210a40d.jpg"
                loading="lazy"
                alt="Photo by Minh Pham"
                className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
              />

              <div className="bg-gradient-to-t from-blue-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

              <div className="flex gap-5 text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">
                <a href="https://used-car-museum.web.app/">
                  <button className="btn btn-sm btn-primary">Live side</button>
                </a>
                <a href="https://used-car-museum.web.app/">
                  <button className="btn btn-sm btn-warning">
                    Source code
                  </button>
                </a>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
