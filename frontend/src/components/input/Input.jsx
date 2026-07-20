import React from 'react'
import styles from './inputs.module.css'

 export const Input = ({label, type, placeholder}) => {
  return (
    <div className={styles.inputDiv}>
         <label>{label}</label>
         <input
          
              type={type}
              placeholder={placeholder}
         ></input>
    </div>
  )
}

