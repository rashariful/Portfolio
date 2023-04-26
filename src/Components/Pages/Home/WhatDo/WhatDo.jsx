import React from "react";
import { FaAmilia, FaDesktop } from "react-icons/fa";

const WhatDo = () => {
  return (
    <div>
      <section className="mt-40">
        <div class="py-6 sm:py-8 lg:py-12">
          <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
            {/* <!-- text - start --> */}
            <div class="mb-10 md:mb-16">
              <h2 class="text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
                What I Do
              </h2>

              {/* <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p> */}
            </div>
            {/* <!-- text - end --> */}

            <div class="grid sm:grid-cols-2 gap-8 md:gap-12 xl:gap-16">
              {/* <!-- feature - start --> */}
              <div class="flex gap-4 md:gap-6">
                <div class="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center shrink-0 bg-indigo-500 text-white rounded-lg md:rounded-xl shadow-lg">
                  <FaDesktop className="w-full h-8"></FaDesktop>
                </div>

                {/* <!-- feature - start --> */}
                <div className="border border-gray-700 rounded-xl px-5 py-3 hover:scale-105 transition-all duration-300">
                  <h3 class="text-lg md:text-xl font-semibold mb-2">
                    Web Development
                  </h3>
                  <p class="text-gray-500 mb-2">
                    Web development is the building and maintenance of websites;
                    it’s the work that happens behind the scenes to make a
                    website look great, work fast and perform well with a
                    seamless user experience. Web developers, or ‘devs’, do this
                    by using a variety of coding languages.
                  </p>
                  <a
                    href="#"
                    class="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100"
                  >
                    More
                  </a>
                </div>
              </div>
              {/* <!-- feature - end -->*/}

              {/* <!-- feature - start --> */}
              <div class="flex gap-4 md:gap-6 hover:scale-105 transition-all duration-300">
                <div class="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center shrink-0 bg-indigo-500 text-white rounded-lg md:rounded-xl shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>

                <div className="border border-gray-700 rounded-xl px-5 py-3">
                  <h3 class="text-lg md:text-xl font-semibold mb-2">
                    Digital Marketing
                  </h3>
                  <p class="text-gray-500 mb-2">
                    Any marketing that uses electronic devices and can be used
                    by marketing specialists to convey promotional messaging and
                    measure its impact through your customer journey.
                  </p>
                  <a
                    href="#"
                    class="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100"
                  >
                    More
                  </a>
                </div>
              </div>
              {/* <!-- feature - end -->*/}

              {/* <!-- feature - start --> */}
              <div class="flex gap-4 md:gap-6 hover:scale-105 transition-all duration-300">
                <div class="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center shrink-0 bg-indigo-500 text-white rounded-lg md:rounded-xl shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>

                <div className="border border-gray-700 rounded-xl px-5 py-3">
                  <h3 class="text-lg md:text-xl font-semibold mb-2">
                    UI/UX Design
                  </h3>
                  <p class="text-gray-500 mb-2">
                    A UI UX designer is a professional who identifies new
                    opportunities to create better user experiences.
                    Aesthetically pleasing branding strategies help them
                    effectively reach more customers. They also ensure that the
                    end-to-end journey with their products or services meets
                    desired outcomes.
                  </p>
                  <a
                    href="#"
                    class="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100"
                  >
                    More
                  </a>
                </div>
              </div>
              {/* <!-- feature - end -->*/}

              {/* <!-- feature - start --> */}
              <div class="flex gap-4 md:gap-6 hover:scale-105 transition-all duration-300">
                <div class="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center shrink-0 bg-indigo-500 text-white rounded-lg md:rounded-xl shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>

                <div className="border border-gray-700 rounded-xl px-5 py-3">
                  <h3 class="text-lg md:text-xl font-semibold mb-2">SEO</h3>
                  <p class="text-gray-500 mb-2">
                    SEO stands for search engine optimization, which is a set of
                    practices designed to improve the appearance and positioning
                    of web pages in organic search results. Because organic
                    search is the most prominent way for people to discover and
                    access online content, a good SEO strategy is essential for
                    improving the quality and quantity of traffic to your
                    website.
                  </p>
                  <a
                    href="#"
                    class="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100"
                  >
                    More
                  </a>
                </div>
              </div>
              {/* <!-- feature - end -->*/}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatDo;
