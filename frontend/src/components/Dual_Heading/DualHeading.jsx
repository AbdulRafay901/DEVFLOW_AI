import React from 'react'
import styles from './DualHeading.module.css'
import {Link} from 'react-router-dom'


const DualHeading = ({text, className, element}) => {
  return (
    <p className='flex text-xs mt-6 gap-[3px]'>{text } {element}</p>
  )
}

export default DualHeading