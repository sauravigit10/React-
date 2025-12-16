import { useState } from 'react'
// import {getDatabase,ref,set} from "firebase/database"
import {createUserWithEmailAndPassword } from 'firebase/auth'
import {auth} from"./Firebase"
import {app} from "./Firebase"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Signup from '../pages/Signup'



function App() {
  return (
    <>
     <div>
      <h1> React app</h1>
      <Signup/>
     </div>
    </>
  )
}

export default App
