import React from 'react'

const Card = ({info}) => {

    const {snippet, statistics} = info;

  return (
    <div className=' w-[10rem] sm:w-[13rem] md:w-[13rem] lg:w-[14rem] xl:w-[16rem] mr-3 mt-2 py-2 mb-4  '>

    <img className='rounded-lg' alt="vido" src={snippet.thumbnails.medium.url} />
    <ul className='ml-6'>
    <li className='overflow-x-auto'>{snippet.title}</li>
    <li>{snippet.channelTitle} </li>
    <li>{statistics.likeCount} views</li>
    </ul>
    </div>
  )
}

export default Card