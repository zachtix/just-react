import React, { useEffect, useState } from 'react'
import LoginArea from './LoginArea'

const fakeUser = { username: 'nine789', fullname: 'เต้า หมิงซื่อ'}

const AuthContext = React.createContext()

function App() {

  return (
    <AuthContext.Provider value={fakeUser}>
      <section className='app-section'>
        <div className='app-container' />
        <LoginArea />
      </section>
    </AuthContext.Provider>
  )
}

export { AuthContext }
export default App
