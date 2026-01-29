import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";

// Helper to load images using Vite's import.meta.glob
const loadImages = (glob) => {
  return Object.values(glob).map((module) => module.default);
};

const collegeImages = loadImages(
  import.meta.glob("../assets/Medical college/*.jpg", { eager: true }),
);
const hospitalImages = loadImages(
  import.meta.glob("../assets/hospital/*.jpg", { eager: true }),
);
const departmentImages = loadImages(
  import.meta.glob("../assets/department/*.jpg", { eager: true }),
);
const infraImages = loadImages(
  import.meta.glob("../assets/infrastructure/*.jpg", { eager: true }),
);
const rhtcImages = loadImages(
  import.meta.glob("../assets/infrastructure/RHTC/*.jpg", { eager: true }),
);
const uhtcImages = loadImages(
  import.meta.glob("../assets/infrastructure/UHTC/*.jpg", { eager: true }),
);

const Section = ({ title, images, id }) => (
  <div className="mb-16" id={id}>
    <div className="text-center mb-12" data-aos="fade-down">
      <h2 className="text-3xl font-bold text-gray-800 mb-4 font-serif uppercase tracking-wide">
        {title} <span className="text-orange-500">Gallery</span>
      </h2>
      <div className="h-1 w-24 bg-orange-500 mx-auto rounded-full"></div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {images.map((img, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-xl shadow-lg bg-white cursor-pointer h-64"
          data-aos="fade-up"
          data-aos-delay={index * 50}
        >
          <img
            src={img}
            alt={`${title} ${index + 1}`}
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      ))}
    </div>
  </div>
);

const InfraStructure = () => {
  const { hash } = useLocation();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20" data-aos="zoom-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
            Our <span className="text-orange-500">Infrastructure</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our state-of-the-art facilities designed to provide
            world-class education and healthcare services.
          </p>
        </div>

        <Section title="College" images={collegeImages} id="college-gallery" />
        <Section
          title="Hospital"
          images={hospitalImages}
          id="hospital-gallery"
        />
        <Section title="Department" images={departmentImages} />
        <Section title="General Infrastructure" images={infraImages} />
        <Section
          title="Rural Health Training Centre (RHTC)"
          images={rhtcImages}
        />
        <Section
          title="Urban Health Training Centre (UHTC)"
          images={uhtcImages}
        />
      </div>
    </div>
  );
};

export default InfraStructure;
