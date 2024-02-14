import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import {SideMenuFalse} from '../Utils/SideBarSlice'
import {API_KEY} from '../Utils/Constant' 
import   {CommentsData} from './Helper/CommentsData'
import CommentsList from './CommentsList';
import LiveChat from './LiveChat';
import { GetSubscriber } from './GetSubscriber';


const WatchVideo = () => {

  const select = useSelector((store)=>store.ytData.data);

  const selectSideBar= useSelector((store)=>store.sideBar.isSideBar); 

  const [videoDetails, setVideoDetails] =useState();
  const [Subs, setSubs] =useState();
  const videoId = useParams();
  let {id} = videoId;
 
  const dispatch =useDispatch();


  useEffect(()=>{
    dispatch(SideMenuFalse());
     getVideoDetails();
    
  },[])

  async function getVideoDetails(){
      const data= await fetch(" https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id="+id+"&key="+ API_KEY)
      const json =await data.json();
      setVideoDetails(json.items[0]);
      console.log(select);
      console.log(json.items[0])
  }


  // const filterRes = realRestaurant.filter((restaurant)=>{
   // return restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase());
  //}) 

    if(videoDetails)
    {
      GetSubscriber(videoDetails?.snippet?.channelId , setSubs);
      
    }

 
  return (
<>
    <div  className='col-span-10 w-[350px] sm:w-[700px] sm:h-[350px]  md:w-[900px] md:h-[500px]   left-4 relative z-0'>
<iframe  className='sm:w-[600px] sm:h-[300px]  md:w-[800px] md:h-[450px] xl:w-[900px] xl:h-[500px]  rounded-xl' width="340" height="280" 
src={"https://www.youtube.com/embed/"+videoId.id} 

title="YouTube video player" frameBorder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
 allowFullScreen>

</iframe>

<div className='p-4 pt-8'>
 <h1 className='text-xl font-medium'>{videoDetails?.snippet?.title}</h1>
 
 <div className='flex justify-between'>
 <div className='flex mt-4'>
  <img src=""/>
  <div>
    <h1 className='font-medium text-lg'>{videoDetails?.snippet?.channelTitle}</h1>
    <h1 className='text-sm'>{Subs?.subscriberCount/1000000}M</h1>
  </div>
  <button className='ml-8 p-2 px-4 bg-black text-white rounded-full'>Subscribe</button>
 </div>

 <div>
  <button>Like | Dislike</button>
  <button>Share</button>
 </div>

</div>

</div>

<div className='mt-10'>
<h1 className='font-bold text-xl'>Comments:</h1>
  <CommentsList CommentsData={CommentsData}/>
</div>

    </div>
    {
      !selectSideBar ? <div className='relative'>
         <h1 className='font-medium relative w-[200px] 2xl:right-20 lg:w-[340px] lg:right-1 md:w-[290px] 2xl:w-[450px] border pl-4 right-14 p-2 rounded-md shadow-md border'>Live Chat:</h1>
    <div className='w-[200px] border border-b-2 h-[31.1rem] 2xl:right-20 lg:w-[340px] lg:right-1 md:w-[290px] 2xl:w-[450px] border rounded-lg shadow-md right-14 relative flex flex-col flex-col-reverse overflow-y-scroll'>

      <LiveChat/>

    </div>
 </div>
         : 
     <div >
    <h1 className='font-medium relative w-[200px] md:w-[300px] xl:w-[400px] pl-4 p-2 rounded-md shadow-md border'>Live Chat:</h1>
    <div className='w-[200px] md:w-[300px] xl:w-[400px] border border-b-2 h-[31.1rem] rounded-lg shadow-md  relative flex flex-col flex-col-reverse overflow-y-scroll'>

      <LiveChat/>

    </div>

</div>
}
<button onClick={()=> console.log(Subs)}>Click</button>
    </>
  )
}

export default WatchVideo