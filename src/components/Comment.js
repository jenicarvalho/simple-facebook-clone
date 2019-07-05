import React from 'react'

export default function Comment({ author, content }) {
  return (
    <div className='commment'>
      <div className='comment-avatar'>
        <img src={author.avatar} alt='' />
      </div>
      <div className='comment-inner'>
        <h2>{author.name}</h2>
        {content}
      </div>
    </div>
  )
}
