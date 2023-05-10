import React, { useEffect, useState, useReducer, useRef } from 'react'

function App() {
  const fileRef = useRef(null)
  const textareaRef = useRef(null)

  function onAllTextClick() {
    textareaRef.current.focus()
    textareaRef.current.select()
  }
  
  function onUploadClick() {
    const myFIle = fileRef.current.files[0]
    console.log(myFIle);
  }

  return (
      <section className='app-section'>
        <div className='app-container'>
          <h2>ไม่ใช่แฟนทำแทนก็ได้</h2>
          <p>
            <textarea ref={textareaRef}/>
          </p>
          <p>
            <button onClick={onAllTextClick}>เลือกข้อความทั้งหมด</button>
          </p>
          <p>
            <input type='file' ref={fileRef} />
          </p>
          <p>
            <button onClick={onUploadClick}>อัพไฟล์</button>
          </p>
        </div>
      </section>
  )
}

export default App
