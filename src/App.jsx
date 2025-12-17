import { useState } from 'react'
import {createUserWithEmailAndPassword } from 'firebase/auth'
import {auth} from"./Firebase"
import {app} from "./Firebase"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Signup from '../pages/Signup'
import Signin from '../pages/Signin'
import {BrowserRouter as Router,Route,Routes,Link, BrowserRouter} from 'react-router-dom'
import Newpage from '../pages/Newpage'



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<><Signup/> <Signin/></>}/>
      <Route path='/newpage' element={<Newpage />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App
