import React, { useState } from 'react'

import { useRef } from 'react';
import axios from 'axios';



  const App = () => {
    const userRef = useRef();
    const passRef = useRef();
    const [token, setToken] = useState(""); 
    const url = "http://localhost:8000/api/users/login";
    const handleSubmit = (e) =>{
      e.preventDefault();
      console.log(userRef.current.value, passRef.current.value);
  
      const obj = {
        email:userRef.current.value,
        password: passRef.current.value
      }
      axios.post(url, obj).then((res)=> localStorage.setItem("token", res.data.token)).catch((err)=>console.log(err))

      // navigate to different component or page using navigate function from react router dom (library)
     
    }
  return (
    <div>
       <form action="POST" className='form-control' onSubmit={handleSubmit}>
        <label htmlFor="usernameOrEmail">Username: </label>
        <input type="text" id='usernameOrEmail' ref={userRef}/>
        <label htmlFor="password">Password:</label>
        <input type="text" id='password' ref={passRef}/>
        <button className='btn btn-primary'>Log In</button>
      </form>
    </div>
  )
}

export default App
