import React, { useState } from 'react';
import {Outlet, RouterProvider, createBrowserRouter}  from 'react-router-dom'
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body'
import MainContainer from './Components/MainContainer';
import { Provider, useSelector } from 'react-redux'
import { Store } from './Utils/ReduxStore';
import WatchVideo from './Components/WatchVideo';
import Searched from './Components/Searched';
import VideoContainer from './Components/VideoContainer';
import {myContext} from './Utils/Context'


const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Body/>,
        children:[
          {
            path:'/',
            element:<MainContainer/>,
            children:[
              {
               path:'/',
               element: <VideoContainer/>
              },
              { 
               path:'/searched/:id',
               element: <Searched/>,
              }
            ]
          },
          {
            path:'/watch/:id',
            element:<WatchVideo />
          }
        ]
      },
      
   
    ]
  }
]
);

function App() {

const [data, setData]=useState([]);


  return (
  <Provider store={Store}>

 <myContext.Provider value={{myData: data, setMyData: setData }} >
    <div className="">
      
     <Header/>
     <Outlet/>
     
    
    </div>
    </myContext.Provider>
    </Provider>

  );
}


export {appRouter};
export default App;
