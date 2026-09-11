import './App.css'
import { Router,Routes,Route } from 'react-router-dom'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadCredentials } from "./features/Auth/authSlice";
import RegistrationPage from './pages/Registration/RegistrationPage'
import VerfiyEmail from './pages/VerifyEmail/verfiyEmail'
import LoginPage from './pages/LoginPage/LoginPage'
import OAuthCallback from './pages/OAuthCallback/OAuthCallback'
import Forgetpassword from './pages/Forgetpassword'
import ResetPassword from './pages/ResetPassword';



const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
        dispatch(loadCredentials());
  }, [dispatch]);


  return (
    <div > 
        <Routes>
            <Route path='/' element={<RegistrationPage />}></Route>
            <Route path='login' element={<LoginPage />}></Route>
            <Route path="/verifyEmail" element={<VerfiyEmail/>}></Route>
            <Route path="/oauth/callback" element={<OAuthCallback />}/>
            <Route path='/forgetPassword' element={<Forgetpassword/>}/>
            <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
    </div>
  )
}

export default App