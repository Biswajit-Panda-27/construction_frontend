import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className=" backdrop-blur-md flex justify-between items-center sticky top-0 font-semibold py-2 z-50">
        {/* ...navbar content... */}
        <div className="ml-8">
          <h1>LOGO</h1>
        </div>
        <div className="flex gap-10 mr-8 ">
          {[
            {
              id: 1,
              path: "/",
              name: "HOME",
            },
            {
              id: 2,
              path: "/about",
              name: "ABOUT",
            },
            {
              id: 3,
              path: "/services",
              name: "SERVICES",
            },
            {
              id: 4,
              path: "/our_projects",
              name: "PROJECTS",
            },
            {
              id: 5,
              path: "/blogs",
              name: "BLOGS",
            },
            {
              id: 6,
              path: "/contact_us",
              name: "CONTACT",
            },
          ].map((show) => (
            <div key={show.id}>
              <Link
                to={show.path}
                className="hover:underline hover:underline-offset-3 text-yellow-400 text-[13px] font-bold "
              >
                {show.name}
              </Link>
            </div>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
