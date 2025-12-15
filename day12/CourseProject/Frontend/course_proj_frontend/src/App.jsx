import { use, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { addcourse, getcourse } from './api/courseapi'
function App() {
  const [courses, setcourses] = useState([])
  const [duration,setduration]=useState("")
  const [title, settitle] = useState("")
  
  const fetchcourse=async()=>{
    const res=await getcourse();
    setcourses(res.data);
  }
  useEffect(()=>{
    fetchcourse();
  },[])
  const handleSubmit=async(e)=>{
    e.preventDefault();
    await addcourse({title,duration});
    fetchcourse();
    settitle("");
    setduration("");
 
  }
  
  
  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text"value={title} onChange={(e)=>settitle(e.target.value)}/>
      <input type="text" value={duration} onChange={(e)=>setduration(e.target.value)} />
      <button>Add Course</button>
    </form>
    <ul>
      {
        courses.map((c,i)=>
          <li key={i}>
            {c.title} - {c.duration}
          </li>
        )
      }
    </ul>
    </>
  )
}

export default App
