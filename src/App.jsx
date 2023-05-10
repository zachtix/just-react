import React, { useEffect, useState, useReducer, useRef } from 'react'
import SelectTextarea from './SelectTextarea'
import SendFile from './SendFile'

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
          <SelectTextarea onAllTextClick={onAllTextClick} ref={textareaRef} />
          <SendFile onUploadClick={onUploadClick} ref={fileRef}/>
        </div>
      </section>
  )
}

export default App
