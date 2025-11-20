import React from "react";
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import Home from "./components/frontend/Home";
import About from "./components/frontend/About";
import Service from "./components/frontend/Service.jsx";
import Projects from "./components/frontend/Projects.jsx";
import Blogs from "./components/frontend/Blogs.jsx";
import ContactUs from "./components/frontend/ContactUs.jsx";
import Footer from "./components/frontend/Footer/Footer.jsx";

const Layout = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <nav className="bg-pink-700 flex justify-between items-center sticky top-0 font-semibold py-4 z-50">
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
                  className="hover:underline hover:underline-offset-3 text-zinc-100 text-[13px] font-bold "
                >
                  {show.name}
                </Link>
              </div>
            ))}
          </div>
        </nav>

        {/* Main content  */}
        <main className="flex-1">
          <Outlet />
        </main>

        {/* FOOTER  */}
        <footer className=" text-center">
          <Footer />
        </footer>
      </div>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/our_projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact_us" element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
