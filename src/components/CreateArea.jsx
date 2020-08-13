import React, { useState } from 'react'
import AddIcon from '@material-ui/icons/Add'
import { Fab ,Zoom, ClickAwayListener } from '@material-ui/core'
const CreateArea = ({ onAdd }) => {
  const [note, setNote] = useState({
    title: '',
    content: ''
  })
  const [clicked, setClicked] = useState(false)

  const handleInput = ({ target }) => {
    const { name, value } = target
    setNote(prevValues => ({ ...prevValues, [name]: value }))
  }

  const handleClick = e => {
    onAdd(note)
    setNote({
      title: '',
      content: ''
    })
   
    e.preventDefault()
  }
  const handleTextClick = () => {
    setClicked(true)
  }
  const handleClickAway = ()=>{
    setClicked(false)
  }
 
  const { title, content } = note
  return (
    
    <div>
    <ClickAwayListener onClickAway={handleClickAway}>
      <form className='create-note'>
        {clicked && 
          <input
            onChange={handleInput}
            value={title}
            name='title'
            placeholder='Title'
          />
        }
        <p></p>
        <textarea id={'id'}
          onClick={handleTextClick}
          onChange={handleInput}
          name='content'
          placeholder='Take a note...'
          value={content}
          rows={clicked ? '3' : '1'}
        />
        {clicked && (
          <Zoom in={true}>
            <Fab onClick={handleClick}>
              <AddIcon />
            </Fab>
          </Zoom>
        )}
      </form>
      </ClickAwayListener>
    </div>
    
  )
}

export default CreateArea
