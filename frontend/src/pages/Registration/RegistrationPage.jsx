import React from 'react'
import HeaderText from '../../features/Auth/components/HeaderText/HeaderText'
import Paragraphtext from '../../features/Auth/components/ParagraphText/Paragraphtext'
import styles from './Registration.module.css';
import { Input } from '../../components/input/Input';
import DualHeading from '../../components/Dual_Heading/DualHeading';
import Buttons from '../../components/Button/Buttons';
import {Link} from 'react-router-dom'
import { useState } from 'react';

const RegistrationPage = () => {


  const [formData, setformData] = useState({
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      checkbox: ''
  })

  const handleChange = async (e) => {
      const {label, type, value, checked} = e.target

      setformData((prev) => ({
            ...prev,
            [label]: type === "checkbox" ? checked : value,
      }))

}


  const formSubmit = async (e) => {
       e.preventDefault()
       
       console.log(formData)
  } 



  return (
    <div className={styles.registrationPage}>
        <div className={styles.content}>
              <div className={styles.text}>
                    <HeaderText text='Create your account'/>
                    <Paragraphtext text='Start your 14 day free trial'/>
              </div>
              <form onSubmit={formSubmit}>
                     <div className={styles.inputs}>
                           <Input
                                 label='Full name' 
                                 type='text' 
                                 value={formData.fullName} 
                                 onChange={handleChange}
                           />
                           <Input 
                                  label='Email address' 
                                  type='email'
                                  value={formData.email} 
                                  onChange={handleChange}
                           />
                           <Input 
                                  label='Password' 
                                  type='password'
                                  value={formData.password} 
                                  onChange={handleChange}
                           />
                           <Input 
                                  label='Confirm Password' 
                                  type='password'
                                  value={formData.confirmPassword} 
                                  onChange={handleChange}

                           />
                     </div>
                     <div className={styles.checkboxDual}>
                           <Input 
                                  type='checkbox'
                                  checked={formData.checkbox} 
                                  onChange={handleChange}
                                 
                           />
                           <DualHeading className={styles.DualHeading}   text='I agree to the' dualText='Terms & Conditions' element={<span>Terms & Conditions</span>} />
                     </div>
                     <Buttons type='submit' text='Create account' width='100%' height='35px' marginTop='15px'/>
              </form>

              <DualHeading
               text='Already have an account?'
              element={<Link style={{textDecoration:'none', color:'var(--primary-color)'}}  to='/login'>Login</Link>} className={styles.DualHeading2 }/>  
        </div>
    </div>
  )
}

export default RegistrationPage