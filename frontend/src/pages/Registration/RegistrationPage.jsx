import React from 'react'
import HeaderText from '../../features/Auth/components/HeaderText/HeaderText'
import Paragraphtext from '../../features/Auth/components/ParagraphText/Paragraphtext'
import styles from './Registration.module.css';
import DualHeading from '../../components/Dual_Heading/DualHeading';
import Buttons from '../../components/Button/Buttons';
import axios from 'axios';
import { Input } from '../../components/input/Input';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from '../../schemas/authSchemas';
import { create } from '../../features/Auth/authSlice';
import { useNavigate } from 'react-router-dom';

const RegistrationPage = () => {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema)
  });

  const [email, setemail] = useState(errors.email?.message)  

    const formSubmit = async (data) => {

      try {

        const res = await axios.post(
          "http://backend.test/api/register",
          data
        );

        localStorage.setItem("token", res.data.data.token);

        navigate('/verifyEmail',{
            state: {
                email: res.data.data.user.email
            }
        })


      } catch (error) {
        if (error.response?.status === 422) {
            setemail(error.response.data.errors.email)
        }
      }
    }

  return (
    <div className={styles.registrationPage}>
      <div className={styles.content}>
        <div className='mb-[20px]'>
          <HeaderText text='Create your account' className='m-0 font-[600] text-[20px]' />
          <Paragraphtext text='Start your 14 day free trial' className='text-[12px]' />
        </div>
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className='flex flex-col gap-[10px]'>
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
              error={email}
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
              <DualHeading className='flex text-xs gap-[3px]' text='I agree to the' dualText='Terms & Conditions' element={<span>Terms & Conditions</span>} />
            </div>
          </div>
          <Buttons type='submit' text='Create account' width='100%' height='35px' marginTop='15px'/>
        </form>

        <DualHeading
          text='Already have an account?'
          element={<Link style={{ textDecoration: 'none', color: 'var(--primary-color)' }} to='/login'>Login</Link>} className='flex justify-center text-xs mt-6 gap-[3px]' />
      </div>
    </div>
  )
}

export default RegistrationPage