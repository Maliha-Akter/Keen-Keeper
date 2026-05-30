import React from 'react';
import navImg from '/navImg.png'
import { Link, NavLink } from 'react-router';
import { IoHomeOutline } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { ImStatsDots } from "react-icons/im";

const Navbar = () => {
    return (
        <div className="flex bg-base-100 shadow-sm justify-between items-center py-4 container mx-auto">
            <div className="">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <Link to={"/"} className=" flex items-center gap-2 text-[#64748B] font-bold text-xl ml-4 px-2 py-1 rounded-xl hover:bg-[#244D3F] hover:text-white transition">
                            <IoHomeOutline />
                            <span>Home</span>
                        </Link>
                        <Link
                            to={"/friends"}
                            className="flex items-center gap-2 text-[#64748B] font-bold text-xl ml-4 px-2 py-1 rounded-xl hover:bg-[#244D3F] hover:text-white transition"
                        >
                            <IoMdTime />
                            <span>Timeline</span>
                        </Link>

                        <Link
                            to="/stats"
                            className="flex items-center gap-2 text-[#64748B] font-bold text-xl ml-4 px-2 py-1 rounded-xl hover:bg-[#244D3F] hover:text-white transition"
                        >
                            <ImStatsDots />
                            <span>Stats</span>
                        </Link>


                    </ul>
                </div>
                <Link className="btn btn-ghost text-xl" to={"/"}>
                    <img src={navImg} alt="" />
                </Link>
            </div>
            {/* <div className="navbar-center ">
                <a className="btn">Button</a>
            </div> */}
            <div className="hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <NavLink to={"/"} className="text-[#64748B] flex items-center font-bold text-xl px-5 py-3 rounded-xl ml-4 gap-2 hover:bg-[#244D3F] hover:text-white transition">
                        <IoHomeOutline />
                        <span>Home</span>
                    </NavLink>
                    <NavLink
                        to={"/friends"}
                        className="flex items-center gap-2 text-[#64748B] font-bold text-xl ml-4 px-4 py-3 rounded-xl hover:bg-[#244D3F] hover:text-white transition"
                    >
                        <IoMdTime />
                        <span>Timeline</span>
                    </NavLink>

                    <NavLink
                        to="/stats"
                        className="flex items-center gap-2 text-[#64748B] font-bold text-xl ml-4 px-4 py-3 rounded-xl hover:bg-[#244D3F] hover:text-white transition"
                    >
                        <ImStatsDots />
                        <span>Stats</span>
                    </NavLink>



                </ul>
            </div>
        </div>
    );
};

export default Navbar;