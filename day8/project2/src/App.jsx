import './App.css'
import { Link,Route,Routes } from 'react-router-dom'
import Home from  './Home'
import Gallery from './Gallery'
import About from './About'
import PostPG from './PostPG'
import Post from './Post'
import NewPost from './NewPost'
function App() {
  return (
    <>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/postpage">Postpage</Link></li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/postpage" element={<PostPG />}>
          <Route path=":id" element={<Post />} />
          <Route path="newpost" element={<NewPost />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
