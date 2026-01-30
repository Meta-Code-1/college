import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import mbbsFee from "../assets/MBBS-Fee-Structure-2025.pdf";
import pgFee from "../assets/Fee-Struture-PG-2025-26-1.pdf";
import antiRaggingUG from "../assets/anti-raging-affidavit-ug.pdf";
import antiRaggingPG from "../assets/Anti-Ragging-Affidavit-PG.pdf";
import AOS from "aos";
import "aos/dist/aos.css";

const Highlights = () => {
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
    <div className="min-h-screen bg-gray-200 px-4 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Fee Structure */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-down">
            <h1
              id="fee-structure"
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-serif scroll-mt-24"
            >
              Approval & <span className="text-orange-500">Fee Structure</span>
            </h1>
            <div className="h-1 w-24 bg-orange-500 mx-auto rounded-full"></div>
          </div>

          <div
            className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
            data-aos="fade-up"
          >
            {/* Under Graduate */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded animate-pulse">
                  NEW
                </span>
                <h2 className="text-xl font-bold text-gray-800 tracking-wide uppercase">
                  Under Graduate Course
                </h2>
              </div>
              <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg hover:bg-orange-50 transition-colors">
                <span className="font-semibold text-gray-700">
                  FEE STRUCTURE FOR MBBS COURSE 2025-26
                </span>
                <a
                  href={mbbsFee}
                  download="MBBS-Fee-Structure-2025.pdf"
                  className="text-blue-600 font-bold hover:underline flex items-center gap-2"
                >
                  Download <span>⬇</span>
                </a>
              </div>
            </div>

            {/* Post Graduate */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded animate-pulse">
                  NEW
                </span>
                <h2 className="text-xl font-bold text-gray-800 tracking-wide uppercase">
                  Post Graduate Course
                </h2>
              </div>
              <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg hover:bg-orange-50 transition-colors">
                <span className="font-semibold text-gray-700">
                  Post Graduate (M.D. / M.S.) Fee Structure for Batch 2025-26
                </span>
                <a
                  href={pgFee}
                  download="PG-Fee-Structure-2025-26.pdf"
                  className="text-blue-600 font-bold hover:underline flex items-center gap-2"
                >
                  Download <span>⬇</span>
                </a>
              </div>
            </div>

            {/* PG JR Stipend */}
            <div className="p-6 bg-gray-50">
              <h2 className="text-xl font-bold text-gray-800 tracking-wide uppercase mb-4 border-l-4 border-orange-500 pl-3">
                PG JR Stipend Details
              </h2>
              <div className="space-y-3 pl-4">
                <p className="text-gray-700 font-medium border-b border-gray-200 pb-2">
                  PG JR 1st YEAR :{" "}
                  <span className="text-gray-900 font-bold">
                    32000/- Per Month
                  </span>
                </p>
                <p className="text-gray-700 font-medium border-b border-gray-200 pb-2">
                  PG JR 2nd YEAR :{" "}
                  <span className="text-gray-900 font-bold">
                    34000/- Per Month
                  </span>
                </p>
                <p className="text-gray-700 font-medium">
                  PG JR 3rd YEAR :{" "}
                  <span className="text-gray-900 font-bold">
                    36000/- Per Month
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Anti Ragging */}
      <div
        id="anti-ragging"
        className="max-w-4xl mx-auto mt-12 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
        data-aos="fade-up"
      >
        <div className="p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-300">
            Anti Ragging Committee
          </h2>

          <h3 className="text-gray-600 font-bold uppercase mb-3 text-sm tracking-wide">
            ANTI RAGGING COMMITTEE
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href={antiRaggingUG}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-gray-300 rounded-lg px-6 py-3 text-blue-600 font-medium hover:bg-blue-50 transition-colors bg-white shadow-sm hover:shadow-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
              Anti Ragging Affidavit (UG)
            </a>
            <a
              href={antiRaggingPG}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-gray-300 rounded-lg px-6 py-3 text-blue-600 font-medium hover:bg-blue-50 transition-colors bg-white shadow-sm hover:shadow-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
              Anti Ragging Affidavit (PG)
            </a>
          </div>

          <h3 className="text-gray-600 font-bold uppercase mb-3 text-sm tracking-wide">
            TOLL FREE NUMBER TO REPORT RAGGING
          </h3>
          <div className="bg-orange-50 p-4 rounded-lg mb-8 border border-orange-100 inline-block w-full sm:w-auto">
            <p className="text-gray-800 font-semibold text-lg">
              » Toll Free Number 1800-270-4121
            </p>
          </div>

          <h3 className="text-gray-600 font-bold text-sm mb-3 tracking-wide">
            No. of cases reported and action taken
          </h3>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 max-w-sm flex justify-between items-center">
            <span className="text-gray-600 font-medium">May -2020</span>
            <span className="font-bold text-gray-900 border-l border-gray-300 pl-8">
              Nil
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
