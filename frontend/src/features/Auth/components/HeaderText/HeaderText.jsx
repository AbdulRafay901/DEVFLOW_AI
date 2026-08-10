import React from 'react'
import './HeaderText.module.css'


const HeaderText = ({text, className}) => {
  return (
    <h1 className={className}>
        {text}
    </h1>
  )
}

export default HeaderText