import React from 'react';
import aboutbaner1 from '../assets/aboutbaner1.jpg';
import collegeImg from '../assets/college/kdmedical-college1.jpg';

const AboutSection = () => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-white overflow-hidden" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">

          <div className="w-full lg:w-[48%] flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="inline-flex self-start px-4 py-2 rounded-full bg-blue-50 border border-blue-100">
                <span className="text-sm font-bold tracking-wide text-blue-600 uppercase">
                  Who We Are
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                Redefining <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Medical Excellence</span> in the Region
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                Kanti Devi Medical College Hospital and Research Center is a flagship gem of the RK Group, dedicated to addressing the scarcity of doctors in India. With a 720-bed multi-specialty hospital and ultra-modern facilities, we are poised to be a premier institute for medical education.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 mt-2">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Premier Institute</h4>
                  <p className="text-sm text-gray-500">Top-tier Education</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Advanced Research</h4>
                  <p className="text-sm text-gray-500">Modern Facilities</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[48%] relative mt-12 lg:mt-0">
            <div className="relative w-full aspect-square md:aspect-[4/3] max-w-lg mx-auto lg:max-w-none">

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-100/50 to-cyan-100/50 rounded-full blur-3xl -z-10"></div>

              <div className="absolute top-0 right-0 w-[85%] h-[85%] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white/50 z-10 transform rotate-3 hover:rotate-2 transition-all duration-500">
                <img
                  src={aboutbaner1}
                  alt="Medical Campus"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              <div className="absolute bottom-0 left-0 w-[65%] h-[65%] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white z-20 transform -rotate-3 hover:-rotate-1 transition-all duration-500">
                <img
                  src={collegeImg}
                  alt="Students"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -bottom-6 right-8 z-30 animate-bounce-slow hidden sm:block">
                <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-50 flex flex-col items-center">
                  <span className="text-4xl font-black text-blue-600">700+</span>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">beds multi-specialty hospital</span>
                </div>
              </div>

              <div className="absolute -top-8 -left-8 w-24 h-24 text-blue-200 z-0">
                <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
                  <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="2" fill="currentColor" />
                  </pattern>
                  <rect width="100" height="100" fill="url(#dots)" />
                </svg>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
