import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createUser, setUser, updateUser } = useContext(AuthContext);
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false)

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

  
    if (name.length < 5) {
      setNameError("Name should be at least 5 characters long");
      return;
    } else {
      setNameError("");
    }
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const isLengthValid = password.length >= 6;

    if (!hasUppercase || !hasLowercase || !isLengthValid) {
      let msg = "Password must include: ";
      if (!hasUppercase) msg += "at least one uppercase letter, ";
      if (!hasLowercase) msg += "at least one lowercase letter, ";
      if (!isLengthValid) msg += "minimum 6 characters.";
      setPasswordError(msg);
      return;
    } else {
      setPasswordError("");
    }

    
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate("/");
          })
          .catch(() => setUser(user));
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleTogglePassWordShow = (e) =>{
    e.preventDefault()
     setShowPassword(!showPassword)
  }

  return (
    <div className="flex justify-center items-center min-h-screen ">
     
      <div className="absolute w-72 h-72 rounded-full blur-3xl opacity-40 top-10 left-10 animate-pulse"></div>
      <div className="absolute w-72 h-72 rounded-full blur-3xl opacity-30 bottom-10 right-10 animate-pulse"></div>

      <div className="relative z-10 w-full max-w-md p-8 bg-white/70 backdrop-blur-md rounded-2xl shadow-2xl border border-green-100 hover:shadow-green-200 transition duration-300">
        <h2 className="text-3xl font-extrabold text-center text-green-700 mb-6">
          Create Your Account 🌿
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Join the GreenNest community today
        </p>

        <form onSubmit={handleRegister} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full input input-bordered rounded-xl border-gray-300 focus:border-green-500 focus:ring-green-400 transition"
              // placeholder="Your name"
              required
            />
            {nameError && (
              <p className="text-red-500 text-xs mt-1">{nameError}</p>
            )}
          </div>

          {/* Photo URL */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              className="w-full input input-bordered rounded-xl border-gray-300 focus:border-green-500 focus:ring-green-400 transition"
              // placeholder="https://example.com/photo.jpg"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              className="w-full input input-bordered rounded-xl border-gray-300 focus:border-green-500 focus:ring-green-400 transition"
              // placeholder="you@example.com"
              required
            />
          </div>

          {/* Password */}
          <div >
            <div className="relative">
                <label className="block text-sm font-semibold text-gray-600 mb-1">
              Password
            </label>
            <input
              type={ showPassword? 'text' : 'password'}
              name="password"
              className="w-full input input-bordered rounded-xl border-gray-300 focus:border-green-500 focus:ring-green-400 transition"
              // placeholder="••••••••"
              required
            />
             <button onClick={handleTogglePassWordShow} className="absolute btn border-none bg-white btn-xs top-8 right-5">{showPassword? <FaEyeSlash /> : <FaEye />}</button>
            </div>
            {passwordError && (
              <p className="text-red-500 text-xs mt-1">{passwordError}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-2 font-semibold text-white rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-md"
          >
            Register
          </button>

          <p className="text-sm text-center text-gray-600 mt-5">
            Already have an account?{" "}
            <Link
              to="/auth/login"
              className="text-green-600 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
