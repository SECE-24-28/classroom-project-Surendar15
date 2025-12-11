import React from 'react'
import { useParams } from 'react-router-dom'
import { Link,Route,Router } from 'react-router-dom'
const Post = () => {
    const {id}=useParams()
  return (
    <div>Post-{id}<br></br>Recieved from contacts</div>
  )
}
export default Post