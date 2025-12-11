import { useEffect, useState } from 'react'
import './App.css'
import api from './api/Stu_api'

function App() {
  const [Slist, setSlist] = useState([])

  useEffect(() => {

    const fetData = async () => {
      try {
        const res = await api.get("/student")
        setSlist(res.data)
        console.log(res.data)
      } 
      catch (err) {
        console.log("Error:", err)
      }
    }

    fetData()

  }, [])

  return (
    <>
      {
        Slist.map((stu) => (
          <p key={stu.sid}>
            {stu.id} - {stu.name} - {stu.mark}
          </p>
        ))
      }
    </>
  )
}

export default App