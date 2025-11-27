import React from "react";
import { Link } from "react-router-dom";

const footerData = [
  {
    heading: "UrbanEdge Constructions",
    content: [
      {
        type: "text",
        value:
          "Our post-construction services gives you peace of mind knowing that we are still here for you even after.",
      },
    ],
  },
  {
    heading: "Our Services",
    content: [
      {
        type: "list",
        value: [
          "Specialty Construction",
          "Civil Construction",
          "Residential Construction",
          "Corporate Construction",
          "Building Constructions",
          "Industrial Construction",
        ],
      },
    ],
  },
  {
    heading: "Quick Links",
    content: [
      {
        type: "links",
        value: [
          { name: "Home", to: "/" },
          { name: "About Us", to: "/about" },
          { name: "Services", to: "/services" },
          { name: "Projects", to: "/our_projects" },
          { name: "Blog", to: "/blogs" },
          { name: "Contact Us", to: "/contact_us" },
        ],
      },
    ],
  },
  {
    heading: "Contact Us",
    content: [
      {
        type: "list",
        value: [
          "(888-000-0000)",
          "info@example.com",
          <>
            B-18X, Rajaji Puram
            <br />
            Lucknow, Uttar Pradesh, 226017
          </>,
          "0522400XXXX",
        ],
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="w-full bg-slate-900 text-white py-12 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 ">
        {footerData.map((section, idx) => (
          <div key={idx}>
            <h1 className="font-semibold text-xl mb-3 text-yellow-400">
              {section.heading}
            </h1>
            {section.content.map((item, i) =>
              item.type === "text" ? (
                <p className="text-zinc-500 text-[14px]" key={i}>
                  {item.value}
                </p>
              ) : item.type === "links" ? (
                <ul key={i} className="space-y-1 text-zinc-500 text-[14px]">
                  {item.value.map((li, j) => (
                    <li key={j}>
                      <Link
                        to={li.to}
                        className="hover:text-emerald-400 transition-colors duration-200"
                      >
                        {li.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul key={i} className="space-y-1 text-zinc-500 text-[14px]">
                  {item.value.map((li, j) => (
                    <li key={j}>{li}</li>
                  ))}
                </ul>
              )
            )}
          </div>
        ))}
      </div>
      <hr className="mt-10 mx-14 mb-2 text-zinc-500" />
      <span className="text-xs text-zinc-500">
        copyright © 2025 "Company Name" Construction. All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
