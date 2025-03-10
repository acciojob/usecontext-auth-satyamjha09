// Auth.js
import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

const Auth = () => {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isAuthenticated}
          onChange={toggleAuth}
        />
        I am not a robot
      </label>
      <p>
        {isAuthenticated
          ? 'You are authenticated!'
          : 'Please verify that you are not a robot.'}
      </p>
    </div>
  );
};

export default Auth;