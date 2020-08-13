import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import CreateArea from './CreateArea'
import Note from './Note'


const App = () => {
  const [notesCollection, setNotesCol] = useState([])

  const addNote = note => setNotesCol([...notesCollection, note])

  const deleteNote = index => {
    setNotesCol(prevValues => {
      prevValues.splice(index, 1)
      return [...prevValues]
    })
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notesCollection.map(({ title, content }, index) => (
        <Note
          key={index}
          onDelete={deleteNote}
          customKey={index}
          title={title}
          content={content}
        />
      ))}
      <Footer />
    </div>
  )
}

export default App
