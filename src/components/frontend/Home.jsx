import React, { useEffect } from "react";
import heroImage from "../../assets/images/Construction_hero.jpg";
import { FcIdea } from "react-icons/fc";
import TestimonialCards from "./TestimonialCards";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdConstruction } from "react-icons/md";
import { AiFillApi } from "react-icons/ai";
import { MdMan4 } from "react-icons/md";
import { FaLightbulb } from "react-icons/fa6";
import { HiCubeTransparent } from "react-icons/hi";
import Project from "../backend/Project";

const Home = () => {
  useEffect(() => {
    AOS.init({
      offset: 900,
      duration: 10,
      easing: "ease-in",
      delay: 300,
    });
    AOS.refresh();
  }, []);

  const valuesData = [
    {
      type: "heading",
      title: "OUR SERVICES",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur officia quae nulla rem voluptatem corrupti debitis repudiandae sunt necessitatibus, laudantium harum officiis cum nobis doloribus earum modi, quo culpa libero!.",
    },
    {
      title: "Passion and Integrity",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur officia quae nulla rem voluptatem corrupti debitis repudiandae sunt necessitatibus, laudantium harum officiis cum nobis doloribus earum modi, quo culpa libero!",
      icon: <MdConstruction />,
    },
    {
      title: "Ownership",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur officia quae nulla rem voluptatem corrupti debitis repudiandae sunt necessitatibus, laudantium harum officiis cum nobis doloribus earum modi, quo culpa libero!",
      icon: <AiFillApi />,
    },
    {
      title: "Customer First",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur officia quae nulla rem voluptatem corrupti debitis repudiandae sunt necessitatibus, laudantium harum officiis cum nobis doloribus earum modi, quo culpa libero!",
      icon: <MdMan4 />,
    },
    {
      title: "Collaborate and Innovate",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur officia quae nulla rem voluptatem corrupti debitis repudiandae sunt necessitatibus, laudantium harum officiis cum nobis doloribus earum modi, quo culpa libero!",
      icon: <FaLightbulb />,
    },
    {
      title: "Transparency",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur officia quae nulla rem voluptatem corrupti debitis repudiandae sunt necessitatibus, laudantium harum officiis cum nobis doloribus earum modi, quo culpa libero!",
      icon: <HiCubeTransparent />,
    },
  ];

  return (
    <>
      {/* banner section */}
      <div className="flex justify-center items-center">
        {/* Relative container for image and overlay */}
        <div className="relative w-full">
          {/* Image */}
          <img
            src={heroImage}
            alt="hero"
            className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] object-cover drop-shadow drop-shadow-amber-500 rounded-b-2xl"
          />
          {/* Overlay text */}
          <div className="absolute inset-0 flex flex-col items-center mt-40 justify-center px-4 sm:px-8 md:px-16 lg:px-24">
            <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-amber-200 drop-shadow-md mb-4 text-center">
              lorem and lorem
            </h1>
            <span className="text-zinc-50 font-medium text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl text-center drop-shadow-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint modi
              molestiae, quibusdam aliquam ipsa exercitationem totam praesentium
              magnam ad inventore soluta harum sapiente quam odit voluptates
              deleniti cumque. Nostrum, mollitia.
            </span>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-4">
              <button className="bg-purple-600 rounded hover:bg-purple-700 px-4 py-2 text-zinc-50 font-semibold">
                View Projects
              </button>
              <button className="bg-purple-600 rounded hover:bg-purple-700 px-4 py-2 text-zinc-50 font-semibold">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* About us section */}
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

      {/* Our Partners */}
      <div className="w-full py-10 mt-20">
        {/* Heading */}
        <div className="text-center mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold border-l-4 border-yellow-400 text-emerald-600 pl-3 inline-block">
            Our Partners
          </h1>
        </div>

        {/* Grid */}
        <div
          className="
      grid 
      grid-cols-2 
      sm:grid-cols-3 
      md:grid-cols-4 
      lg:grid-cols-6 
      gap-6 
      sm:gap-8
      place-items-center
      px-4 sm:px-8 md:px-12
      py-10
      bg-gray-100
      rounded-xl
    "
        >
          <img
            className="h-12 sm:h-16 object-contain opacity-80 hover:opacity-100 transition"
            src="https://upload.wikimedia.org/wikipedia/commons/e/e5/L%26T.png"
            alt="L&T"
          />

          <img
            className="h-12 sm:h-16 object-contain opacity-80 hover:opacity-100 transition"
            src="https://companieslogo.com/img/orig/RELINFRA.NS_BIG-33b76811.png?t=1720244493"
            alt="Reliance Infra"
          />

          <img
            className="h-12 sm:h-16 object-contain opacity-80 hover:opacity-100 transition"
            src="https://upload.wikimedia.org/wikipedia/en/thumb/5/55/Shapoorji_Pallonji_Group_logo.svg/375px-Shapoorji_Pallonji_Group_logo.svg.png"
            alt="Shapoorji Pallonji"
          />

          <img
            className="h-12 sm:h-16 object-contain opacity-80 hover:opacity-100 transition"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/GMR_Group_%28logo%29.svg/672px-GMR_Group_%28logo%29.svg.png"
            alt="GMR"
          />

          <img
            className="h-12 sm:h-16 object-contain opacity-80 hover:opacity-100 transition"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Hindustan_Construction_Company_logo.svg/1200px-Hindustan_Construction_Company_logo.svg.png"
            alt="HCC"
          />

          <img
            className="h-12 sm:h-16 object-contain opacity-80 hover:opacity-100 transition"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Gammon_India_Logo.svg/207px-Gammon_India_Logo.svg.png"
            alt="Gammon India"
          />
        </div>
      </div>

      {/* Service section */}
      <div className="w-full px-3 sm:px-4 md:px-8 py-8 mt-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-amber-400">
          {valuesData.map((item, index) => {
            const isLast = index === valuesData.length - 1;

            return (
              <div
                key={index}
                className={`
            p-4 
            text-emerald-400 
            border-gray-200 
            ${!isLast ? "border-b" : ""}
            ${(index + 1) % 3 !== 0 ? "lg:border-r" : ""}
            ${
              item.type !== "heading"
                ? "hover:shadow-[0_0_14px_rgba(255,255,0,0.3)] hover:scale-[1.01] transition-all duration-300"
                : ""
            }
          `}
              >
                {/* Heading Block */}
                {item.type === "heading" ? (
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold mb-2 border-l-4 border-yellow-300 pl-3">
                      {item.title}
                    </h2>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ) : (
                  /* Value Card */
                  <div className="flex justify-between items-start gap-3">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <h1 className="text-2xl sm:text-3xl lg:text-4xl w-10 opacity-80">
                      {item.icon}
                    </h1>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* why choose us section */}
      <div className="flex flex-col justify-center items-center mt-20 px-4">
        {/* Heading */}
        <div className="text-center mb-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold border-l-4 border-yellow-400 text-emerald-400 pl-3 inline-block">
            Why Choose Us
          </h1>
        </div>

        {/* Subheading & Paragraphs */}
        <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-center max-w-2xl">
          Discover our wide variety of projects.
        </span>

        <span className="text-zinc-400 text-center max-w-xl mt-2 text-sm sm:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          deleniti ipsa perferendis odio!
        </span>

        <span className="text-zinc-400 font-mono text-center max-w-xl text-sm sm:text-base">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </span>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-full max-w-6xl px-4">
          {[
            {
              id: 1,
              icon: <FcIdea className="h-7 w-7" />,
              heading: "heading",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem repellendus esse corporis deleniti cumque voluptas dolorem sequi labore cupiditate officiis maxime, eum, ipsum quo.",
            },
            {
              id: 2,
              icon: <FcIdea className="h-7 w-7" />,
              heading: "heading",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem repellendus esse corporis deleniti cumque voluptas dolorem sequi labore cupiditate officiis maxime, eum, ipsum quo.",
            },
            {
              id: 3,
              icon: <FcIdea className="h-7 w-7" />,
              heading: "heading",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem repellendus esse corporis deleniti cumque voluptas dolorem sequi labore cupiditate officiis maxime, eum, ipsum quo.",
            },
          ].map((list, index) => (
            <div
              key={index}
              className="flex flex-col justify-start items-start shadow-xl rounded-2xl p-5 bg-white hover:shadow-2xl transition duration-300"
            >
              <p>{list.icon}</p>

              <h1 className="text-zinc-600 font-semibold text-xl sm:text-2xl mt-2">
                {list.heading}
              </h1>

              <span className="text-[13px] sm:text-sm text-zinc-400 font-mono mt-1">
                {list.description}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* our certificates */}
      <div className="w-full px-6 md:px-12 py-16 mt-32">
        <div className="text-center mb-4">
          <h1 className="text-3xl md:text-4xl font-bold border-l-4 border-yellow-400 text-emerald-400 pl-3 inline-block">
            Our Certificates
          </h1>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center">
          {[
            "https://png.pngtree.com/png-clipart/20250514/original/pngtree-iso-9001-certified-company-logo-badge-vector-png-image_20971536.png",
            "https://png.pngtree.com/png-clipart/20220911/original/pngtree-iso-14001-certified-company-logo-badge-png-image_8540372.png",
            "https://png.pngtree.com/png-vector/20250130/ourmid/pngtree-iso-45001-certified-vector-png-image_15374315.png",
            "https://images.credly.com/images/c6366757-c666-445f-86cc-88fb2295acb7/twitter_thumb_201604_Challenge_Coin-01.png",
            "https://wiki.agileana.com/images/6/68/PMP_project_management_professional_certification_badge.png",
            "https://marketplace.canva.com/EAFy42rCTA0/1/0/1600w/canva-blue-minimalist-certificate-of-achievement-_asVJz8YgJE.jpg",
            "https://images.template.net/232159/Certificate-of-Occupancy-Template-edit-online-1.jpg",
            "https://images.credly.com/images/0019d664-cfb6-4920-a2b2-f2c65e2c82fa/OSHA_General_Industry_10hr.png",
            "https://static.wixstatic.com/media/ab4f6d_a09eb6a36acf46918d91ecb096955bff~mv2.png/v1/crop/x_6,y_3,w_320,h_377,q_85,enc_avif,quality_auto/ab4f6d_a09eb6a36acf46918d91ecb096955bff~mv2.png",
            "https://png.pngtree.com/template/20210118/ourmid/pngtree-certificate-of-achievement-template-image_475668.jpg",
          ].map((src, index) => (
            <div
              key={index}
              className="bg-white shadow-md hover:shadow-xl rounded-xl p-3 transition-transform duration-300 hover:scale-105 w-full max-w-[160px]"
            >
              <img
                src={src}
                alt={`Certificate ${index}`}
                className="w-full h-32 object-contain rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/*  project section */}
      <div className=" flex  flex-col justify-center items-center mt-32">
        <div className="text-center mb-4">
          <h1 className="text-3xl md:text-4xl font-bold border-l-4 border-yellow-400 text-emerald-400 pl-3 inline-block">
            Our Projects
          </h1>
        </div>{" "}
        <span className="text-zinc-600 font-semibold text-2xl">
          Our Construction Projects
        </span>
        <span className="text-zinc-400 font-mono">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
          eaque.
        </span>
        {/* image gallery section */}
        <Project />
      </div>

      {/* Testimonials section */}
      <div className="flex flex-col justify-center items-center mt-32 ">
        <div className="text-center mb-4">
          <h1 className="text-3xl md:text-4xl font-bold border-l-4 border-yellow-400 text-emerald-400 pl-3 inline-block">
            Testimonials
          </h1>
        </div>{" "}
        <span className="text-zinc-600 font-semibold text-2xl">
          What people are saying about us.
        </span>
        <p className="text-zinc-400 font-mono">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis,
          nulla? Lorem ipsum dolor sit amet.
        </p>
        {/* swiper card section */}
        <TestimonialCards />
      </div>

      {/* blogs and news section */}
      <div>
        <div className="flex flex-col justify-center items-center mt-16 mb-10 px-4">
          <div className="text-center mb-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold border-l-4 border-yellow-400 text-emerald-400 pl-3 inline-block">
              Blogs and News
            </h1>
          </div>

          <span className="text-xl sm:text-2xl text-zinc-600 font-semibold mb-2">
            Articles and blog posts
          </span>

          <span className="text-zinc-400 font-mono max-w-2xl text-center text-sm sm:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            eaque.
          </span>
        </div>

        {/* Image gallery section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl px-4 mx-10">
          {[
            {
              id: 1,
              image: heroImage,
              category: "Category",
              title: "Blog post title",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore...",
            },
            {
              id: 2,
              image: heroImage,
              category: "News",
              title: "Another blog post",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis magnam ut, corporis molestias...",
            },
            {
              id: 3,
              image: heroImage,
              category: "Updates",
              title: "Construction industry update",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium provident perspiciatis...",
            },
            {
              id: 4,
              image: heroImage,
              category: "Updates",
              title: "Construction industry update",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium provident perspiciatis...",
            },
            {
              id: 5,
              image: heroImage,
              category: "Updates",
              title: "Construction industry update",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium provident perspiciatis...",
            },
            {
              id: 6,
              image: heroImage,
              category: "Updates",
              title: "Construction industry update",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium provident perspiciatis...",
            },
          ].map((item) => (
            <div
              key={item.id}
              className=" rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <img
                className="w-full h-48 sm:h-56 object-cover rounded-3xl"
                src={item.image}
                alt="Blog"
              />

              {/* Text Section */}
              <div className="px-4 mt-4">
                {/* Category Badge */}
                <span className="bg-purple-100 text-purple-600 text-xs font-semibold px-3 py-1 rounded-full">
                  {item.category}
                </span>

                {/* Blog Title */}
                <h2 className="mt-3 text-lg sm:text-xl font-bold text-gray-900">
                  {item.title}
                </h2>

                {/* Description */}
                <p className="text-gray-600 text-sm sm:text-base mt-2 mb-4">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* next section */}
    </>
  );
};

export default Home;
