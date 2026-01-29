import React from 'react';
import chairman from "../assets/chairman.jpg";
import vc from "../assets/pankaj.jpg";
import md from "../assets/manojagarwal-md.jpg";
import dean from "../assets/dean-img2.jpg";

const profiles = [
    { img: chairman, title: "Chairman", name: "Dr. R.K. Agarwal" },
    { img: vc, title: "Vice Chairman", name: "Mr. Pankaj Agarwal" },
    { img: md, title: "Managing Director", name: "Mr. Manoj Agarwal" },
    { img: dean, title: "Dean", name: "Prof. (Dr.) A.K. Singh" }
];

export default function Profile() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Leadership</h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Meeting the visionaries guiding our institution towards excellence.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {profiles.map((profile, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className="relative overflow-hidden aspect-[3/4]">
                                <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-blue-600/0 transition-colors duration-300 z-10"></div>
                                <img
                                    src={profile.img}
                                    alt={profile.title}
                                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold text-gray-900 mb-1">{profile.name}</h3>
                                <p className="text-blue-600 font-medium">{profile.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
