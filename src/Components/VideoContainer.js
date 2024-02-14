import React, { useContext, useEffect, useState } from 'react'
import { YtAPI } from '../Utils/Constant'

import Card from './Card';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { putData } from '../Utils/YtDataSlice';
import { myContext } from '../Utils/Context';
import { putChannelId } from '../Utils/ChannelIdSlice';

const VideoContainer= () => {

    //const [ytData, setYtData] = useState([]);
    const Datas = useContext(myContext);
    const {setMyData} =Datas;


    const dispatch = useDispatch();

    const ytData= useSelector((store)=> store.ytData.data)

    useEffect(()=>{
       getData();
    },[]);

    async function getData(){
      
        const data= await fetch(YtAPI);
        const json = await data.json();
        // setYtData(json.items);
        
      dispatch(putData(json.items));

         
      
        console.log(json.items)
      
     
        
    }

  return (
    <div className= ' flex flex-wrap ml-[2%] mt-4' > 
      
      {ytData?.map((data) => {   
        return  <Link key={data.id} to={"/watch/"+data.id}>  <Card info={data} /> </Link>
      }) 
      } 

    </div>
  )
}

export default VideoContainer