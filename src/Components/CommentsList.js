import React from 'react'

import Comments from './Comments'

const CommentsList = ({CommentsData}) => {
  return (

 
    CommentsData.map((comment, i)=>{
    return ( 
      <div>
    <Comments key={i} Comment={comment}/>
    <div className='ml-8 text-sm border-l-2 '>
       <CommentsList CommentsData={comment.replies}/>
    </div>

    </div>
    )
    })



  )
}

export default CommentsList