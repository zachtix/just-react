import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const[ users, setUsers ] = useState([])

  useEffect(() => {
    fetch('https://reqres.in/api/users?page=2').then(res => {
      return res.json()
    }).then(resJson => {
      setUsers(resJson.data)
    })
  }, [])

  const userElements = users.map(user => {
    return <h3 key={user.id}>{user.email}</h3>
  })

  return (
      <div className='app-section'>
          <div className='app-container'>
            <h1>เก็บโค้ดส่วนลด</h1>
             {userElements}
          </div>
      </div>
  )
}

export default App
