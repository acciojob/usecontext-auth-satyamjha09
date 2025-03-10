import React from 'react'
import { AuthProvider } from './AuthContext'
import Auth from './Auth'

const App = () => {
  return (
    <AuthProvider>
      <div>
        <h1>React Authentication with useContext</h1>
        <Auth />
      </div>
    </AuthProvider>
  )
}

export default App