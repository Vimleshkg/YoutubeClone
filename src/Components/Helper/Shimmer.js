import React from 'react'

const Shimmer = () => {
  return (
    <div className='flex flex-wrap'>
        {Array(60).fill("").map((e,i)=>{
          return  <div key={i}  className='h-48 w-48 m-2 bg-black'>{e} </div>
        })  }
    </div>
  )
}

export default Shimmer