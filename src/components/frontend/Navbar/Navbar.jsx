import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { id: 1, path: "/", name: "HOME" },
    { id: 2, path: "/about", name: "ABOUT" },
    { id: 3, path: "/services", name: "SERVICES" },
    { id: 4, path: "/our_projects", name: "PROJECTS" },
    { id: 5, path: "/blogs", name: "BLOGS" },
    { id: 6, path: "/contact_us", name: "CONTACT" },
  ];

  return (
    <>
      <nav
        className={`w-full flex justify-between items-center sticky top-0 font-semibold py-3 px-4 z-50 transition-all duration-300
        ${scrolled ? "backdrop-blur-xl bg-black/40 shadow-md" : "bg-black"}`}
      >
        {/* Logo */}
        <h1 className="text-lg font-bold text-yellow-300">LOGO</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 mr-4">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className="hover:underline hover:underline-offset-4 text-yellow-300 text-sm font-semibold"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger Icon */}
        <button
          className="md:hidden cursor-pointer p-1"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <HiX className="w-8 h-8 text-yellow-400" />
          ) : (
            <HiMenu className="w-8 h-8 text-yellow-400" />
          )}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden fixed w-full bg-black/90 backdrop-blur-lg z-40 transition-all duration-300
        ${open ? "top-14 opacity-100" : "-top-96 opacity-0"}`}
      >
        <div className="flex flex-col items-center py-6 gap-5">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              onClick={() => setOpen(false)}
              className="text-yellow-300 text-base font-bold hover:underline hover:underline-offset-4"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
