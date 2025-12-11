import React from 'react'
import { Link,Route,Router } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
const PostPG = () => {
  return (
    <div>
        <ol>
            <li><Link to="1"> Post 1 !</Link></li>
            <li><Link to="/postpage/2"> Post 2 !</Link></li>
            <li><Link to="/postpage/3"> Post 3 ! </Link></li>
            <li><Link to="newpost">NewPost!</Link></li>
        </ol>
        <Outlet />
    </div>
  )
}
export default PostPG
