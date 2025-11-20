import React from "react";
import heroImage from "../../assets/images/Construction_hero.jpg";

const ContactUs = () => {
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
              Contact Us
            </h1>
            <span className="text-zinc-50 font-medium text-lg max-w-xl text-start drop-shadow-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint modi
              molestiae
            </span>
          </div>
        </div>
      </div>

      {/* contact section */}
      <div>
        <div className="flex flex-col justify-center items-center mt-16 mb-10 ">
          <h1 className="font-extrabold text-xl text-pink-700 tracking-wide mb-2">
            Contact Us
          </h1>
          <span className="text-zinc-400 font-mono max-w-2xl text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            eaque.
          </span>
        </div>
        {/* Form section */}
        <div className="py-10 px-2 bg-linear-to-br from-slate-900 to-pink-900">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left contact info panel */}
            <div className="bg-white/60 p-6 shadow-2xl rounded-2xl flex flex-col justify-center">
              {[
                {
                  id: 1,
                  heading: "Call Us",
                  subHeadingOne: "(111-222-3333)",
                  subHeadingTwo: "(444-555-6666)",
                },
                {
                  id: 2,
                  heading: "You can write us:",
                  subHeadingOne: "companyfirstmail@gmail.com",
                  subHeadingTwo: "companysecondmail@gmail.com",
                },
                {
                  id: 3,
                  heading: "Address:",
                  subHeadingOne: "House No, Street Name",
                  subHeadingTwo: "City, State, PIN",
                },
              ].map((item) => (
                <div key={item.id} className="mb-6">
                  <span className="text-zinc-100 font-bold text-xs text-shadow-xs text-shadow-pink-700 block mb-1">
                    {item.heading}
                  </span>
                  <span className=" text-zinc-800  font-medium block mb-2">
                    {item.subHeadingOne}
                  </span>
                  <span className=" text-zinc-900  font-medium block">
                    {item.subHeadingTwo}
                  </span>
                </div>
              ))}
            </div>

            {/* Form panel */}
            <div className="md:col-span-2 bg-white/60 p-8 rounded-2xl shadow flex flex-col justify-center">
              <form className="w-full max-w-2xl mx-auto space-y-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="name"
                      className="mb-1 font-semibold text-gray-800"
                    >
                      Name
                    </label>
                    <input
                      className="rounded px-3 py-2 outline-none border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-pink-200 transition"
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter your name"
                      autoComplete="name"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="email"
                      className="mb-1 font-semibold text-gray-800"
                    >
                      Email
                    </label>
                    <input
                      className="rounded px-3 py-2 outline-none border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-pink-200 transition"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter your email"
                      autoComplete="email"
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="number"
                      className="mb-1 font-semibold text-gray-800"
                    >
                      Number
                    </label>
                    <input
                      className="rounded px-3 py-2 outline-none border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-pink-200 transition"
                      type="number"
                      name="number"
                      id="number"
                      placeholder="Enter your number"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="subject"
                      className="mb-1 font-semibold text-gray-800"
                    >
                      Subject
                    </label>
                    <input
                      className="rounded px-3 py-2 outline-none border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-pink-200 transition"
                      type="text"
                      name="subject"
                      id="subject"
                      placeholder="Enter your subject"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="textarea"
                    className="block mb-1 font-semibold text-gray-800"
                  >
                    Message
                  </label>
                  <textarea
                    className="rounded px-3 py-2 w-full outline-none border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-pink-200 transition"
                    name="textarea"
                    id="textarea"
                    placeholder="Enter your message here"
                    rows="5"
                  ></textarea>
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-purple-600 rounded hover:bg-pink-700 px-8 py-2 text-white font-semibold shadow transition-colors"
                  >
                    Contact Us
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
