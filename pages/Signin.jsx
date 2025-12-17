import React ,{useState}from 'react'
import { auth } from '../src/Firebase';
import {signInWithEmailAndPassword} from 'firebase/auth';
import Newpage from './Newpage';
import { useNavigate } from 'react-router-dom';

function Signin() {
      const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const navigate=useNavigate();

    const signIn=(e)=>{
      e.preventDefault();
        signInWithEmailAndPassword(auth,email,password)
        .then(value=>{alert("successfully signed in"); navigate('/newpage') })
        .catch(err=>alert(err.message));
    }
  return (
    <form onSubmit={signIn} name='form' style={{border:"1px solid black", marginLeft:"300px"}}>
        <label htmlFor="email">Email</label> <br />
        <input onChange={(e)=> setEmail(e.target.value)} type="email" id="email" value={email} /><br /> <br />
        <label htmlFor="password">Password</label> <br />
        <input onChange={(e)=> setPassword(e.target.value)} value={password} type="password" id="password" /> <br /><br />
        <button type='submit'>Sign In</button>
    </form>
  )
}

export default Signin
