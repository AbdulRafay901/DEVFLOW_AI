import React from 'react'
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from '../components/input/Input';
import { useState } from 'react';
import axios from 'axios';
import HeaderText from '../features/Auth/components/HeaderText/HeaderText'
import Paragraphtext from '../features/Auth/components/ParagraphText/Paragraphtext'
import styles from './Registration/Registration.module.css';
import Buttons from '../components/Button/Buttons';
import { changeSchemas } from '../schemas/changeSchemas';
import { useSearchParams } from 'react-router-dom';



const Forgetpassword = () => {

  const [searchParams] = useSearchParams();

  const token = searchParams.get("token")
  const email = searchParams.get("email")


  const {
      register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: zodResolver(changeSchemas)
  })


  const formSubmit = async (data) => {
      try {

        const res = await axios.post("http://127.0.0.1:8000/api/changePassword",
             token,
             email,
             data,
             {
                 headers: {
                   "Accept": "application/json",
                   "Content-Type": "application/json"
                 }
             }
        )

        console.log(res.data)
      
          
      }catch (error) {
          
      }
  }
  

  return (
    <div className={styles.registrationPage}>
        <div className={styles.content}>
            <div className='flex flex-col gap-[8px] pt-[20px]'>
                  <HeaderText text='Create new password' className='font-[600] text-[19.5px]'/>
                  <Paragraphtext 
                     text={<>Your new password must be <br />different pages previous password</>}
                     className='text-[13px]'
                  />
            </div>
            <form onSubmit={handleSubmit(formSubmit)}>
                   <div className='mb-[25px] mt-[25px] flex flex-col gap-[10px]'>
                     <Input
                         label="New password"
                         type="password"
                         placeholder=""
                         error={errors.password?.message}
                         {...register("password")}
                     />
                     <Input
                         label="Confirm new password"
                         type="password"
                         placeholder=""
                         error={errors.confirmPassword?.message}
                         {...register("confirmPassword")}
                     />
                   </div>
                   <Buttons type='submit' text='Submit' width='100%' height='40px' marginTop='15px' />
                   
            </form>
        </div>
    </div>
  )
}

export default Forgetpassword