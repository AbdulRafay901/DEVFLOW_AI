import React from 'react'

import { Input } from '../components/input/Input';
import { useState } from 'react';
import HeaderText from '../features/Auth/components/HeaderText/HeaderText'
import Paragraphtext from '../features/Auth/components/ParagraphText/Paragraphtext'
import styles from './Registration/Registration.module.css';
import Buttons from '../components/Button/Buttons';




const Forgetpassword = () => {


  return (
    <div className={styles.registrationPage}>
        <div className={styles.content}>
            <div className='flex flex-col gap-[8px] pt-[20px]'>
                  <HeaderText text='Forget your password?' className='font-[600] text-[19.5px]'/>
                  <Paragraphtext 
                     text={<>Enter your email and we ll send <br />you reset instructions</>}
                     className='text-[13px]'
                  />
            </div>
            <form onSubmit={handleSubmit(formSubmit)}>
                   <div className='mb-[25px] mt-[25px]'>
                     <Input
                         label="Email address"
                         type="email"
                         placeholder="Enter Email"
                         error={email}
                         {...register("email")}
                     />
                   </div>
                   <Buttons type='submit' text='Send Email Link' width='100%' height='40px' marginTop='15px' />
                   <button onClick={() => {
                      navigate('/login')
                   }} type='button' className='!w-[100%] !bg-white !text-[#64748be1] pt-[20px] pb-[15px]'>Back to login</button>
            </form>
        </div>
    </div>
  )
}

export default Forgetpassword