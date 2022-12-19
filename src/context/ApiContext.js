import { createContext, useState } from 'react';
export const ApiContext = createContext(null);

const ApiProvider = ({children}) => {
    const [username, setUsername] = useState(null)
    const isAuthorized = () => {
        return localStorage.getItem("username") !== null
    }

    return <ApiContext.Provider value={{username, setUsername, isAuthorized}}>{children}</ApiContext.Provider>
}

export default ApiProvider