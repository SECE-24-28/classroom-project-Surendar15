import React, { useContext } from 'react'
import { DataContext } from './DataContext'

const Three = () => {
    const { setData } = useContext(DataContext)
    
    const handleDecrement = () => {
        setData(prev => prev -1)
    }
    
    return (
        <div>
            <button onClick={handleDecrement}>-</button>
        </div>
    )
}
export default Three