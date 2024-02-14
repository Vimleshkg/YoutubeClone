import React from 'react'

const SideBar = ({item}) => {


  return (
    <div className='col-span-2 z-40 p-2 px-14  border-black border-b-1 mr-2 shadow-sm'> 

    <ul className=''>
      {item.map((e, i)=>{
        return <li key={i} className='text-sm py-2 hover:bg-gray-300 rounded-lg p-2 px-6 w-full  relative '>{e}</li>
      })}
    </ul>
    
    </div>
  )
}

export default SideBar