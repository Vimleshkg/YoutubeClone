import React, { useEffect, useState } from 'react'
import { RandomName } from './Helper/RandomName'
import { useDispatch, useSelector } from 'react-redux'
import { addLiveChat } from '../Utils/LiveChatSlice';
import Chat from './Chat';

const LiveChat = () => {
    const dispatch = useDispatch();
     const selectLiveChat =useSelector((store)=> store.LiveChat.chat);
     const [s, setS]=useState("")

    useEffect(()=>{
        const interval = setInterval(()=>{
            const data= RandomName();
            
            dispatch(addLiveChat(data));
        }, 1000);
        return ()=>{ clearInterval(interval); }
       
    },[])

  return (
    <>
        { selectLiveChat.map((e, i)=>{
           return <Chat name={e}/>;
        })}
    

    </>
  )
}

export default LiveChat