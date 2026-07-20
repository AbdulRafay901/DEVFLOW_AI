import React from 'react'
import styles from './DualHeading.module.css'
import {Link} from 'react-router-dom'


const DualHeading = ({text, className, element}) => {
  return (
    <p className={className}>{text} {element}</p>
  )
}

export default DualHeading