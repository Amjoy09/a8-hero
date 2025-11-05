import React from 'react';
import { Link } from 'react-router';
import logo from '../assets/logo.png'

const Navbar = () => {
    return (
        <div className="navbar pl-12 pr-15 bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a href='/'>Home</a></li>
        <li>
          <a href="/applications">Apps</a>
        </li>
        <li><a href="/installation">My Installation</a></li>
      </ul>
    </div>
    <a href='/' className="btn btn-ghost text-xl flex">
       <img className='h-10 w-10' src={logo}/>
        <p className='bg-clip-text text-transparent bg-linear-to-r from-[#632EE3] to-[#9F62F2] font-bold'>HERO.IO</p>
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/' className='hover:text-[#632EE3] hover:underline text-[16px] font-medium'>Home</Link></li>
      <li>
        <a href='/applications' className='hover:text-[#632EE3] hover:underline text-[16px] font-medium'>Apps</a>
      </li>
      <li><a href="/installation" className='hover:text-[#632EE3] hover:underline text-[16px] font-medium'>Installation</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a target='_blank' href='https://github.com/Amjoy09/a8-hero' className="btn rounded-[6px] bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white"><img src="github.png" alt="" /> Contribute</a>
  </div>
</div>
    );
};

export default Navbar;