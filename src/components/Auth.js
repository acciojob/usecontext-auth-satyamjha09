import React, { useContext, useState } from 'react'
import AuthContext from './AuthContext'

const Auth = () => {

    const { isAuthenticated, toggleAuth } = useContext(AuthContext);

  return (
    <div>
        <h2> Authenticated </h2>
        <label>
            <input type="checkbox" onChange={toggleAuth} />
            I'm not robot
        </label>
        <p>
            {isAuthenticated ? "You are authenticated!" : "you are not authenticated"}
        </p>
    </div>
  )
}

export default Auth