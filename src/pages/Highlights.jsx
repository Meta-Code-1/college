import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import mbbsFee from "../assets/MBBS-Fee-Structure-2025.pdf";
import pgFee from "../assets/Fee-Struture-PG-2025-26-1.pdf";
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
    </div>
  );
};

export default Highlights;
