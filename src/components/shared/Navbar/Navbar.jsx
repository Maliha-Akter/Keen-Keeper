import React, { useState } from 'react';
import navImg from '/navImg.png'
import { Link, NavLink } from 'react-router';
import { IoHomeOutline } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { ImStatsDots } from "react-icons/im";
import { HiMenu, HiX } from "react-icons/hi";



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="flex bg-base-100 shadow-sm justify-between items-center py-4 container mx-auto">
            <div className="">
                <div className="dropdown relative">
                    <div
                        onClick={() => setIsOpen(!isOpen)}
                        className="btn btn-ghost lg:hidden"
                    >
                        {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                    </div>

                    {isOpen && (
                        <ul className="menu menu-sm absolute left-0 mt-3 w-52 bg-base-100 rounded-box shadow z-50">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `flex items-center gap-2 font-bold text-xl mb-4 ml-4 px-5 py-3 rounded-xl transition ${isActive
                                        ? "bg-[#244D3F] text-white"
                                        : "text-[#64748B] hover:bg-[#244D3F] hover:text-white"
                                    }`
                                }
                            >
                                <IoHomeOutline />
                                <span>Home</span>
                            </NavLink>

                            <NavLink
                                to="/timeLine"
                                className={({ isActive }) =>
                                    `flex items-center gap-2 font-bold text-xl ml-4 mb-4 px-5 py-3 rounded-xl transition ${isActive
                                        ? "bg-[#244D3F] text-white"
                                        : "text-[#64748B] hover:bg-[#244D3F] hover:text-white"
                                    }`
                                }
                            >
                                <IoMdTime />
                                <span>Timeline</span>
                            </NavLink>

                            <NavLink
                                to="/stats"
                                className={({ isActive }) =>
                                    `flex items-center gap-2 font-bold text-xl ml-4 px-5 py-3 rounded-xl transition ${isActive
                                        ? "bg-[#244D3F] text-white"
                                        : "text-[#64748B] hover:bg-[#244D3F] hover:text-white"
                                    }`
                                }
                            >
                                <ImStatsDots />
                                <span>Stats</span>
                            </NavLink>
                        </ul>
                    )}
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
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `flex items-center gap-2 font-bold text-xl ml-4 px-5 py-3 rounded-xl transition ${isActive
                                ? "bg-[#244D3F] text-white"
                                : "text-[#64748B] hover:bg-[#244D3F] hover:text-white"
                            }`
                        }
                    >
                        <IoHomeOutline />
                        <span>Home</span>
                    </NavLink>

                    <NavLink
                        to="/timeLine"
                        className={({ isActive }) =>
                            `flex items-center gap-2 font-bold text-xl ml-4 px-5 py-3 rounded-xl transition ${isActive
                                ? "bg-[#244D3F] text-white"
                                : "text-[#64748B] hover:bg-[#244D3F] hover:text-white"
                            }`
                        }
                    >
                        <IoMdTime />
                        <span>Timeline</span>
                    </NavLink>

                    <NavLink
                        to="/stats"
                        className={({ isActive }) =>
                            `flex items-center gap-2 font-bold text-xl ml-4 px-5 py-3 rounded-xl transition ${isActive
                                ? "bg-[#244D3F] text-white"
                                : "text-[#64748B] hover:bg-[#244D3F] hover:text-white"
                            }`
                        }
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