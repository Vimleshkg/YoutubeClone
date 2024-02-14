import React, { useState } from 'react'

const ButtonList = () => {
    const [buttonName, setButtonName] =useState(['All','Gaming','Computer Programming','Comedy','live','Music','Movies','Pop music','Drama', 'Cricket', 'AGT', 'Indian idol','Bollywood music']);
  return (
    <div className='flex ml-4'>
   
  {buttonName.map((name,i)=>{
    return <button key={i} className='p-1 ml-2 text-sm sm:p-2 sm:text-base rounded-lg bg-gray-300'>{name}</button>
  })}

    </div>
  )
}

export default ButtonList