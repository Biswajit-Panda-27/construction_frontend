import React, { useEffect, useState } from "react";
import axios from "axios";

const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/project")
      .then((res) => {
        // Wrap single object in array if API returns one project
        setProjects(Array.isArray(res.data) ? res.data : [res.data]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 px-12 mt-4">
      {projects.map((p, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
        >
          <img
            src={p.building_image}
            alt={`Project ${index + 1}`}
            className="w-full h-64 sm:h-72 md:h-80 object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default Project;
