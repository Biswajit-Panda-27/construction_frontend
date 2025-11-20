import React from "react";
import heroImage from "../../assets/images/Construction_hero.jpg";

const Blogs = () => {
  return (
    <>
      {/* banner section */}
      <div className="flex justify-center items-center">
        {/* Relative container for image and overlay */}
        <div className="relative ">
          {/* Image */}
          <img
            src={heroImage}
            alt="hero"
            className="h-[400px] w-screen object-cover drop-shadow drop-shadow-amber-500 "
          />
          {/* Overlay text */}
          <div className="absolute inset-0 flex flex-col items-start justify-center top-[11px] left-10 ">
            <span className="text-zinc-50 font-medium  max-w-xl text-center drop-shadow-md">
              Qulality, Integrity, Value
            </span>
            <h1 className="font-bold text-4xl text-amber-200 drop-shadow-md mb-4">
              Our Blogs
            </h1>
            <span className="text-zinc-50 font-medium text-lg max-w-xl text-start drop-shadow-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint modi
              molestiae
            </span>
          </div>
        </div>
      </div>
      
      {/* blogs and news section */}
      <div>
        <div className="flex flex-col justify-center items-center mt-16 mb-10">
          <h1 className="font-extrabold text-xl text-pink-700 tracking-wide mb-2">
            BLOGS & NEWS
          </h1>
          <span className="text-zinc-600 font-semibold text-2xl mb-2">
            Articles and blog posts
          </span>
          <span className="text-zinc-400 font-mono max-w-2xl text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            eaque.
          </span>
        </div>
        {/* Image gallery section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {[
            {
              id: 1,
              image: heroImage,
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,possimus?",
            },
            {
              id: 2,
              image: heroImage,
              description:
                "Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,possimus?",
            },
            {
              id: 3,
              image: heroImage,
              description:
                "Lorem ipsum dolor adipisicing elit. Placeat,possimus?",
            },
            {
              id: 4,
              image: heroImage,
              description:
                "Lorem ipsum dolor adipisicing elit. Placeat,possimus?",
            },
            {
              id: 5,
              image: heroImage,
              description:
                "Lorem ipsum dolor adipisicing elit. Placeat,possimus?",
            },
            {
              id: 6,
              image: heroImage,
              description:
                "Lorem ipsum dolor adipisicing elit. Placeat,possimus?",
            },
          ].map((item, idx) => (
            <div
              key={item.id}
              className="bg-white block border border-gray-200 rounded-2xl shadow-md overflow-hidden transition transform hover:scale-105 hover:shadow-2xl"
            >
              <img
                className="rounded-t-2xl w-full h-60 object-cover"
                src={item.image}
                alt="Project"
              />
              <div className="p-6 text-center">
                <h5 className="font-semibold tracking-tight text-xs text-gray-800 mb-4">
                  {item.description}
                </h5>
                <button className="bg-pink-700 rounded-md hover:bg-slate-900 transition-colors px-6 py-2 text-white font-semibold">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogs;
