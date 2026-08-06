import React from 'react'
import HeaderText from '../../features/Auth/components/HeaderText/HeaderText'
import Paragraphtext from '../../features/Auth/components/ParagraphText/Paragraphtext'
import styles from './Registration.module.css';
import { Input } from '../../components/input/Input';
import DualHeading from '../../components/Dual_Heading/DualHeading';
import Buttons from '../../components/Button/Buttons';
import {Link} from 'react-router-dom'
import { useState } from 'react';
import { useForm } from "react-hook-form";

const RegistrationPage = () => {

      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const formSubmit = (data) => { 
        console.log(data)
      } 



  return (
    <div className={styles.registrationPage}>
        <div className={styles.content}>
              <div className={styles.text}>
                    <HeaderText text='Create your account'/>
                    <Paragraphtext text='Start your 14 day free trial'/>
              </div>
              <form onSubmit={handleSubmit(formSubmit)}>
                     <div className={styles.inputs}>
                           <Input
                             label="Full name"
                             type="text"
                             placeholder="Enter Full Name"
                             {...register("fullName")}
                           />

                           <Input
                             label="Email address"
                             type="email"
                             placeholder="Enter Email"
                             {...register("email")}
                           />

                           <Input
                             label="Password"
                             type="password"
                             placeholder="Enter Password"
                             {...register("password")}
                           />

                           <Input
                             label="Confirm Password"
                             type="password"
                             placeholder="Confirm Password"
                             {...register("confirmPassword")}
                           />
                           <Input
                               type="checkbox"
                               {...register("checkbox")}
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