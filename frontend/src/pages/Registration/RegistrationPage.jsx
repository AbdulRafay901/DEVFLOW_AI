import React from 'react'
import HeaderText from '../../features/Auth/components/HeaderText/HeaderText'
import Paragraphtext from '../../features/Auth/components/ParagraphText/Paragraphtext'
import styles from './Registration.module.css';
import { Input } from '../../components/input/Input';
import DualHeading from '../../components/Dual_Heading/DualHeading';
import Buttons from '../../components/Button/Buttons';
import {Link} from 'react-router-dom'

const RegistrationPage = () => {
  return (
    <div className={styles.registrationPage}>
        <div className={styles.content}>
              <div className={styles.text}>
                    <HeaderText text='Create your account'/>
                    <Paragraphtext text='Start your 14 day free trial'/>
              </div>
              <div className={styles.inputs}>
                    <Input label='Full name' type='text'/>
                    <Input label='Email address' type='email'/>
                    <Input label='Password' type='password'/>
                    <Input label='Confirm Password' type='text'/>
              </div>
              <div className={styles.checkboxDual}>
                    <Input type='checkbox'/>
                    <DualHeading className={styles.DualHeading}   text='I agree to the' dualText='Terms & Conditions' element={<span>Terms & Conditions</span>} />
              </div>
              <Buttons text='Create account' width='100%' height='35px' marginTop='15px'/>
              <DualHeading
               text='Already have an account?'
              element={<Link style={{textDecoration:'none', color:'var(--primary-color)'}}  to='/login'>Login</Link>} className={styles.DualHeading2 }/>  
        </div>
    </div>
  )
}

export default RegistrationPage