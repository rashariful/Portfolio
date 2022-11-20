import React from "react";
import Pic from '../../../assets/heros.jpg'
import Portfolio from "../Portfolio/Portfolio";
import WhatDo from "./WhatDo/WhatDo";

const Home = () => {
  return (
    <div>
      <section>
        <div className="flex justify-between w-[80%] mx-auto mt-20 items-center">
          <div className="border-[16px] border-gray-800 rounded-full shadow-2xl drop-shadow-2xl hover:scale-105 transition-all duration-700 ">
            <img src={Pic} className="rounded-full w-72" alt="heros image" />
          </div>

          <div className="w-1/2">
            <h3 className="capitalize text-lg">
              <span className="uppercase">mern</span> stack developer
            </h3>
            <h1 className="text-[#f5f5f5] my-4 text-5xl font-bold capitalize">
              md shariful islam
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
              modi totam ducimus iusto, quisquam possimus, facere sed quae quia,
              nam earum vel. Repudiandae et dolorum quae consectetur eos nisi
              sunt!
            </p>

            <div className="flex gap-6 mt-8">
              <button className="btn btn-outline btn-primary rounded-full px-12 shadow-2xl drop-shadow-2xl">
                Download CV
              </button>

              <button className="btn btn-outline outline-base rounded-full px-12">
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-36">
        <Portfolio />
      </section>
      <section>
        <WhatDo />
      </section>
    </div>
  );
};

export default Home;
