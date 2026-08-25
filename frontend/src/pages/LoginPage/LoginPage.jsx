import React from 'react'
import HeaderText from '../../features/Auth/components/HeaderText/HeaderText'
import Paragraphtext from '../../features/Auth/components/ParagraphText/Paragraphtext'
import styles from '../Registration/Registration.module.css';
import DualHeading from '../../components/Dual_Heading/DualHeading';
import Buttons from '../../components/Button/Buttons';
import axios from 'axios';
import { Input } from '../../components/input/Input';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from '../../schemas/loginSchemas';
import Image from '../../components/Image';
import Google from '../../assets/google.png';
import Github from '../../assets/github.png';



const LoginPage = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema)
  });

  const [email, setemail] = useState(errors.email?.message)

  const formSubmit = async (data) => {
      try {

        const res = await axios.post(
        "http://backend.test/api/login", {
         data
        }, {
          headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
         }
      });

      console.log(res.data);
        
      } catch (error) {
        
      }
  }



  return (
    <div className={styles.registrationPage}>
      <div className={styles.content}>
        <div className='mb-[20px]'>
          <HeaderText text='Welcome Back' className='font-[600] text-[22px]' />
          <Paragraphtext text='Login in to your account' className='text-[12px]'/>
        </div>
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className='flex flex-col gap-[15px]'>

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

            <div className='flex gap-[4px] mt-[10px] mb-[7px]'>
              <Input
                type="checkbox"
                error={errors.checkbox?.message}
                {...register("checkbox")}
              />
              <DualHeading className='flex text-xs gap-[3px] justify-between w-[100%] ' text='Remember me' dualText='Terms & Conditions' element=
                {<Link style={{ textDecoration: 'none', color: 'var(--primary-color)' }} to='/forgetPassword'>Forget Password?</Link>} />
            </div>
          </div>
          <Buttons type='submit' text='Login' width='100%' height='35px' marginTop='15px' />
        </form>
        <div className="mt-[27px] mb-[27px] flex flex-col gap-[13px]">
        <Paragraphtext
            text='or continue with'
            className='text-[12.5px] text-[var(--text-muted)]'>
        </Paragraphtext>
        <div className="flex flex justify-center gap-[10px]">
              <Image src={Google}/>
              <Image src={Github} />
        </div>
        </div>
        <DualHeading
          text="Dont't have an account?"
          element={<Link style={{ textDecoration: 'none', color: 'var(--primary-color)' }} to='/login'>Sign up</Link>} className='flex justify-center text-xs gap-[3px]' />
      </div>
    </div>
  )
}

export default LoginPage