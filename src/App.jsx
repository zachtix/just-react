import React, { useEffect, useState } from 'react'
import LoginArea from './LoginArea'


const AuthContext = React.createContext()

function App() {
  const [ auth, setAuth ] = useState(null)
  console.log('App refresh');
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      <section className='app-section'>
        <div className='app-container' />
        <LoginArea />
      </section>
    </AuthContext.Provider>
  )
}

export { AuthContext }
export default App
