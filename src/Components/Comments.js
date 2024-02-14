import React from 'react'
import CommentsList from './CommentsList'

const Comments = ({Comment}) => {
  return (
    <>
    <div>
   
    <div className='flex mt-4 items-center'>
        <img className='h-9 mx-2 w-9' src="https://www.pngfind.com/pngs/m/34-349693_circled-user-icon-transparent-background-username-icon-hd.png"/>
        <div className='mx-2'>
        <h1 className='font-medium '>{Comment.name}</h1>
        <p >{Comment.chat}</p>
        </div>
      
    </div>

    </div>


    </>

  )
}

export default Comments