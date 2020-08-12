import React from 'react'
import Header from './Header'
import Footer from './Footer'
import CreateArea from './CreateArea'
import Note from './Note'
import notes from '../notes'
const App = () => {
  return (
    <div>
      <Header />
      <CreateArea />
      {notes.map(({ title, content }) => (
        
         <Note title={title} content={content} />
      ))}
      <Footer />
    </div>
  )
}

export default App
