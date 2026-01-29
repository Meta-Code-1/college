import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  BookOpenIcon,
  AcademicCapIcon,
  ClockIcon,
  UserGroupIcon,
  ClipboardDocumentCheckIcon,
  CheckCircleIcon
} from "@heroicons/react/24/outline";

const CURRICULUM_DATA = [
  {
    title: "UG Curriculum 2022-2023 (Phase- 1)",
    links: [
      "Subject Wise Distribution of Hours",
      "TIMETABLES FOR THE ACADEMIC YEAR 2020-21",
      "Foundation Course",
    ],
  },
  {
    title: "UG Curriculum Phase -2 Batch 2020",
    links: [
      "Section 18A",
      "Section 18B",
      "Section 18C",
      "Section 18D",
      "Section 18E",
      "Check List",
    ],
  },
  {
    title: "UG Curriculum Phase -2 Batch 2019",
    links: [
      "Section 18A",
      "Section 18B",
      "Section 18C",
      "Section 18D",
      "Section 18E",
    ],
  },
  {
    title: "UG Curriculum Phase -3 (Part 1) Batch 2019",
    links: [
      "Section 18A",
      "Section 18B",
      "Section 18C",
      "Section 18D",
      "Section 18E",
    ],
  },
  {
    title: "UG Curriculum 2020-2021",
    links: ["Foundation Course", "Master Time Table", "Undertaking"],
  },
  {
    title: "UG Curriculum 2019-2020",
    links: [
      "Foundation Course",
      "Monitoring Checklist of Foundation Course",
      "Time Table for MBBS Batch 2019-20",
      "Monitoring Checklist of Master Time Table",
    ],
  },
];

const Course = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">
            Academics & <span className="text-orange-600">Curriculum</span>
          </h1>
          <div className="h-1.5 w-24 bg-orange-500 mx-auto rounded-full shadow-sm"></div>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Excellence in medical education with state-of-the-art facilities and comprehensive curriculum
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Intro Section */}
            <div
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
              data-aos="fade-up"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-orange-100 rounded-lg">
                  <AcademicCapIcon className="w-8 h-8 text-orange-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 pt-2">
                  Best Private Medical Colleges in India For MBBS
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-justify pl-0 md:pl-4 border-l-0 md:border-l-4 border-orange-200">
                KD Medical College is widely recognized as one of the premier
                <strong> Private Medical Colleges in India</strong>.
                We offer affordable and transparent admission processes for our MBBS program in Mathura.
                Our institution strictly adheres to all regulatory guidelines regarding
                <strong> MBBS Fee Structure</strong>, duration, and eligibility.
                Admissions are conducted exclusively through NEET, ensuring merit-based selection.
              </p>
            </div>

            {/* Curriculum Grid */}
            <div className="space-y-6" data-aos="fade-up">
              
              <div className="grid md:grid-cols-2 gap-6">
                {CURRICULUM_DATA.map((item, idx) => (
                  <div
                    key={idx}
                    className="group bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-orange-200 transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-1 h-full bg-orange-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                    <h4 className="text-lg font-bold text-gray-800 mb-4 group-hover:text-orange-600 transition-colors">
                      {item.title}
                    </h4>
                    <ul className="space-y-2">
                      {item.links.map((link, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircleIcon className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                          <a
                            href="#"
                            className="text-gray-600 hover:text-orange-600 hover:underline transition-colors"
                          >
                            {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar / Course Details */}
          <div className="lg:col-span-1">
            <div
              className="bg-white rounded-2xl shadow-lg border border-gray-100 sticky top-8 overflow-hidden"
              data-aos="fade-left"
            >
              <div className="bg-orange-600 p-6 text-white">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <ClipboardDocumentCheckIcon className="w-6 h-6" />
                  Course Overview
                </h2>
                <p className="text-orange-100 text-sm mt-1">Under Graduation Programme</p>
              </div>

              <div className="p-6 space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <BookOpenIcon className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-gray-400 uppercase tracking-wide">Programme</h5>
                    <p className="font-semibold text-gray-800">MBBS</p>
                    <p className="text-xs text-gray-500">Bachelor of Medicine & Bachelor of Surgery</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <UserGroupIcon className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-gray-400 uppercase tracking-wide">Mode</h5>
                    <p className="font-semibold text-gray-800">Full Time</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <ClockIcon className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-gray-400 uppercase tracking-wide">Duration</h5>
                    <p className="font-semibold text-gray-800">4.5 Years</p>
                    <p className="text-xs text-gray-500">+ 1 Year Compulsory Rotatory Internship</p>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-6">
                  <h5 className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-3 flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4" /> Eligibility Criteria
                  </h5>
                  <div className="bg-orange-50 rounded-lg p-4 space-y-3">
                    <div>
                      <span className="block text-xs font-bold text-orange-700 uppercase">Age Limit</span>
                      <p className="text-sm text-gray-700">17+ years by Dec 31st of admission year</p>
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-orange-700 uppercase">Qualifying Exam</span>
                      <p className="text-sm text-gray-700">10+2 with PCB & English (Min 50%)</p>
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-orange-700 uppercase">Entrance Test</span>
                      <p className="text-sm text-gray-700">NEET-UG Qualified</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
