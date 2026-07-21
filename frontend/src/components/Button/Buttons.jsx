import React from 'react'
import styles from './Buttons.module.css'

const Buttons = ({text, width, height, marginTop, type}) => {
  return (
    <button style={{
        "--btn-width": width,
        "--btn-height": height,
        "--margin-top": marginTop
    }} type={type}>
           {text}
    </button>
  )
}

export default Buttons