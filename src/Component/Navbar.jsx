import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { IoHomeOutline } from "react-icons/io5";
import { FaRegAddressCard } from "react-icons/fa";
import { RiFileUserLine } from "react-icons/ri";
import { IoBriefcaseOutline } from "react-icons/io5";
import { FaRegNewspaper } from "react-icons/fa6";
import { FaRegAddressBook } from "react-icons/fa6";


export const Navbar = () => {
  return (
    <>
    <nav>
        <div className="container">
            <div className="menu-row p-5 flex flex-wrap justify-between">
                <div className="logo-col">
                <Link to="#"><img src="images/logo.png" alt="logo" /></Link>
                </div>
                <div className="menu">
                    <ul className="flex flex-wrap gap-4 text-[13px] font-medium font-poppins text-inherit">
                        <li><NavLink className={({ isActive }) =>isActive ? "px-[19px] gap-[3px] h-10 rounded-lg bg-gradient-to-r from-[#fa5252] to-[#dd2476] text-white flex items-center" : "px-[19px] gap-[3px] h-10 rounded-lg bg-[#fff] flex items-center hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white"} to="/"> <IoHomeOutline className="text-xl" />Home</NavLink></li>

                        <li><NavLink className={({ isActive }) =>isActive ? "px-[19px] gap-[3px] h-10 rounded-lg bg-gradient-to-r from-[#fa5252] to-[#dd2476] text-white flex items-center" : "px-[19px] gap-[3px] h-10 rounded-lg bg-[#fff] flex items-center hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white"} to='/About'> <FaRegAddressCard className="text-xl" />About</NavLink></li>

                        <li><NavLink className={({ isActive }) =>isActive ? "px-[19px] gap-[3px] h-10 rounded-lg bg-gradient-to-r from-[#fa5252] to-[#dd2476] text-white flex items-center" : "px-[19px] gap-[3px] h-10 rounded-lg bg-[#fff] flex items-center hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white"} to='/Resume'> <RiFileUserLine className="text-xl" />Resume</NavLink></li>

                        <li><NavLink className={({ isActive }) =>isActive ? "px-[19px] gap-[3px] h-10 rounded-lg bg-gradient-to-r from-[#fa5252] to-[#dd2476] text-white flex items-center" : "px-[19px] gap-[3px] h-10 rounded-lg bg-[#fff] flex items-center hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white"} to='/Works'> <IoBriefcaseOutline className="text-xl" />Works</NavLink></li>

                        <li><NavLink className={({ isActive }) =>isActive ? "px-[19px] gap-[3px] h-10 rounded-lg bg-gradient-to-r from-[#fa5252] to-[#dd2476] text-white flex items-center" : "px-[19px] gap-[3px] h-10 rounded-lg bg-[#fff] flex items-center hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white"} to='/Blogs'> <FaRegNewspaper className="text-xl" />Blogs</NavLink></li>

                        <li><NavLink className={({ isActive }) =>isActive ? "px-[19px] gap-[3px] h-10 rounded-lg bg-gradient-to-r from-[#fa5252] to-[#dd2476] text-white flex items-center" : "px-[19px] gap-[3px] h-10 rounded-lg bg-[#fff] flex items-center hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white"} to='/Contact'> <FaRegAddressBook className="text-xl" />Contacts</NavLink></li>
                    </ul>
                    
                </div>
            </div>
        </div>
    </nav>
    </>
  )
}
