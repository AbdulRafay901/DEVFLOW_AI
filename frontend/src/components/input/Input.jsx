import React from 'react'
import styles from './inputs.module.css'

 export const Input = ({label, type, placeholder, value,onChange,checkbox}) => {
  return (
    <div className={styles.inputDiv}>
         <label>{label}</label>
         <input
              value={value}
              type={type}
              placeholder={placeholder}
              onChange={onChange}
              checked={checkbox}
         ></input>
    </div>
  )
}

