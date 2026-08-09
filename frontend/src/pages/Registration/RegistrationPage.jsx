import React from 'react'
import HeaderText from '../../features/Auth/components/HeaderText/HeaderText'
import Paragraphtext from '../../features/Auth/components/ParagraphText/Paragraphtext'
import styles from './Registration.module.css';
import DualHeading from '../../components/Dual_Heading/DualHeading';
import Buttons from '../../components/Button/Buttons';
import { Input } from '../../components/input/Input';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from '../../schemas/authSchemas';
import { useDispatch } from 'react-redux'
import { create } from '../../features/Auth/authSlice';
import axios from 'axios';

const RegistrationPage = () => {

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema)
  });

  const formSubmit = async (data) => {
  
       try {

          const res = await axios.post(
              "http://backend.test/api/register",
               data
          );

          console.log(res.data)

        
       } catch (error) {
           console.log(error.response?.data);
           if(error.response?.status === 422){
              console.log(error.response.data.errors);
           }
       }
  }

  return (
    <div className={styles.registrationPage}>
      <div className={styles.content}>
        <div className={styles.text}>
          <HeaderText text='Create your account' />
          <Paragraphtext text='Start your 14 day free trial' />
        </div>
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className={styles.inputs}>
            <Input
              label="Full name"
              type="text"
              placeholder="Enter Full Name"
              error={errors.fullName?.message}
              {...register("fullName")}
            />

            <Input
              label="Email address"
              type="email"
              placeholder="Enter Email"
              error={errors.email?.message}
              {...register("email")}
            />

            <Input
              label="Password"
              type="password"
              placeholder="Enter Password"
              error={errors.password?.message}
              {...register("password")}
            />

            <Input
              label="Confirm Password"
              type="password"
              placeholder="Confirm Password"
              error={errors.confirmPassword?.message}
              {...register("confirmPassword")}
            />
            <div className={styles.checkboxDual}>
              <Input
                type="checkbox"
                error={errors.checkbox?.message}
                {...register("checkbox")}
              />
              <DualHeading className={styles.DualHeading} text='I agree to the' dualText='Terms & Conditions' element={<span>Terms & Conditions</span>} />
            </div>
          </div>
          <Buttons type='submit' text='Create account' width='100%' height='35px' marginTop='15px' />
        </form>

        <DualHeading
          text='Already have an account?'
          element={<Link style={{ textDecoration: 'none', color: 'var(--primary-color)' }} to='/login'>Login</Link>} className={styles.DualHeading2} />
      </div>
    </div>
  )
}

export default RegistrationPage