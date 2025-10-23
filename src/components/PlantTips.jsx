import React from 'react';

const PlantTips = () => {
    const tips = [
        {
            icon: (
              <img className='w-24 h-20 object-cover' src="https://i.ibb.co/nMWqksc6/vecteezy-watering-plant-icon-illustration-53355004.jpg" alt="" />
            ),
            title: "Watering Guide",
            description: "Smart watering for lush life levels or alkalinity."
        },
        {
            icon: (
                 <img className='w-18 h-18  object-cover' src="https://i.ibb.co/TMbLbsp8/tl.webp" alt="" />
            ),
            title: "Sunlight Needs",
            description: "Illuminate the right spots, bite by bite optimal growth."
        },
        {
            icon: (
               <img className='20 h-18 object-cover' src="https://i.ibb.co/xKDqbXzb/fertilization.png" alt="" />
            ),
            title: "Fertilizing Schedule",
            description: "treats timings and preparation of new ideas."
        }
    ];

    return (
        <div className="bg-gray-50 py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-800 mb-12">
                    Plant Care Tips
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {tips.map((tip, index) => (
                        <div 
                            key={index}
                            className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center"
                        >
                            <div className="mb-6">
                                {tip.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                {tip.title}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                {tip.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PlantTips;