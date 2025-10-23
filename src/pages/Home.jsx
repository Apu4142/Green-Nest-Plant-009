import React from "react";
import { NavLink, useLoaderData } from "react-router";
import PlantsCard from "../components/plantsCard";

const Home = () => {
  const data = useLoaderData();
  const homePlants = data.slice(0, 3);
  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-8">
          🌿 Top Rated Indoor Plants
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {homePlants.map((plant) => (
            <PlantsCard key={plant.plantId} plant={plant} />
          ))}
        </div>
         <div className="border flex justify-center items-center mt-6">
             <NavLink to={"/plants"} className='btn bg-green-400 px-8 font-bold text-lg text-white'>All Plants</NavLink>
         </div>
      </div>
    </div>
  );
};

export default Home;
