import React from "react";
import heroImage from "../../assets/images/Construction_hero.jpg";
import { FaLinkedin } from "react-icons/fa";

const About = () => {
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
              About Us
            </h1>
            <span className="text-zinc-50 font-medium text-lg max-w-xl text-start drop-shadow-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint modi
              molestiae, quibusdam aliquam ipsa exercitationem totam praesentium
              magnam ad inventore soluta harum sapiente quam odit voluptates
              deleniti cumque. Nostrum, mollitia.
            </span>
          </div>
        </div>
      </div>

      {/* about us section */}
      <div className=" flex justify-center items-center px-[161px] gap-9 mt-30 ">
        <div>
          <img
            src={heroImage}
            alt="heroImage"
            className="h-[300px] w-[1000px] rounded-2xl "
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="font-extrabold text-xl text-pink-700 ">About US</h1>
          <span className="mb-2 text-zinc-600 font-semibold text-2xl ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Aspernatur, ducimus.
          </span>
          <p className="mb-2 text-zinc-400 font-mono ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed illo
            praesentium voluptas blanditiis voluptatibus illum magnam. Aperiam!
          </p>
          <p className="mb-2 text-zinc-400 font-mono ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed illo
            praesentium voluptas blanditiis voluptatibus illum magnam. Aperiam!
          </p>
        </div>
      </div>

      {/* services section */}
      <div className=" flex  flex-col justify-center items-center mt-30">
        <span className="text-zinc-400 font-mono">TEAM</span>
        <h1 className="font-extrabold text-xl text-pink-700 ">OUR TEAM</h1>
        <span className="text-zinc-600 font-semibold text-2xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore,
          maxime!
        </span>

        {/* image gallery section */}
        <div className="flex gap-3 mx-2">
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
          ].map((data, index) => (
            <div
              key={index}
              className="relative group w-[300px] h-[400px] overflow-hidden rounded-2xl cursor-pointer"
            >
              <img
                src={data.imageName}
                alt={data.imageAlt}
                className="h-full w-full rounded-2xl object-cover"
              />

              {/* Bottom text (always visible, fades out on hover) */}
              <p className="absolute text-white bottom-5 left-5 z-20 transition-all duration-300 group-hover:opacity-0">
                {data.imageHeading}.
              </p>

              {/* Details sliding up from bottom text */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 rounded-b-2xl translate-y-full opacity- transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 ">
                <h1 className="text-lg font-semibold">
                  {data.moreDetailsHeading}
                </h1>
                <p className="text-sm mt-1 mb-2">{data.moreDetails}</p>
                <button className="bg-pink-600 rounded px-2 py-1 text-xs text-zinc-50 font-semibold ">
                  More Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* our team section */}
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
        {[
          {
            id: 1,
            image: heroImage,
            name: "Biswajit Panda",
            post: "Developer",
            LinkedIn: <FaLinkedin />,
          },
          {
            id: 2,
            image: heroImage,
            name: "Biswajit Panda",
            post: "Developer",
            LinkedIn: <FaLinkedin />,
          },
          {
            id: 3,
            image: heroImage,
            name: "Biswajit Panda",
            post: "Developer",
            LinkedIn: <FaLinkedin />,
          },
          {
            id: 4,
            image: heroImage,
            name: "Biswajit Panda",
            post: "Developer",
            LinkedIn: <FaLinkedin />,
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
              <span className="text-blue-700 cursor-pointer">
                {item.LinkedIn}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* next section */}
    </>
  );
};

export default About;
