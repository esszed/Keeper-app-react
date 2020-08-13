import React from 'react'

const year = new Date().getFullYear()
const Footer = () => (
  <footer>
    <p>© Štěpán Zoubek {year}</p>
  </footer>
)

export default Footer
