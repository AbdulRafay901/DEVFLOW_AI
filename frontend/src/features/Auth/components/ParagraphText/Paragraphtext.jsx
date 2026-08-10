import React from 'react'
import './Paragraphtext.module.css'

const Paragraphtext = ({text, className}) => {
  return (
     <p className={className}>
        {text}
     </p>
  )
}

export default Paragraphtext