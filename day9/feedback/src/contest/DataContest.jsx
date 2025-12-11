import {Children, createContext,useState} from "react";
const DataContext=createContext()

export const DataProvider=({children})=>{
    const[num,setNum]=useState(100)
    return(
        <DataContext.Provider value={{num,setNum}}>
            {
                children
            }
        </DataContext.Provider>
    )
}
export default DataContext