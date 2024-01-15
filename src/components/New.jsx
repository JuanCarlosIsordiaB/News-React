

import React from 'react'

export const New = ({noticia}) => {

    const {title, author, urlToImage,url, description, source} = noticia;
  return (
    <div className='border border-gray-400 rounded-md m-5 p-4'>

        <p className='text-red-400 font-semibold text-md'>{source.name}</p>
        <h1 className='m-3 text-xl'>"{title}" - <span className='font-bold'>{author}</span></h1>
        <a className='text-blue-300 hover:text-blue-900 underline' href={url} target='_blank'>Link to the new</a>
        
        
    </div>
  )
}
