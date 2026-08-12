import React from 'react'
import styles from './inputs.module.css'

 export const Input = ({label, error, ...props}) => {
  return (
    <div className={styles.inputDiv}>
         <label>{label}</label>
         <input
              {...props}
         ></input>
         {error && <p className='text-xs mt-[3px]'>{error}</p>}
    </div>
  )
}

