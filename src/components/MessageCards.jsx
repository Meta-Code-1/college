import React from "react";
import chairman from "../assets/chairman.jpg";
import vc from "../assets/pankaj.jpg";
import md from "../assets/manojagarwal-md.jpg";
import dean from "../assets/dean-img2.jpg";

const cards = [
  {
    title: "Chairman",
    description:
      "Embark on a spiritual journey to discover your inner self. Soul Trek is not just a travel experience but a path to mindfulness, bringing students closer to nature and their own consciousness.",
    image: chairman,
    color: "bg-[#FFFAF0]", // Warm cream
    borderColor: "border-orange-200",
  },
  {
    title: "Vice Chairman",
    description:
      "Every year at Rishihood University, our learners and faculty take on the 100 Km walk. Over two days, we walk 50 km forward and 50 km back to test our endurance and find our purpose.",
    image: vc,
    color: "bg-white", // Pure white
    borderColor: "border-gray-200",
  },
  {
    title: "Managing Director",
    description:
      "Got a business idea? The Venture Studio is your launchpad. We provide mentorship, resources, and connections to turn your innovative concepts into successful startups.",
    image: md,
    color: "bg-[#F0F9FF]", // Light blue
    borderColor: "border-blue-200",
  },
  {
    title: "Dean",
    description:
      "Got a business idea? The Venture Studio is your launchpad. We provide mentorship, resources, and connections to turn your innovative concepts into successful startups.",
    image: dean,
    color: "bg-[#F0F9FF]", // User duplicated color in previous edit, using Light Purple for distinction or keep as requested. Keeping light blue as user set, but alternating is often better. I will stick to user's edit but maybe vary slightly for visual separation if needed, or just keep it.
    borderColor: "border-blue-200",
  },
];

const MessageCards = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 font-serif">
            Leadership & Vision
          </h2>
          <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col gap-10 max-w-5xl mx-auto pb-24">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`sticky ${card.color} rounded-3xl p-8 md:p-12 shadow-xl border ${card.borderColor} transition-all duration-300 transform`}
              style={{
                top: `${130 + index * 30}px`, // Adjusted offset for better visibility
                zIndex: index, // Ensure proper stacking
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="order-2 md:order-1 space-y-6">
                  <h3 className="text-2xl md:text-4xl font-bold text-gray-800 font-serif">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="order-1 md:order-2 h-64 md:h-80 w-full relative group">
                  <div className="absolute inset-0 bg-gray-900/5 rounded-2xl transform rotate-3 transition-transform group-hover:rotate-6"></div>
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover rounded-2xl shadow-lg relative transform transition-transform group-hover:-translate-y-2 bg-white"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MessageCards;
