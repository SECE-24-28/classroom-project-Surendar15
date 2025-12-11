import React, { useContext } from 'react'
import { DataContext } from './DataContext'

const Two = () => {
    const { setData } = useContext(DataContext)
    
    const inc = () => {
        setData(prev =>prev + 1)
    }
    
    return (
        <div>
            <button onClick={inc}>+</button>
        </div>
    )
}

export default Two