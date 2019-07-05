import React from 'react'
import Comment from './Comment'

export default function Post({ author, date, content, comments }) {
  return (
    <div className='post-item'>
      <div className='meta'>
        <div className='avatar'>
          <img src={author.avatar} alt='' />
        </div>
        <div className='dados'>
          <h2>{author.name}</h2>
          <span>{date}</span>
        </div>
      </div>
      <div className='post-content'>{content}</div>

      {comments.map(comment => (
        <Comment key={comment.id} {...comment} />
      ))}
    </div>
  )
}
