import React from 'react'
import './App.css'
import { Router,Routes,Route } from 'react-router-dom'
import RegistrationPage from './pages/Registration/RegistrationPage'
import VerfiyEmail from './pages/VerifyEmail/verfiyEmail'

const App = () => {
  return (
    <div > 
        <Routes>
            <Route path='/' element={<RegistrationPage />}></Route>
            <Route path="/verifyEmail" element={<VerfiyEmail/>}></Route>
        </Routes>
    </div>
  )
}

export default App