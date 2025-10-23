import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    return (
       <div className="navbar bg-white shadow-sm px-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-white rounded-box z-10 mt-3 w-52 p-2 shadow">
                       <NavLink to={'/'} className="text-gray-700"> Home</NavLink>
                    <NavLink to={'/plants'}  className="text-gray-700"> Plants</NavLink>
                    </ul>
                </div>
                <a className="flex items-center gap-1 text-xl font-serif">
                    <span className="text-2xl">🌿</span>
                    <span className="text-gray-700">GreenNest</span>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <NavLink to={'/'} className="text-gray-700 btn mr-5"> Home</NavLink>
                    <NavLink to={'/plants'}  className="text-gray-700 btn"> Plants</NavLink>
                </ul>
            </div>
            <div className="navbar-end flex items-center gap-4">
               
                <div className="avatar">
                    <div className="w-10 rounded-full ring ring-green-200 ring-offset-2">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="User" />
                    </div>
                   
                </div>
                 <div>
                        <Link className='btn bg-green-500 rounded-lg text-white font-bold' to={"/auth/login"}>Login</Link>
                    </div>
            </div>
        </div>
    );
};

export default Navbar;
