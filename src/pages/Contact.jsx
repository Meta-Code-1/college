import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import map from "../assets/KD-roadmap.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const { hash } = useLocation();
  React.useEffect(() => {
      AOS.init({
        duration: 1000,
      });
    }, []);

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);
  return (
    <>
      <div className="container mx-auto w-full bg-white overflow-y-hidden">
        <div className="text-center mb-20" data-aos="zoom-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
            Our <span className="text-orange-500">Affiliated University</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 m-4 md:m-8">
          <div className="h-auto w-full mx-auto bg-white p-6 rounded-lg shadow-sm" data-aos="fade-up-right">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              DR. BHIM RAO AMBEDKAR UNIVERSITY
            </h1>
            <p className="text-orange-600 font-medium mb-1">
              Affiliation From batch 2015 to onward
            </p>
            <p className="text-orange-600 font-medium mb-8">
              Address: Paliwal Park, Agra (U.P.) 282004
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-gray-500 font-medium text-sm mb-2 uppercase tracking-wide">
                  VICE CHANCELLOR
                </h3>
                <p className="font-bold text-gray-900 text-lg mb-1">
                  Prof. Ashok Mittal
                </p>
                <div className="text-gray-600 space-y-1">
                  <p>Khandari Parisar,</p>
                  <p>V. C. Resident, Agra</p>
                  <p>
                    Phone No.{" "}
                    <a
                      href="tel:05652858668"
                      className="hover:text-blue-600 transition-colors"
                    >
                      0565-2858668
                    </a>
                  </p>
                  <p>
                    Email Id:{" "}
                    <a
                      href="mailto:vc@dbrau.org.in"
                      className="hover:text-blue-600 transition-colors"
                    >
                      vc@dbrau.org.in
                    </a>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-gray-500 font-medium text-sm mb-2 uppercase tracking-wide">
                  REGISTRAR
                </h3>
                <p className="font-bold text-gray-900 text-lg mb-1">
                  Shri Sanjeev Kumar Singh
                </p>
                <div className="text-gray-600 space-y-1">
                  <p>Gopal Kunj, Behind St. Johns College, Agra</p>
                  <p>
                    Phone No.{" "}
                    <a
                      href="tel:05652852118"
                      className="hover:text-blue-600 transition-colors"
                    >
                      0565-2852118
                    </a>
                  </p>
                  <p>
                    Email Id:{" "}
                    <a
                      href="mailto:registrar.dbrau.ac.in@gmail.com"
                      className="hover:text-blue-600 transition-colors"
                    >
                      registrar.dbrau.ac.in@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-auto w-full mx-auto bg-white p-6 rounded-lg shadow-sm" data-aos="fade-up-left">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              ATAL BIHARI VAJPAYEE MEDICAL UNIVERSITY, UP
            </h1>
            <p className="text-orange-600 font-medium mb-1">
              From batch 2021-22 to onward
            </p>
            <p className="text-orange-600 font-medium mb-8">
              Address: Atal Bihari Vajpayee Medical University, UP, CG City,
              Sultanpur Road, Lucknow- 226002
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
              <div>
                <h3 className="text-gray-500 font-medium text-sm mb-1 uppercase tracking-wide">
                  Affiliated University
                </h3>
                <p className="font-bold text-gray-900 border-b pb-2 mb-2">
                  ABVMU, Lucknow
                </p>

                <h3 className="text-gray-500 font-medium text-sm mb-1 uppercase tracking-wide">
                  VICE CHANCELLOR
                </h3>
                <p className="font-bold text-gray-900 border-b pb-2 mb-2">
                  DR. SANJEEV MISRA
                </p>

                <h3 className="text-gray-500 font-medium text-sm mb-1 uppercase tracking-wide">
                  Registrar
                </h3>
                <p className="font-bold text-gray-900 border-b pb-2 mb-2">
                  DR. SANJEEV KUMAR
                </p>

                <h3 className="text-gray-500 font-medium text-sm mb-1 uppercase tracking-wide">
                  Controller of Examination
                </h3>
                <p className="font-bold text-gray-900 border-b pb-2 mb-2">
                  MR. LOKESH AGARWAL
                </p>
              </div>

              <div className="space-y-3">
                <div>
                  <h3 className="text-gray-500 font-medium text-sm mb-1 uppercase tracking-wide">
                    Website
                  </h3>
                  <a
                    href="http://www.abvmuup.edu.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium block"
                  >
                    www.abvmuup.edu.in
                  </a>
                </div>
                <div>
                  <h3 className="text-gray-500 font-medium text-sm mb-1 uppercase tracking-wide">
                    Mail-Id
                  </h3>
                  <a
                    href="mailto:vcabvmuup@gmail.com"
                    className="text-blue-600 hover:text-blue-800 font-medium block"
                  >
                    vcabvmuup@gmail.com
                  </a>
                </div>
                <div className="pt-2 space-y-2">
                  <div className="flex justify-between border-b border-gray-100 pb-1">
                    <span className="text-gray-600">General Enquiry:</span>
                    <a
                      href="tel:+919151024465"
                      className="text-gray-900 font-medium hover:text-blue-600"
                    >
                      +91 9151024465
                    </a>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-1">
                    <span className="text-gray-600">Affiliation:</span>
                    <a
                      href="tel:+919151024466"
                      className="text-gray-900 font-medium hover:text-blue-600"
                    >
                      +91 9151024466
                    </a>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-1">
                    <span className="text-gray-600">Examination:</span>
                    <a
                      href="tel:+919151024467"
                      className="text-gray-900 font-medium hover:text-blue-600"
                    >
                      +91 9151024467
                    </a>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-1">
                    <span className="text-gray-600">Counselling:</span>
                    <a
                      href="tel:+919151092123"
                      className="text-gray-900 font-medium hover:text-blue-600"
                    >
                      +91 9151092123
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 m-4 md:m-8" data-aos="zoom-in-up">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">
            Contact Us
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                K.D. Medical College Hospital and Research Center
              </h3>
              <p className="text-gray-600 font-medium">
                (Affiliation University - Dr. B. R. Ambedkar University, Agra )
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-x-8">
              {/* Address */}
              <div className="md:col-span-3 font-bold text-gray-700">
                Campus:-
              </div>
              <div className="md:col-span-9 text-gray-600">
                <p>K. D. Medical College, Hospital & Research Center,</p>
                <p>24 KM Milestone, Mathura-Delhi Road,</p>
                <p>NH #2, P.O. Akbarpur, Tehsil Chhata,</p>
                <p>Mathura (U.P.) – 281406 (India)</p>
              </div>

              {/* Phone */}
              <div className="md:col-span-3 font-bold text-gray-700">
                Ph. No
              </div>
              <div className="md:col-span-9 text-gray-600 font-medium">
                <a href="tel:7055400400" className="hover:text-blue-600">
                  7055400400
                </a>{" "}
                ,{" "}
                <a href="tel:7055400500" className="hover:text-blue-600">
                  7055400500
                </a>
              </div>

              {/* Email */}
              <div className="md:col-span-3 font-bold text-gray-700">
                Email:
              </div>
              <div className="md:col-span-9">
                <a
                  href="mailto:kdmchrc@gmail.com"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  kdmchrc@gmail.com
                </a>
              </div>

              {/* Toll Free */}
              <div className="md:col-span-3 font-bold text-gray-700">
                Toll free:
              </div>
              <div className="md:col-span-9 text-gray-600 font-medium">
                <a href="tel:18002704121" className="hover:text-blue-600">
                  18002704121
                </a>
              </div>
            </div>

            <hr className="border-gray-100 my-6" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-gray-700 mb-1">
                    For Admission Inquiry
                  </h4>
                  <a
                    href="tel:+917055507318"
                    className="text-gray-600 hover:text-blue-600 font-medium"
                  >
                    +91 70555 07318
                  </a>
                </div>

                <div>
                  <h4 className="font-bold text-gray-700 mb-1">For Jobs</h4>
                  <a
                    href="mailto:kdmchrcjobs@gmail.com"
                    className="text-gray-600 hover:text-blue-600 font-medium"
                  >
                    kdmchrcjobs@gmail.com
                  </a>
                </div>

                <div>
                  <h4 className="font-bold text-gray-700 mb-1">
                    For student inquiry
                  </h4>
                  <div className="flex flex-col sm:flex-row sm:gap-2 text-gray-600 font-medium">
                    <a
                      href="mailto:studentskdmc01@gmail.com"
                      className="hover:text-blue-600"
                    >
                      studentskdmc01@gmail.com
                    </a>
                    <span className="hidden sm:inline">|</span>
                    <a href="tel:+917055507318" className="hover:text-blue-600">
                      +91 70555 07318
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-gray-700 mb-1">For HR Query</h4>
                  <p className="text-gray-500 text-sm mb-1">
                    (Time: 9:00AM to 5:00PM )
                  </p>
                  <a
                    href="mailto:hrkdmc@gmail.com"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    hrkdmc@gmail.com
                  </a>
                </div>

                <div>
                  <h4 className="font-bold text-gray-700 mb-1">
                    For Hospital Inquiry
                  </h4>
                  <div className="text-gray-600 font-medium flex flex-wrap gap-2">
                    <a href="tel:+917088105055" className="hover:text-blue-600">
                      +91-7088105055
                    </a>
                    <span>/</span>
                    <a href="tel:7055318520" className="hover:text-blue-600">
                      7055318520
                    </a>
                    <span>/</span>
                    <a href="tel:7088105741" className="hover:text-blue-600">
                      7088105741
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-red-50 p-6 rounded-lg border border-red-100 mt-8">
              <h3 className="text-xl font-bold text-red-700 mb-2">
                Emergency Services 24 x7
              </h3>
              <p className="text-gray-700 font-medium mb-1">
                Any enquiry for hospital services
              </p>
              <a
                href="tel:7055400400"
                className="text-2xl font-bold text-red-600 hover:text-red-800"
              >
                7055400400
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="w-[350px] ml-3 md:w-full h-full md:my-5 md:mx-20" data-aos="fade-right">
            <img src={map} alt="Map" />
          </div>

          <div className="bg-white p-8 md:p-10 m-5 md:mr-10 rounded-xl shadow-lg border border-gray-100" data-aos="fade-left">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Get in Touch
            </h3>
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all bg-white"
                >
                  <option value="">Select a subject</option>
                  <option value="admission">Admission Inquiry</option>
                  <option value="general">General Inquiry</option>
                  <option value="hr">HR / Jobs</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg transform active:scale-95"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
