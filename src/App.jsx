import React, { useEffect } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "./components/frontend/Home";
import About from "./components/frontend/About";
import Service from "./components/frontend/Service.jsx";
import Projects from "./components/frontend/Projects.jsx";
import Blogs from "./components/frontend/Blogs.jsx";
import ContactUs from "./components/frontend/ContactUs.jsx";
import Footer from "./components/frontend/Footer/Footer.jsx";
import Navbar from "./components/frontend/Navbar/Navbar.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
const Layout = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="flex flex-col min-h-screen">
        {/* navbar */}
        <Navbar />

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
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
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
