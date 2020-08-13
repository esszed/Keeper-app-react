import React from 'react'
import {Delete as DeleteIcon} from "@material-ui/icons"

const Note = ({ onDelete, customKey, title, content }) => {
  const handleClick = () => {
    onDelete(customKey)
  }
  return (
    <div className='note'>
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={handleClick}><DeleteIcon/></button>
    </div>
  )
}

export default Note
