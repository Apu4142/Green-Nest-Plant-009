import React from "react";

const PlantsCard = ({ plant }) => {
  const { plantName, image, price, rating } = plant;

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg overflow-hidden transition-transform transform hover:-translate-y-1 duration-300">
      <div>
         <img
        src={image}
        alt={plantName}
        className="w-full h-48 "
      />
        </div>
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold text-gray-800">{plantName}</h3>

        <div className="flex justify-between items-center">
          <p className="text-green-600 font-semibold">${price}</p>
          <span className="text-yellow-500 text-sm font-medium">
            ⭐ {rating}
          </span>
        </div>

        <button
          className="mt-3 w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-xl transition-colors"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default PlantsCard;
