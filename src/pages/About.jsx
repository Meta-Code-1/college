import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import aboutbaner1 from '../assets/aboutbaner1.jpg';
import mskdmch1 from '../assets/ms-kdmch1.webp';
import dean from '../assets/dean-img2.jpg';
import pankaj from '../assets/pankaj.jpg';
import manojagarwal from '../assets/manojagarwal-md.jpg';
import chairman from '../assets/chairman.jpg';
import AboutSection from '../components/AboutSection';


const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-auto">
          <div className="md:col-span-12">
            <AboutSection />
          </div>
          <div id="chairman" className="md:col-span-12 bg-gray-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative shadow-2xl scroll-mt-20" data-aos="fade-up">
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
              <div className="relative group">
                <img
                  src={chairman}
                  alt="Chairman"
                  className="w-40 h-40 md:w-52 md:h-52 rounded-3xl object-cover border-4 border-gray-800 shadow-2xl transform transition group-hover:scale-105"
                />
                <div className="absolute -bottom-4 -right-4 bg-blue-600 p-3 rounded-2xl shadow-xl">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.748-9.762 9-10.109V5c-2.987.306-4.694 2.147-5.117 5.041 1.13.19 2.064.72 2.8 1.591.737.87 1.105 2.031 1.105 3.483 0 1.547-.541 2.842-1.622 3.885-1.081 1.043-2.43 1.565-4.043 1.565-1.547 0-2.842-.51-3.885-1.531-1.043-1.02-1.564-2.316-1.564-3.885 0-1.513.524-2.825 1.571-3.937.534-.564 1.157-.964 1.869-1.2l-.003-.003V21h-2.006zM.983 21v-7.391c0-5.704 3.748-9.762 9-10.109V5c-2.987.306-4.694 2.147-5.117 5.041 1.13.19 2.064.72 2.8 1.591.737.87 1.105 2.031 1.105 3.483 0 1.547-.541 2.842-1.622 3.885-1.081 1.043-2.43 1.565-4.043 1.565-1.547 0-2.842-.51-3.885-1.531-1.043-1.02-1.564-2.316-1.564-3.885 0-1.513.524-2.825 1.571-3.937.534-.564 1.157-.964 1.869-1.2l-.003-.003V21H.983z" />
                  </svg>
                </div>
              </div>
              <div className="text-center md:text-left flex-1">
                <p className="text-xl md:text-3xl italic font-semibold leading-relaxed mb-8 text-gray-100">
                  "At KDMCHRC, we believe a healthy community is a fundamental need for the success of any nation. Hence we aim at providing, perpetuating and nurturing, the highest quality education, cutting edge research and state-of-the art patient care."
                </p>
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div>
                    <h4 className="text-2xl font-bold tracking-tight">Dr. Ram Kishore Agarwal</h4>
                    <p className="text-blue-400 font-bold uppercase tracking-widest text-xs">Chairman</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full -ml-32 -mb-32 blur-2xl"></div>
          </div>
          <div className="md:col-span-6 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm transition hover:shadow-md flex flex-col md:flex-row gap-6 font-medium" data-aos="fade-right">
            <div className="md:w-1/3">
              <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden shadow-inner">
                <img
                  src={pankaj}
                  alt="Vice Chairman"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Vice Chairman's Message</h3>
              <p className="text-gray-600 text-sm italic mb-4 leading-relaxed">
                "At Kanti Devi Medical College, Hospital and Research Center believe that the Hands that serve are Holier. We also believe in the service to society through education for enrichment and enlightenment."
              </p>
              <h4 className="font-bold text-gray-900">Pankaj Agarwal</h4>
              <p className="text-blue-600 text-xs font-bold uppercase tracking-widest">Vice Chairman</p>
            </div>
          </div>
          <div className="md:col-span-6 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm transition hover:shadow-md flex flex-col md:flex-row gap-6 font-medium" data-aos="fade-left">
            <div className="md:w-1/3">
              <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden shadow-inner">
                <img
                  src={manojagarwal}
                  alt="MD"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Managing Director's Message</h3>
              <p className="text-gray-600 text-sm italic mb-4 leading-relaxed">
                "The KDMCHRC is started not only to serve the people of Brij region but also to impart high quality training to Building Doctor’s. This year we are very proud to announce the commencement of the medical course."
              </p>
              <h4 className="font-bold text-gray-900">Manoj Agrawal</h4>
              <p className="text-blue-600 text-xs font-bold uppercase tracking-widest">Managing Director</p>
            </div>
          </div>
          <div className="md:col-span-12 bg-blue-50 rounded-3xl p-8 md:p-10 border border-blue-100 shadow-sm flex flex-col md:flex-row items-center gap-10 font-medium" data-aos="fade-up">
            <div className="text-center md:text-left flex-1 order-2 md:order-1">
              <h3 className="text-3xl font-bold text-blue-900 mb-4 tracking-tight">Dean's Message</h3>
              <p className="text-lg text-gray-700 italic leading-relaxed mb-6">
                "The educational program at Kanti Devi Medical College, Hospital and Research Center Mathura will definitely help you to realize your great potential to grow into a promising Doctor of 21st century."
              </p>
              <div>
                {/* <h4 className="text-xl font-bold text-gray-900">Manoj Agrawal</h4>
                  <p className="text-blue-600 font-bold uppercase tracking-widest text-xs">Dean</p> */}
              </div>
            </div>
            <div className="md:w-1/4 order-1 md:order-2">
              <img
                src={dean}
                alt="Dean"
                className="w-full aspect-square rounded-full border-8 border-white shadow-xl object-cover"
              />
            </div>
          </div>
          <div id="principal" className="md:col-span-12 bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-sm transition hover:shadow-md flex flex-col md:flex-row gap-10 scroll-mt-20" data-aos="fade-up">
            <div className="md:w-1/4 shrink-0">
              <div className="aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden shadow-inner">
                <img
                  src={mskdmch1}
                  alt="Dr. Gagan Deep"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-center font-medium">
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-gray-900 mb-2 underline decoration-blue-500 underline-offset-8">Medical Superintendent Profile</h3>
                <h4 className="text-2xl font-bold text-blue-900 mt-4">Dr. Gagan Deep</h4>
                <p className="text-gray-500 font-bold text-sm uppercase tracking-widest">MBBS, MD (General Medicine)</p>
                <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mt-1">Medical Superintendent cum Professor, General Medicine</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600 bg-gray-50 p-6 rounded-2xl">
                <div className="flex flex-col gap-3">
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-gray-900 shrink-0">Address:</span>
                    <span>Flat No. 03, Block- B, Faculty Quarter, K.D. Medical College Campus, NH #2, Akabarpur, Mathura – 281406, U.P.</span>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-gray-900 shrink-0">Mobile:</span>
                    <span>+91-9899995487</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-gray-900 shrink-0">Email:</span>
                    <a href="mailto:mskdmchrc@gmail.com" className="text-blue-600 hover:underline">mskdmchrc@gmail.com</a>
                  </div>
                  <div className="pt-2 border-t border-gray-200 mt-2">
                    <p className="font-bold text-gray-900">Institution:</p>
                    <p className="text-xs">Kanti Devi Medical College, Hospital & Research Centre, Mathura</p>
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

export default About;
