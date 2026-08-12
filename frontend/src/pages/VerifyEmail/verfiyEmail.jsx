import React from 'react'
import styles from './verifyEmail.module.css'
import envolveImg from '../../assets/envolve.png';
import HeaderText from '../../features/Auth/components/HeaderText/HeaderText';
import Paragraphtext from '../../features/Auth/components/ParagraphText/Paragraphtext';
import DualHeading from '../../components/Dual_Heading/DualHeading';
import { Link, useLocation } from 'react-router-dom';


const verfiyEmail = () => {

  const location = useLocation();

  const email = location.state?.email;

  return (
    <div className={styles.registrationPage}>
      <div className={styles.content}>
           <img src={envolveImg}></img>
           <HeaderText text="Verify your email" className='text-[20px] font-[600]'></HeaderText>
           <div className='flex flex-col mt-[15px]'>
                 <Paragraphtext text="We've sent a verification link to" className='text-[13px]'></Paragraphtext>
                 <Paragraphtext text={email} className=' text-xs text-black'></Paragraphtext>
           </div>
           <DualHeading 
                text="Didn't receive the email? "
                element={
                   <Link style={{ textDecoration: 'none', color: 'var(--primary-color)' }} to='/resendCode'> Resend</Link>
                } 
                className='flex text-xs mt-6 gap-[3px]'>          
           </DualHeading>
           <Link className='text-xs mt-[20px]'>Back to login</Link>
      </div>
    </div>
  )
}

export default verfiyEmail