import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import Navbar from "../components/Navbar";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState("");

  const handleUpdate = () => {
    if (!displayName || !photoURL) {
      setMessage("Please fill in all fields.");
      return;
    }

    updateProfile(user, {
      displayName,
      photoURL,
    })
      .then(() => {
        setMessage("✅ Profile updated successfully!");
        setIsEditing(false);
      })
      .catch((error) => {
        setMessage("❌ Error updating profile: " + error.message);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-50">
      <Navbar />
      <div className="flex flex-col items-center justify-center py-12 px-4">
        <div className="bg-white/80 backdrop-blur-md shadow-lg rounded-2xl p-8 w-full max-w-md text-center border border-green-100">
          <div className="relative">
            <img
              src={
                user?.photoURL ||
                "https://cdn-icons-png.flaticon.com/512/847/847969.png"
              }
              alt="User"
              className="w-28 h-28 rounded-full mx-auto object-cover border-4 border-green-200 shadow-md"
            />
            <h2 className="text-2xl font-semibold mt-4 text-gray-800">
              {user?.displayName || "Unnamed User"}
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              {user?.email || "No email available"}
            </p>
          </div>

          {/* Message */}
          {message && (
            <p className="mt-3 text-sm text-green-700 bg-green-50 px-3 py-1 rounded-md inline-block">
              {message}
            </p>
          )}

          {/* Update Button */}
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="mt-6 w-full py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-md"
            >
              Update Profile
            </button>
          ) : (
            <div className="mt-6 space-y-3 text-left">
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Display Name
                </label>
                <input
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Photo URL
                </label>
                <input
                  type="text"
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
                />
              </div>
              <div className="flex gap-3 mt-4">
                <button
                  onClick={handleUpdate}
                  className="flex-1 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                >
                  Save Changes
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="flex-1 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
