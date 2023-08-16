import React from 'react'
import logo from '../images/logo.png';
import { NavLink } from 'react-router-dom';

import { GiHouse } from 'react-icons/gi'
import { BsFileEarmarkTextFill } from 'react-icons/bs'
import { GiCargoCrane } from 'react-icons/gi'
import { IoEarthSharp } from 'react-icons/io5'

const Navbar = () => {
    //NavLink被點擊的時候的css
    const activeNavLink = {
        backgroundColor: '#ffe4a9', 
        color:'#603e1b', 
        fontWeight:'bold'
    }
    //大裝置NavLink的css
    const normalNavLink = "hover:bg-[#ffe4a9] hover:text-[#603e1b] hover:font-bold py-5";
    
    //小裝置NavLink的css
    const dropdownNavLink = "hover:bg-[#ffe4a9] hover:text-[#603e1b] hover:font-bold"
  return (
    <>
        <div className="navbar bg-[#fff3da] text-[#54524a] font-['Stick'] h-12">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <NavLink className={dropdownNavLink} style={ ({isActive}) => isActive ? activeNavLink : null} to="/" exact>
                                <GiHouse id="homelogo" size={40} color="#195385"/>首頁
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={dropdownNavLink} style={ ({isActive}) => isActive ? activeNavLink : null} to="/introduction">
                                <BsFileEarmarkTextFill size={40} color="#ffc96f"/>計畫簡介
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={dropdownNavLink} style={ ({isActive}) => isActive ? activeNavLink : null} to="/construction">
                                <GiCargoCrane id="homelogo" size={40} color="#855a19"/>施工影像
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={dropdownNavLink} style={ ({isActive}) => isActive ? activeNavLink : null} to="/public">
                                <IoEarthSharp id="homelogo" size={40} color="#585858"/>公開資訊
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <img className="object-contain max-w-[140px] mt-2" src={logo} alt="logo" />
                <a className="btn btn-ghost text-2xl" href='##'>嘉皓營造</a>
            </div>
            <div className="navbar-center hidden lg:flex items-center">
                <ul className="menu menu-horizontal px-1 text-xl">
                    <li>
                        <NavLink className={normalNavLink} style={ ({isActive}) => isActive ? activeNavLink : null} to="/">
                            <GiHouse id="homelogo" size={30} color="#195385"/>首頁
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={normalNavLink} style={ ({isActive}) => isActive ? activeNavLink : null} to="/introduction">
                            <BsFileEarmarkTextFill size={30} color="#ffc96f"/>計畫簡介
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={normalNavLink} style={ ({isActive}) => isActive ? activeNavLink : null} to="/construction">
                            <GiCargoCrane id="homelogo" size={30} color="#855a19"/>施工影像
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={ normalNavLink } style={ ({isActive}) => isActive ? activeNavLink : null} to="/public">
                            <IoEarthSharp id="homelogo" size={30} color="#585858"/>公開資訊
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Navbar