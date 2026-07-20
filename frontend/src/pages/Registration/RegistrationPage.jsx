import React from 'react'
import HeaderText from '../../features/Auth/components/HeaderText/HeaderText'
import Paragraphtext from '../../features/Auth/components/ParagraphText/Paragraphtext'
import styles from './Registration.module.css';
import { Input } from '../../components/input/Input';

const RegistrationPage = () => {
  return (
    <div className={styles.registrationPage}>
        <div className={styles.content}>
              <div className={styles.text}>
                    <HeaderText />
                    <Paragraphtext />
                    <Input label='Full name' type='text'/>
              </div>
        </div>
    </div>
  )
}

export default RegistrationPage