import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { menuToggle } from '../Utils/SideBarSlice';
import { Link } from 'react-router-dom';
import { YtSearchSuggestAPI } from '../Utils/Constant';
import SearchBar from './SearchBar';

const Header = () => {

  const dispatch = useDispatch();

  function toggleSideBar(){
      dispatch(menuToggle())
  }


  return (
    <div className='grid grid-flow-col p-3 mb-3 shadow-lg pb-3'>

   <div className='flex col-span-3 '>
  <img  alt="menu-Icon" className='  w-10 h-8 cursor-pointer' onClick={()=>{toggleSideBar()}} src='https://banner2.cleanpng.com/20180628/zaz/kisspng-computer-icons-hamburger-button-menu-new-menu-5b34724be5a1f0.5796308115301637879406.jpg'/>
  <Link to='/'>
   <img className='w-[80px]  sm:w-[80px] md:w-[100px]  pt-1  pl-3 ml-4' alt='logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCa4EDbkI8ATSXs7s-ovSP2cX_Qfw06aSRWA&usqp=CAU" />  
   </Link>
    </div>

   <div className='col-span-6'>
     <SearchBar/>
    </div>
    

    <div className='col-span-3'>
      <div className='flex border float-end items-end rounded-full relative left-16 sm:left-0 p-2 h-9 w-[120px]'>
       <img className=" pl-2 absolute   w-8 h-6" src="https://www.pngfind.com/pngs/m/34-349693_circled-user-icon-transparent-background-username-icon-hd.png" />
       <span className=' absolute left-11 mx-2 '>Sign in</span>

     </div>
    </div>

    </div>
  )
}

export default Header