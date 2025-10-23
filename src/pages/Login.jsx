import { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
const {signIn} = use(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()
  const [error,setError] = useState("")

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(() => {
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        setError(error.code);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
      {/* Decorative circles */}
      <div className="absolute w-72 h-72 rounded-full blur-3xl opacity-40 top-10 left-10 animate-pulse"></div>
      <div className="absolute w-72 h-72 rounded-full blur-3xl opacity-30 bottom-10 right-10 animate-pulse"></div>

      <div className="relative z-10 w-full max-w-md p-8 bg-white/70 backdrop-blur-md rounded-2xl shadow-2xl border border-green-100 hover:shadow-green-200 transition duration-300">
        <h2 className="text-3xl font-extrabold text-center text-green-700 mb-6">
          Welcome Back 🌿
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Login to continue to your GreenNest account
        </p>

        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              className="w-full input input-bordered rounded-xl border-gray-300 focus:border-green-500 focus:ring-green-400 transition"
              placeholder="you@example.com"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="w-full input input-bordered rounded-xl border-gray-300 focus:border-green-500 focus:ring-green-400 transition"
              placeholder="••••••••"
              required
            />
          </div>

          <div className="flex justify-end">
            <a href="#" className="text-sm text-green-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 mt-2 font-semibold text-white rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-md"
          >
            Sign In
          </button>

          {error && (
            <p className="text-red-500 text-xs text-center mt-2">{error}</p>
          )}

          <p className="text-sm text-center text-gray-600 mt-5">
            Don’t have an account?{" "}
            <Link
              to="/auth/register"
              className="text-green-600 font-semibold hover:underline"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
