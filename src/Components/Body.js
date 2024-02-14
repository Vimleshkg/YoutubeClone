import React, { useEffect, useState } from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import Shimmer from './Helper/Shimmer';


const Body = () => {
const [menuName, setMenuName] = useState([['Home','Shorts','Subscriptions'], ['You', 'History'],['Trending','Shopping','Music','Movies','Live','Gaming','News','Sports'],['Setting', 'Report history', 'Help','Send feedback']]);

const select = useSelector((store)=>{
  return store.sideBar.isSideBar;
});

const selectYT = useSelector((store)=>{
  return store.ytData.data;
})

const [data, setData]= useState([]);

useEffect (()=>{
   setData(selectYT);
},[selectYT])


  return  (
    <div className='grid grid-flow-col  '>
     
    <div> 
     {!select ? "" :
        <div>
   {menuName.map((item,i)=>{
    return < SideBar key={i} item={item}/>
    })}
    </div>
}
</div> 

   <Outlet/>

    </div>
  )
}

export default Body