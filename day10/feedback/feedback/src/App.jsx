import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import api from './api/Post'
import Home from './Home'
import Search from './Search'
import AddPost from './AddPost'
import { format } from 'date-fns'
import DataContext, { DataProvider } from './context/DataContext'
function App() {


  return (
    <>
    <DataProvider>
        <Search />
        <hr />
        <AddPost />        
        <Home  /> 
        </DataProvider>
     </>
     
  )
}

export default App
