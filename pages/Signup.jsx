import React,{useState} from 'react' 
import {app} from './../src/Firebase';
import {createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from './../src/Firebase';

function Signup() {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Signup successful");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already registered");
      } else if (error.code === "auth/weak-password") {
        alert("Password must be at least 6 characters");
      } else {
        alert(error.message);
      }
    }
  };
  return (
    <>
    <h1>Sign Up</h1>
    <form onSubmit={handleSignup} className='signuppage'>
        <label htmlFor="">Email</label> <br />
        <input onChange={(e)=> setEmail(e.target.value)}value={email} type='email'placeholder='enter your email here' /> <br />
        <label htmlFor="">Password</label> <br />
        <input
        type="password"
        placeholder="Password"
        value={password}
        minLength={6}
        onChange={(e) => setPassword(e.target.value)}
        required
      /> <br />    
             <button type='submit'>Sign up</button>
    </form>
        </>
  )
}


export default Signup;