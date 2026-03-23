import React from 'react'
import  Icon from './../assets/Icon.svg'
import Moon from './../assets/Moon.svg'
import Search from './../assets/Search.svg'
import Shopping from './../assets/Shopping cart.svg'
import Heart from './../assets/Heart.svg'
import Avatar from './../assets/Avatar.svg'
export default function Navbar() {
 return <div className="navbar bg-base-100 shadow-sm fixed top-0 z-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost ">
        <img src={Icon} alt="Icon"/>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a className='text-gray-800 font-bold'>Home</a></li>
        <li>
          <a className='text-gray-800 font-bold'>Shop</a>
        </li>
        <li><a className='text-gray-800 font-bold'>About</a></li>
        <li><a className='text-gray-800 font-bold'>Contact</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl" href="#"><img src={Moon} alt="Moon" /></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a className='text-gray-800 font-bold'>Home</a></li>
       <li><a className='text-gray-800 font-bold'>Shop</a></li>
       <li><a className='text-gray-800 font-bold'>About</a></li>
        <li><a className='text-gray-800 font-bold'>Contact</a></li>
    </ul>
  </div>
  <div className="navbar-end flex gap-[10px]">
   <button className='btn btn-outline text-gray-800 font-bold'>Log in</button>
   <span class=' text-gray-800 font-bold'>/</span>
   <button class='btn btn-outline text-gray-800 font-bold'>Register</button>
  </div>
</div>
}