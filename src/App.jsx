import { useState } from 'react'
import './App.css'

const defaultNote = {
    content: '',
    author:''
}

function App() {
    // States
    const [ note, setNote ] = useState(defaultNote)
    const [ allNotes, setAllNotes ] = useState([])
    const [ editNote, setEditNote ] = useState(null)

    // Functions form inputs
    function onNoteValueChange(event) {
        const { name, value } = event.target
        setNote((prevNote) => {
            return {
                ...prevNote,
                [name] : value
            }
        })
    }
    function onEditNoteValueChange(event) {
        const { name, value } = event.target
        setEditNote((prevNote) => {
            return {
                ...prevNote,
                [name] : value
            }
        })
    }

    // Function add, edit
    function onNoteSubmit(event) {
        event.preventDefault()

        setAllNotes((prevAllNotes) => {
            const newNote = { ...note }
            newNote.id = Date.now().toString()
            return [
                newNote,
                ...prevAllNotes,
            ]
        })

        setNote(defaultNote)

    }
    function onEditNoteSubmit(event) {
        event.preventDefault()

        setAllNotes((prevAllNotes) => {
            return prevAllNotes.map((theNote) => {
                if (theNote.id !== editNote.id) return theNote
                return editNote
            })
        })

        setEditNote(null)

    }

    function onNoteDelete(noteId) {
        const updatePosts = allNotes.filter((note) => note.id !== noteId)
        setAllNotes(updatePosts)
    }

    // Elements
    const noteElements = allNotes.map((theNote, index) => {
        return(
            <div key={theNote.id} className='app-note'>
                <p>{theNote.content}</p>
                <h5>{theNote.author}</h5>
                {/* <button onClick={() => onNoteDelete(theNote.id)}>ลบ</button> */}
                <p>
                    <a onClick={() => {setEditNote(theNote)}}>Edit</a>
                    <span> | </span>
                    <a onClick={() => onNoteDelete(theNote.id)} >Delete</a>
                </p>
            </div>
        )
    })

    let editNoteElement = null
    if (!!editNote) {
        editNoteElement = (
            <div className='app-edit-note'>
                <form onSubmit={onEditNoteSubmit}>
                    <p>
                        <textarea
                            placeholder='บันทึก'
                            value={editNote.content}
                            name='content'
                            onChange={onEditNoteValueChange}
                        />
                    </p>
                    <p>
                        <input
                            type='text'
                            placeholder='ลงชื่อ'
                            value={editNote.author}
                            name='author'
                            onChange={onEditNoteValueChange}
                        />
                    </p>
                    <p>
                        <button type='submit' onClick={onEditNoteSubmit} >บันทึก</button>
                    </p>
                </form>
            </div>
        )
    }

    return (
        <div className='app-sextion'>
            <div className='app-container'>
                <h3>สักหน่อยไหมละครับ</h3>
                <form onSubmit={onNoteSubmit}>
                    <p>
                        <textarea
                            placeholder='บันทึก'
                            value={note.content}
                            name='content'
                            onChange={onNoteValueChange}
                        />
                    </p>
                    <p>
                        <input
                            type='text'
                            placeholder='ลงชื่อ'
                            value={note.author}
                            name='author'
                            onChange={onNoteValueChange}
                        />
                    </p>
                    <p>
                        <button type='submit' onClick={onNoteSubmit} >เพิ่ม</button>
                    </p>
                </form>
                <div className='app-notes'>
                    {noteElements}
                </div>
            </div>
            {editNoteElement}
        </div>
    )
}

export default App
