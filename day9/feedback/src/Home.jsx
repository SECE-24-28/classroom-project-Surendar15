import React from 'react'
  const Home=({posts}) =>{  
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.datetime}</p>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}

export default Home