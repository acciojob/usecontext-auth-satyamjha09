import React, { createContext, useState } from 'react'


export const AuthContext = createContext();

const AuthContext = ({ children }) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const toggleAuth = () => {
        setIsAuthenticated((prev) => !prev);
    }

  return (
    <AuthContext.Provider value={{ isAuthenticated , toggleAuth }}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContext