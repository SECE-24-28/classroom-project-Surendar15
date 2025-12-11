import { useState, createContext } from 'react';

export const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [data, setData] = useState(0);
    
    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;