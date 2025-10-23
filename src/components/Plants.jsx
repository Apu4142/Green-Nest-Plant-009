import React from 'react';
import { useLoaderData } from 'react-router';
import PlantsCard from './plantsCard';


const Plants = () => {
    const data = useLoaderData()
    
    return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-center text-green-700 mb-8">
        🌿 Top Rated Indoor Plants
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.map((plant) => (
          <PlantsCard key={plant.plantId} plant={plant} />
        ))}
      </div>
    </div>
    );
};

export default Plants;