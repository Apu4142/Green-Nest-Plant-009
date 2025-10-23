import React from "react";
import { motion } from "framer-motion";

const GreenExperts = () => {
  const experts = [
    {
      name: "Dr. Anya Sharma",
      role: "Horticulturist",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    },
    {
      name: "Sirach Foilem",
      role: "Reperstudiet",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    },
    {
      name: "Elina Martinez",
      role: "Indoor Plant Designer",
      image:
        "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=400&q=80",
    },
    {
      name: "Marcus Lee",
      role: "Botany Specialist",
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&q=80",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-green-50 via-white to-emerald-50 overflow-hidden">
   
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply opacity-20 blur-3xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
      
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-800">
            Meet Our <span className="text-emerald-600">Green Experts</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Our passionate team of plant professionals is here to help you
            nurture, design, and grow your perfect indoor garden.
          </p>
        </div>

    
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {experts.map((expert, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6 flex flex-col items-center text-center border border-green-100 transition-all duration-300"
            >
              <div className="relative w-32 h-32 mb-5">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-full h-full object-cover rounded-full shadow-md border-4 border-green-100"
                />
                <div className="absolute inset-0 rounded-full ring-2 ring-green-400/50 animate-pulse"></div>
              </div>
              <h4 className="text-xl font-semibold text-green-800 mb-1">
                {expert.name}
              </h4>
              <p className="text-gray-500">{expert.role}</p>
            </motion.div>
          ))}
        </div>

      
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-green-50 border border-green-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-green-100 rounded-full">
                <svg
                  className="w-7 h-7 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h5 className="text-lg font-semibold text-gray-800 mb-2">
                  Expert Plant Care Advice
                </h5>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Receive personalized plant care tips directly from our
                  certified horticulturists, perfectly suited to your space and
                  environment.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-green-50 border border-green-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-green-100 rounded-full">
                <svg
                  className="w-7 h-7 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div>
                <h5 className="text-lg font-semibold text-gray-800 mb-2">
                  Sustainable Living Tips
                </h5>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Discover eco-conscious ways to decorate and maintain your
                  indoor space while helping our planet thrive.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GreenExperts;
