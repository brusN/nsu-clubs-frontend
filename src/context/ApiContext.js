import { createContext, useState } from 'react';
export const ApiContext = createContext(null);

const ApiProvider = ({children}) => {
    const [username, setUsername] = useState(null)

    return <ApiContext.Provider value={{username, setUsername}}>{children}</ApiContext.Provider>
}

export default ApiProvider