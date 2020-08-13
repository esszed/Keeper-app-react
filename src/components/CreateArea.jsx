import React, { useState } from 'react'

const CreateArea = ({onAdd}) => {
  
  const [note, setNote] = useState({
    title: '',
    content: ''
  })
  
  const handleInput = ({ target }) => {
    const { name, value } = target
    setNote(prevValues => ({ ...prevValues, [name]: value }))
  }

  const handleClick=(e)=>{
    onAdd(note)
    e.preventDefault()
  }
  // const { name, text } = note
  return (
    
    <div>
        <form>
        <input onChange={handleInput} name='title' placeholder='Title' />
        <textarea onChange={handleInput}  name='content' placeholder='Take a note...' rows='3' />
        <button onClick={handleClick}>Add</button>
        </form>
    </div>
  )
}

export default CreateArea
