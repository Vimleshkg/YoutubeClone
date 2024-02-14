import { API_KEY } from "../Utils/Constant";

export async function GetSubscriber(channelId, setSubs){
    const data= await fetch("https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id="+channelId+"&key="+API_KEY)
    const json =await data.json();
     setSubs(json?.items[0]?.statistics);
}