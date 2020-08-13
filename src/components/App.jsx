import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import CreateArea from './CreateArea'
import Note from './Note'

const App = () => {
  const [notesCollection, setNotesCol] = useState([{title:'Note', content:'bang'}])

  const addNote = (note) => {

    setNotesCol([...notesCollection, note])
  
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notesCollection.map(({ title, content },index) => (
        <Note key={index}  title={title} content={content} />
      ))}
      <Footer />
    </div>
  )
}

export default App
