import React, { useContext, useState } from "react";
import { useLoaderData, useParams, Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";

const PlantsDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const plant = data.find((p) => p.plantId === parseInt(id));
  const { user } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: user?.displayName || "",
    email: user?.email || "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(`Consultation booked for ${plant.plantName}! 🌱`);
    setFormData({ name: user?.displayName || "", email: user?.email || "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        <div className="flex justify-center">
          <img
            src={plant.image}
            alt={plant.plantName}
            className="rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300 w-full max-w-md"
          />
        </div>

        <div className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-green-100">
          <h2 className="text-4xl font-bold text-green-700 mb-3">
            {plant.plantName}
          </h2>
          <p className="text-gray-600 mb-4 italic">{plant.category}</p>
          <p className="text-gray-700 mb-4">{plant.description}</p>

          <div className="grid grid-cols-2 gap-4 text-sm mb-4">
            <p>
              <span className="font-semibold">💰 Price:</span> ${plant.price}
            </p>
            <p>
              <span className="font-semibold">⭐ Rating:</span> {plant.rating}
            </p>
            <p>
              <span className="font-semibold">📦 In Stock:</span>{" "}
              {plant.availableStock}
            </p>
            <p>
              <span className="font-semibold">🪴 Care Level:</span>{" "}
              {plant.careLevel}
            </p>
          </div>

          <p className="text-sm text-gray-500 mb-6">
            Provided by{" "}
            <span className="font-semibold">{plant.providerName}</span>
          </p>

          <hr className="my-6 border-gray-200" />

          <h3 className="text-2xl font-bold text-green-700 mb-3">
            Book a Consultation 🌿
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full input input-bordered rounded-xl border-gray-300 focus:border-green-500 focus:ring-green-400"
                placeholder="Your name"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full input input-bordered rounded-xl border-gray-300 focus:border-green-500 focus:ring-green-400"
                placeholder="you@example.com"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 font-semibold text-white rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-md"
            >
              Book Now
            </button>
          </form>

          <p className="text-center text-gray-500 text-sm mt-6">
            <Link
              to="/plants"
              className="text-green-600 font-semibold hover:underline"
            >
              ← Back to Plants
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default PlantsDetails;
