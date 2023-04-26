import { useState } from "react";
import { Tab } from "@headlessui/react";
import Popular from "../Popular/Popular";
import Recent from "../Recent/Recent";
import Trending from "../Trending/Trending";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Portfolio() {
  let [categories] = useState({
    Recent: [
      {
        id: 1,
        title: <Recent></Recent>,
      },
    ],
    Popular: [
      {
        id: 1,
        title: <Popular></Popular>,
      },
    ],
    Trending: [
      {
        id: 1,
        title: <Trending></Trending>,
      },
    ],
  });

  return (
    <div className="w-full  px-2 py-16 sm:px-0">
      <Tab.Group>

        <Tab.List className="flex w-1/2 mx-auto rounded-xl bg-blue-900/20 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-1",
                  selected
                    ? "bg-primary shadow text-gray-100"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}

        </Tab.List>

        <Tab.Panels className="mt-2">

          {Object.values(categories).map((posts, idx) => (

            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl bg-slate-700 p-3",
                "ring-slate-800 ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative rounded-md p-3 bg-slate-800 transition-all"
                  >
                    <h3 className="text-sm font-medium leading-5">
                      {post.title}
                    </h3>

                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}

        </Tab.Panels>

      </Tab.Group>
    </div>
  );
}
