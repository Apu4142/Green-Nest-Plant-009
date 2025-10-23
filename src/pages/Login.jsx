import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
       <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="font-bold text-2xl text-center mt-12 border-b-2 pb-5 border-gray-200 mx-5">
          Login Your Account
        </h2>
        <form  className="card-body">
          <fieldset className="fieldset">
            {/* email */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
            />
            {/* password */}
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
            <p className="font-bold text-center pt-2">
              Dont’t Have An Account ?{" "}
              <Link className="text-secondary" to={"/auth/register"}>
                Register
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
    );
};

export default Login;