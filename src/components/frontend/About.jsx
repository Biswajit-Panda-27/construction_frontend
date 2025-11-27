import React from "react";
import heroImage from "../../assets/images/Construction_hero.jpg";
import { IoMdMail } from "react-icons/io";

const About = () => {
  return (
    <>
      {/* banner section */}
      <div className="flex justify-center items-center w-full">
        {/* Relative container for image and overlay */}
        <div className="relative w-full">
          {/* Image */}
          <img
            src={heroImage}
            alt="hero"
            className="w-full h-[280px] sm:h-[350px] md:h-[400px] object-cover drop-shadow "
          />

          {/* Overlay text */}
          <div className="absolute inset-0 flex flex-col items-start justify-center px-4 sm:px-10">
            <div className="mb-3 sm:mb-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold border-l-4 border-yellow-400 text-emerald-400 pl-3 inline-block">
                About Us
              </h1>
            </div>

            <span className="text-zinc-50 font-medium text-sm sm:text-base md:text-lg max-w-xl text-start drop-shadow-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint modi
              molestiae, quibusdam aliquam ipsa exercitationem totam praesentium
              magnam ad inventore soluta harum sapiente quam odit voluptates
              deleniti cumque. Nostrum, mollitia.
            </span>
          </div>
        </div>
      </div>

      {/* about us section */}
      <div
        className="flex flex-col lg:flex-row justify-center items-center 
                     px-4 sm:px-8 lg:px-20 gap-6 lg:gap-9 mt-16 lg:mt-32"
      >
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src={heroImage}
            alt="heroImage"
            className="w-full h-[220px] sm:h-[260px] md:h-[300px] lg:h-[350px] object-cover rounded-2xl"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center w-full lg:w-1/2 mt-6 lg:mt-0">
          <div className="mb-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold border-l-4 border-yellow-400 text-emerald-400 pl-3 inline-block">
              About Us
            </h1>
          </div>

          <span className="mb-2 text-zinc-600 font-semibold text-xl sm:text-2xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Aspernatur, ducimus.
          </span>

          <p className="mb-2 text-zinc-400 font-mono text-sm sm:text-base">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed illo
            praesentium voluptas blanditiis voluptatibus illum magnam. Aperiam!
          </p>

          <p className="mb-2 text-zinc-400 font-mono text-sm sm:text-base">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed illo
            praesentium voluptas blanditiis voluptatibus illum magnam. Aperiam!
          </p>
        </div>
      </div>

      {/* services section */}
      <div className="flex flex-col justify-center items-center mt-20 px-4">
        <div className="mb-4">
          <h1 className="text-3xl md:text-4xl font-bold border-l-4 border-yellow-400 text-emerald-400 pl-3 inline-block">
            Our Services
          </h1>
        </div>

        <span className="text-zinc-600 font-semibold text-xl md:text-2xl text-center max-w-2xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore,
          maxime!
        </span>

        {/* Responsive Image Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10 w-full max-w-7xl">
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
          ].map((data) => (
            <div
              key={data.id}
              className="relative group w-full h-[350px] md:h-[400px] overflow-hidden rounded-2xl cursor-pointer"
            >
              <img
                src={data.imageName}
                alt={data.imageAlt}
                className="h-full w-full rounded-2xl object-cover"
              />

              {/* Always visible heading */}
              <p className="absolute text-white bottom-5 left-5 z-20 transition-all duration-300 group-hover:opacity-0">
                {data.imageHeading}.
              </p>

              {/* Slide-up details */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 rounded-b-2xl translate-y-full opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <h1 className="text-lg font-semibold">
                  {data.moreDetailsHeading}
                </h1>
                <p className="text-sm mt-1 mb-2">{data.moreDetails}</p>
                <button className="bg-purple-600 rounded px-2 py-1 text-xs text-zinc-50 font-semibold">
                  More Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* our team section */}
      <div>
        <div className="flex flex-col justify-center items-center mt-16 mb-10">
          <div className="mb-4">
            <h1 className="text-3xl md:text-4xl font-bold border-l-4 border-yellow-400 text-emerald-400 pl-3 inline-block">
              Our Team
            </h1>
          </div>

          <span className="text-zinc-600 font-semibold text-2xl mb-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </span>
          <span className="text-zinc-400 font-mono max-w-2xl text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            eaque.
          </span>
        </div>
        {/* Image gallery section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
          {[
            {
              id: 1,
              image: heroImage,
              name: "Biswajit Panda",
              post: "Contractor",
              LinkedIn: <IoMdMail />,
            },
            {
              id: 2,
              image: heroImage,
              name: "Biswajit Panda",
              post: "Contractor",
              LinkedIn: <IoMdMail />,
            },
            {
              id: 3,
              image: heroImage,
              name: "Biswajit Panda",
              post: "Contractor",
              LinkedIn: <IoMdMail />,
            },
            {
              id: 4,
              image: heroImage,
              name: "Biswajit Panda",
              post: "Contractor",
              LinkedIn: <IoMdMail />,
            },
          ].map((item, id) => (
            <div
              key={id}
              className="bg-white block border border-gray-200 rounded-2xl shadow-md overflow-hidden transition transform hover:scale-105 hover:shadow-2xl"
            >
              <img
                className="rounded-t-2xl w-full h-60 object-cover"
                src={item.image}
                alt="Project"
              />
              <div className="p-6 text-center flex flex-col items-start justify-center">
                <h5 className="text-zinc-600 font-semibold text-2xl mb-1">
                  {item.name}
                </h5>
                <h5 className="font-bold tracking-tight text-xs text-zinc-400 mb-3">
                  {item.post}
                </h5>
                <span className="text-purple-600 cursor-pointer">
                  {item.LinkedIn}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* next section */}
    </>
  );
};

export default About;
