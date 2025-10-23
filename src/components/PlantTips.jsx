import React from 'react';

const PlantTips = () => {
  const tips = [
    {
      icon: "https://i.ibb.co/3gkbSTd/watering-plants.png",
      title: "Watering Guide",
      description: "Learn smart watering techniques to keep your plants hydrated without overwatering."
    },
    {
      icon: "https://i.ibb.co/TMbLbsp8/tl.webp",
      title: "Sunlight Needs",
      description: "Discover the optimal sunlight requirements for your plants to thrive indoors."
    },
    {
      icon: "https://i.ibb.co/xKDqbXzb/fertilization.png",
      title: "Fertilizing Schedule",
      description: "Get tips on when and how to fertilize your plants for healthy growth."
    }
  ];

  return (
    <section className="bg-green-50 py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-green-800 mb-4">
          🌱 Plant Care Tips
        </h2>
        <p className="text-gray-600 mb-12 text-lg">
          Simple, effective advice to help your indoor garden flourish.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-28 h-28 mb-6 rounded-full bg-green-100 flex items-center justify-center shadow-inner">
                <img src={tip.icon} alt={tip.title} className="w-16 h-16 object-contain" />
              </div>
              <h3 className="text-2xl font-bold text-green-700 mb-3">{tip.title}</h3>
              <p className="text-gray-600 text-base leading-relaxed">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlantTips;
