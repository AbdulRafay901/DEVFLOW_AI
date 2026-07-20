import React from 'react'
import styles from './Buttons.module.css'

const Buttons = ({text, width, height, marginTop}) => {
  return (
    <button style={{
        "--btn-width": width,
        "--btn-height": height,
        "--margin-top": marginTop
    }}>
           {text}
    </button>
  )
}

export default Buttons