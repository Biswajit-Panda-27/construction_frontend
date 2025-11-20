import React from "react";
import heroImage from "../../assets/images/Construction_hero.jpg";

const Projects = () => {
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
              Our Projects
            </h1>
            <span className="text-zinc-50 font-medium text-lg max-w-xl text-start drop-shadow-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint modi
              molestiae
            </span>
          </div>
        </div>
      </div>

      {/* project section */}
      <div className="flex flex-col justify-center items-center mt-16 mb-10 px-4">
        <h1 className="font-extrabold text-xl text-pink-700 mb-2 tracking-wide">
          OUR PROJECTS
        </h1>
        <span className="text-zinc-600 font-semibold text-2xl mb-2">
          Our Construction Projects
        </span>
        <span className="text-zinc-400 font-mono max-w-2xl text-center mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
          eaque.
        </span>

        {/* Responsive image gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-7 w-full max-w-7x px-20">
          {[
            {
              id: 1,
              imageName: heroImage,
              imageAlt: "heroImage",
              imageHeading: "heading description",
              moreDetailsHeading: "More details",
              moreDetails:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            },
            {
              id: 2,
              imageName: heroImage,
              imageAlt: "heroImage",
              imageHeading: "heading description",
              moreDetailsHeading: "More details",
              moreDetails:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            },
            {
              id: 3,
              imageName: heroImage,
              imageAlt: "heroImage",
              imageHeading: "heading description",
              moreDetailsHeading: "More details",
              moreDetails:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            },
            {
              id: 4,
              imageName: heroImage,
              imageAlt: "heroImage",
              imageHeading: "heading description",
              moreDetailsHeading: "More details",
              moreDetails:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            },
            {
              id: 5,
              imageName: heroImage,
              imageAlt: "heroImage",
              imageHeading: "heading description",
              moreDetailsHeading: "More details",
              moreDetails:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            },
            {
              id: 6,
              imageName: heroImage,
              imageAlt: "heroImage",
              imageHeading: "heading description",
              moreDetailsHeading: "More details",
              moreDetails:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            },
          ].map((data) => (
            <div
              key={data.id}
              className="relative group w-full h-[340px] sm:h-[370px] bg-white shadow-md border border-gray-200 overflow-hidden rounded-2xl transition-transform duration-300 hover:scale-105"
            >
              {/* Card Image */}
              <img
                src={data.imageName}
                alt={data.imageAlt}
                className="h-full w-full object-cover rounded-2xl group-hover:brightness-[.5] transition-all duration-300"
              />

              {/* Bottom Text (always visible, fades out on hover) */}
              <p className="absolute bottom-5 left-5 z-20 text-white text-base font-bold drop-shadow transition-all duration-300 group-hover:opacity-0">
                {data.imageHeading}
              </p>

              {/* Details slide-up overlay */}
              <div
                className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-5 rounded-b-2xl 
              translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-30"
              >
                <h1 className="text-lg font-semibold mb-1">
                  {data.moreDetailsHeading}
                </h1>
                <p className="text-sm mb-3">{data.moreDetails}</p>
                <button className="bg-pink-600 hover:bg-pink-700 rounded px-4 py-2 text-xs font-bold text-white shadow">
                  More Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
