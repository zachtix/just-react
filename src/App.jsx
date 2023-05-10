import { useEffect, useState } from 'react'
import './App.css'
import Popup from './Popup';

function App() {
  const[ isPopupOpen, setisPopupOpen ] = useState(false)

  let popup = null;
  if (isPopupOpen) {
    popup = <Popup onPopupClose={() => setisPopupOpen(false)}/>
  }

  return (
      <div className='app-section'>
          <div className='app-container'>
            <h1>เก็บโค้ดส่วนลด</h1>
            <button onClick={() => setisPopupOpen(true)}>เปิด</button>
          </div>
          {popup}
      </div>
  )
}

export default App
