import React, { useEffect, useState } from 'react'
import { API_KEY } from '../Utils/Constant';
import { Link, useParams } from 'react-router-dom';
import WatchVideo from './WatchVideo';

const Searched = () => {

    const [searchData, setSearchData] = useState([]);

    const Query = useParams();
   
     useEffect(()=>{
         getData();
     },
     [])
   
     const getData=async()=>{
       const data = await fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q="+Query.id+"&type=videos&key="+API_KEY);
       const json = await data.json();
       console.log(json.items);
       console.log(Query)
       setSearchData(json.items);
       
     }
   
     return !searchData ? <h1>  "Loading...." </h1> : (
       <div>
           {searchData.map((data, i)=>{
               return <Link to={"/watch/"+data.id.videoId}> <div className='p-8 pl-16 flex w-[80rem]'>
   
        
               <div className='w-96'>
   
               <img className='w-96 rounded-xl' src={data?.snippet?.thumbnails?.medium?.url}/>
                </div>
            
                <div className=' overflow-x-hidden  pl-4 w-[48rem]'>
                <h1 className='text-2xl '> {data?.snippet?.title} </h1>
                <h3>{}</h3>
                <h2>{data?.snippet?.channelTitle}</h2>
                <h1 className=''>
                  { data?.snippet?.description }
                </h1>
               
                </div>
            
                </div> </Link>
                
           })}
      
   
       </div>
     )
}

export default Searched



/**
 * 
 * 

 * 
 * 
 * 
 * 
 * **/