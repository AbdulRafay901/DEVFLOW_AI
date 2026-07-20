import React from 'react'
import styles from './inputs.module.css'

 export const Input = ({label, text, placeholder}) => {
  return (
    <div className={styles.inputDiv}>
         <label>{label}</label>
         <input
              type={text}
              placeholder={placeholder}
         ></input>
    </div>
  )
}

