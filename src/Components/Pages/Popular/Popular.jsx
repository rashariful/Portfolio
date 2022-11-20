import React from "react";

const Popular = () => {
  return (
    <div>
      <div className="py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="flex flex-col justify-center text-center gap-4 mb-4 sm:mb-8 md:mb-12">
            <h2 className=" text-2xl lg:text-3xl font-bold text-center">Popular</h2>

            <p className="max-w-screen-sm mx-auto">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 xl:gap-8">
            {/* <!-- image - start --> */}
            <a
              href="#"
              className="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
            >
              <img
                src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                loading="lazy"
                alt="Photo by Minh Pham"
                className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
              />

              <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

              <span className="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">
                VR
              </span>
            </a>
            {/* <!-- image - end --> */}

            {/* <!-- image - start --> */}
            <a
              href="#"
              className="group h-48 md:h-80 md:col-span-2 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
            >
              <img
                src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=1000"
                loading="lazy"
                alt="Photo by Magicle"
                className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
              />

              <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

              <span className="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">
                Tech
              </span>
            </a>
            {/* <!-- image - end --> */}

            {/* <!-- image - start --> */}
            <a
              href="#"
              className="group h-48 md:h-80 md:col-span-2 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
            >
              <img
                src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=1000"
                loading="lazy"
                alt="Photo by Martin Sanchez"
                className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
              />

              <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

              <span className="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">
                Dev
              </span>
            </a>
            {/* <!-- image - end --> */}

            {/* <!-- image - start --> */}
            <a
              href="#"
              className="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
            >
              <img
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600"
                loading="lazy"
                alt="Photo by Lorenzo Herrera"
                className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
              />

              <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

              <span className="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">
                Retro
              </span>
            </a>
            {/* <!-- image - end --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
