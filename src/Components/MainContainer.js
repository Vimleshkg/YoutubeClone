import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { Outlet } from 'react-router-dom'
import Shimmer from './Helper/Shimmer'
import { useSelector } from 'react-redux'

const MainContainer = () => {

  const selectData= useSelector((store)=> store.ytData.data)

  return (
    <div className=' relative z-0 col-span-10'>
   
   <ButtonList/>
   <Outlet/>
  
    </div>
  )
}

export default MainContainer