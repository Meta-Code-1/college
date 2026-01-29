import React from "react";
import { Link } from "react-router-dom";
import Crousel from "../components/Crousel";
import travel from "../assets/travel.jpg";
import info from "../assets/info/1.png";
import info2 from "../assets/info/2.png";
import info3 from "../assets/info/3.png";
import info4 from "../assets/info/4.png";
import info5 from "../assets/info/5.png";
import info6 from "../assets/info/6.png";
import antiRagging from "../assets/anti-raging.pdf";
import swami from "../assets/swami.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import Marquee from "react-fast-marquee";
import Profile from "../components/Profile";
import MessageCards from "../components/MessageCards";
import aboutbaner1 from "../assets/aboutbaner1.jpg";
import collegeImg from "../assets/college/kdmedical-college1.jpg";
import { Cog6ToothIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";

const Home = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <div className="container mx-auto">
        <Crousel />
        {/* <Profile /> */}
        <div
          className="max-w-7xl mx-auto px-4 my-12"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div className="relative bg-[#FFFBF5] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 shadow-sm border border-orange-100 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-x-1/4 translate-y-1/4">
              <svg
                width="300"
                height="300"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 0C100 55.2285 55.2285 100 0 100C55.2285 100 100 144.772 100 200C100 144.772 144.772 100 200 100C144.772 100 100 55.2285 100 0Z"
                  fill="#F97316"
                />
              </svg>
            </div>

            <div className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 relative">
              <img
                src={swami}
                alt="Swami Vivekananda"
                className="w-full h-full object-contain drop-shadow-xl sepia-[.1]"
              />
            </div>

            <div className="z-10 text-center md:text-left">
              <p className="text-gray-600 text-lg md:text-xl font-serif italic leading-relaxed mb-6">
                "We must also remember that the leaders of our societies have
                never been either generals or kings, but Rishis... If there have
                been sages and Rishis in the past, be sure that there will be
                many now."
              </p>
              <div className="w-16 h-1 bg-orange-400 mx-auto md:mx-0 mb-4 rounded-full"></div>
              <h4 className="text-orange-600 font-bold text-xl font-serif">
                — Swami Vivekananda
              </h4>
            </div>
          </div>
        </div>
        <div
          className="max-w-7xl mx-auto px-4 my-16"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-orange-100 flex flex-col md:flex-row">
            {/* Image Section */}
            <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
              <div className="absolute inset-0 bg-orange-900/10 z-10"></div>
              <img
                src={travel}
                alt="COVID-19 testing laboratory"
                className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
              />
              
            </div>

            {/* Content Section */}
            <div className="md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-gradient-to-br from-white to-orange-50/30">

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                COVID-19 Testing at
                <span className="block text-orange-600">
                  Molecular Biology Lab
                </span>
              </h2>

              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Our Molecular Biology laboratory at K.D. Medical College is
                  fully approved for sample collection, testing, and diagnosis of
                  suspected COVID-19 cases.
                </p>
                <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-lg mt-6">
                  <p className="font-medium text-orange-900 text-base">
                    Strict safety protocols are followed by our doctors and
                    technicians to ensure the highest standards of safety and
                    accuracy.
                  </p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <MessageCards />
        <div className="space-y-12 m-4 md:m-8 mt-12">
          {/* Best Hospital Section */}
          <div className="bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-gray-100">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
              Best Hospital & Medical College: K.D. Medical College Hospital &
              Research Centre
            </h1>
            <div className="w-24 h-1 bg-orange-400 mx-auto mb-8 rounded-full"></div>
            <p className="text-gray-600 leading-8 text-justify text-lg">
              With a noble and most generous aim of offering service to the sick
              and suffering of the community and society at large and to bridge
              the gap between the ever-remained genuine need and the
              availability of the medical doctors in India, RK Educational Group
              has put a step further in the direction of establishing a Medical
              college and Nursing College in Mathura with the latest diagnostic
              and treatment services. This medical college, along with the
              Multi-speciality hospital of 1050 beds equipped with all the
              ultra-modern facilities. Undoubtedly, this flagship gem of RK
              Educational Group will be a great present to India, which is
              already crippled with the scarcity of doctors.
            </p>
          </div>

          {/* Highlights Section */}
          <div>
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Highlights
              </h3>
              <p className="text-gray-500">Quick access to important resources</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { text: "Affiliation", link: "/contact#affiliation", icon: "" },
                {
                  text: "Hospital Gallery",
                  link: "/infrastructure#hospital-gallery",
                  icon: "",
                },
                {
                  text: "Medical College Gallery",
                  link: "/infrastructure#college-gallery",
                  icon: "",
                },
                {
                  text: "Fee Structure",
                  link: "/highlights#fee-structure",
                  icon: "",
                },
                {
                  text: "Anti Ragging Affidavit",
                  link: antiRagging,
                  icon: "",
                },
                {
                  text: "Affidavit - Student Undertaking",
                  link: "/course",
                  icon: "",
                },
                { text: "ANTI RAGGING - Anti Ragging Policies", link: "#", icon: "" },
                { text: "Bio Metrics Attendance", link: "#", icon: "" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group transform hover:-translate-y-1"
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center text-3xl group-hover:bg-orange-100 transition-colors">
                      {item.icon}
                    </div>

                    {item.link !== "#" ? (
                      item.link.toString().endsWith(".pdf") ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-800 font-semibold text-lg hover:text-orange-600 transition-colors"
                        >
                          {item.text}
                        </a>
                      ) : (
                        <Link
                          to={item.link}
                          className="text-gray-800 font-semibold text-lg hover:text-orange-600 transition-colors"
                        >
                          {item.text}
                        </Link>
                      )
                    ) : (
                      <span className="text-gray-800 font-semibold text-lg">
                        {item.text}
                      </span>
                    )}

                    <div className="w-8 h-1 bg-orange-200 rounded-full group-hover:w-16 transition-all duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 py-10 bg-gray-50">
          <h2 className="text-center text-3xl font-medium text-gray-700 mb-12">
            Better Diagnosis, Better Cure
          </h2>
          <Marquee
            gradient={false}
            pauseOnHover={true}
            className="py-8 overflow-hidden"
          >
            <div className="flex flex-col items-center text-center group mx-8 w-80 flex-shrink-0">
              <div
                className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-white shadow-lg transition-transform duration-300 group-hover:scale-105"
                data-aos="zoom-in"
              >
                <img
                  src={info}
                  alt="24x7 Emergency Services"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-medium text-gray-700 mb-3">
                24x7 Emergency Services
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4 px-4">
                Our swift and attentive emergency team is always ready to render
                services using the state-of-the-art equipment and advanced
                patient monitoring systems we possess..
              </p>
              <Link to="/view#emergency">
                <button className="bg-orange-400 hover:bg-orange-500 text-white text-sm font-medium py-2 px-6 rounded transition-colors duration-300 cursor-pointer">
                  View details »
                </button>
              </Link>
            </div>

            <div className="flex flex-col items-center text-center group mx-8 w-80 flex-shrink-0">
              <div
                className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-white shadow-lg transition-transform duration-300 group-hover:scale-105"
                data-aos="zoom-in"
              >
                <img
                  src={info2}
                  alt="General Information"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-medium text-gray-700 mb-3">
                General Information
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4 px-4">
                The hospital has a total of 1050 bed Multi Specialty Hospital,
                There are 250 doctors (incl. Faculty members, Sr. and Jr.
                Residents) and 390 Nurses.
              </p>
              <Link to="/view#general-info">
                <button className="bg-orange-400 hover:bg-orange-500 text-white text-sm font-medium py-2 px-6 rounded transition-colors duration-300 cursor-pointer">
                  View details »
                </button>
              </Link>
            </div>

            <div className="flex flex-col items-center text-center group mx-8 w-80 flex-shrink-0">
              <div
                className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-white shadow-lg transition-transform duration-300 group-hover:scale-105"
                data-aos="zoom-in"
              >
                <img
                  src={info3}
                  alt="Indoor Services"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-medium text-gray-700 mb-3">
                Indoor Services
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4 px-4">
                Indoor services have central air conditioning, hot and cold
                water, toilets, portable X-ray machines, ECG services, Generator
                back up, emergency lights...
              </p>
              <Link to="/view#indoor-services">
                <button className="bg-orange-400 hover:bg-orange-500 text-white text-sm font-medium py-2 px-6 rounded transition-colors duration-300 cursor-pointer">
                  View details »
                </button>
              </Link>
            </div>

            <div className="flex flex-col items-center text-center group mx-8 w-80 flex-shrink-0">
              <div
                className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-white shadow-lg transition-transform duration-300 group-hover:scale-105"
                data-aos="zoom-in"
              >
                <img
                  src={info4}
                  alt="Out Patient Services"
                  className="w-full h-full object-cover p-4"
                />
              </div>
              <h3 className="text-xl font-medium text-gray-700 mb-3">
                Out Patient Services
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4 px-4">
                You have right to consult any doctor/consultant. For seeking
                appointment with any consultant on his OPD days, you may contact
                his/her office..
              </p>
              <Link to="/view#opd-services">
                <button className="bg-orange-400 hover:bg-orange-500 text-white text-sm font-medium py-2 px-6 rounded transition-colors duration-300 cursor-pointer">
                  View details »
                </button>
              </Link>
            </div>

            <div className="flex flex-col items-center text-center group mx-8 w-80 flex-shrink-0">
              <div
                className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-white shadow-lg transition-transform duration-300 group-hover:scale-105"
                data-aos="Zoom-in"
              >
                <img
                  src={info5}
                  alt="Complaint & Grievances"
                  className="w-full h-full object-cover p-8"
                />
              </div>
              <h3 className="text-xl font-medium text-gray-700 mb-3">
                Complaint & Grievances
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4 px-4">
                Please provide useful feedback and constructive suggestions.
                These may be addressed to the Medical Superintendent of the
                Hospital.
              </p>
              <Link to="/view#complaints">
                <button className="bg-orange-400 hover:bg-orange-500 text-white text-sm font-medium py-2 px-6 rounded transition-colors duration-300 cursor-pointer">
                  View details »
                </button>
              </Link>
            </div>

            <div className="flex flex-col items-center text-center group mx-8 w-80 flex-shrink-0">
              <div
                className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-white shadow-lg transition-transform duration-300 group-hover:scale-105"
                data-aos="zoom-in"
              >
                <img
                  src={info6}
                  alt="Responsibilities"
                  className="w-full h-full object-cover p-2"
                />
              </div>
              <h3 className="text-xl font-medium text-gray-700 mb-3">
                Responsibilities
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4 px-4">
                The success of this charter depends on the support we receive
                from our users. Beware of Touts & unauthorized persons. Don't
                Indulge in any money..
              </p>
              <Link to="/view#responsibilities">
                <button className="bg-orange-400 hover:bg-orange-500 text-white text-sm font-medium py-2 px-6 rounded transition-colors duration-300 cursor-pointer">
                  View details »
                </button>
              </Link>
            </div>
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default Home;
