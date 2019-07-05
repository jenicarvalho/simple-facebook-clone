import React, { Component } from 'react'
import Post from './Post'

export default class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Rodrigo França',
          avatar: 'https://randomuser.me/api/portraits/men/58.jpg'
        },
        date: '05 Jun 2019',
        content: 'Data para novo bootcamp?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Douglas Silva',
              avatar: 'https://randomuser.me/api/portraits/men/22.jpg'
            },
            content: 'Ainda não foi definido.'
          },
          {
            id: 2,
            author: {
              name: 'Fernando Costa',
              avatar: 'https://randomuser.me/api/portraits/men/37.jpg'
            },
            content: 'Provavelmente em Agosto.'
          }
        ]
      },
      {
        id: 2,
        author: {
          name: 'Bianca Rodrigues',
          avatar: 'https://randomuser.me/api/portraits/women/58.jpg'
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém já usou React Native?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Rafael Maia',
              avatar: 'https://randomuser.me/api/portraits/men/15.jpg'
            },
            content: 'Sim! Recomendo bastante!'
          }
        ]
      }
    ]
  }

  render() {
    const { posts } = this.state
    return (
      <section className='post-list'>
        {posts.map(post => (
          <Post key={post.id} {...post} />
        ))}
      </section>
    )
  }
}
