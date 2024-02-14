import React, {useState, useEffect} from 'react'
import { YtSearchSuggestAPI } from '../Utils/Constant';
import { useDispatch, useSelector } from 'react-redux';
import { putSuggestion } from '../Utils/CacheSearchSlice';
import { Link } from 'react-router-dom';


const SearchBar = () => {

   const dispatch = useDispatch();
   const select = useSelector((store)=> store.cacheSearch);

   const [searchArea, setSearchArea] = useState(false);

    const [searchQuery, setSearchQuery] = useState("");
    const [searchSuggest, setSearchSuggest] = useState([]);
  
   
      useEffect(()=>{
       
        const timer= setTimeout(()=>{
         if(select[searchQuery]){
           setSearchSuggest(select[searchQuery])
         } else  getSearchSuggest();

       
        }, 200);

      return ()=>{
        clearTimeout(timer);
      };

    },[searchQuery] );
  
  
    async function getSearchSuggest(){
      const data= await fetch(YtSearchSuggestAPI + searchQuery);
      const json = await data.json();
        setSearchSuggest(json[1]);

        console.log(searchSuggest);

        dispatch(putSuggestion({[searchQuery]:json[1]}))
       

      
    }


    

  return (

    <div className='flex  '>
    <div className=' h-10 rounded-l-full w-[80%] '>

      <input   value= {searchQuery} onChange={(e)=>{setSearchQuery(e.target.value); setSearchArea(true);  
        if(searchQuery.length<=1){setSearchArea(false);}else{setSearchArea(true);}
      }} className='p-[7px] pl-4   border shadow-lg rounded-l-full w-full' type="text"/> 
       
       {  !searchArea ? "" :
       <div id="searchArea" className='w-full relative z-40 bg-slate-50 rounded-xl border shadow-xl h-72'>
        <ul className='p-2 pl-5 font-medium'>
        { searchQuery && searchSuggest.map((data,i)=>{
          return <li key={i} onClick={()=>{setSearchQuery(data); setSearchArea(false)}}>{data}</li>
        })
        }
        </ul>
  
       </div>
      }
  
       </div>

      { !searchQuery?   <button  className=' w-15 px-2 border  rounded-r-full bg-gray-100'>
        <img className=" h-5 mx-4 w-5" src="https://w7.pngwing.com/pngs/471/149/png-transparent-computer-icons-symbol-search-miscellaneous-black-and-white-magnifying-glass.png"/>
      </button>  : <Link to={"/searched/"+searchQuery}> <button  onClick={()=>{ setSearchArea(false);}} className=' w-15 p-2 rounded-r-full bg-slate-300'>Search</button>  </Link> }
     
      </div >
  )
}

export default SearchBar