import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Goal = () => {
  const handleClick = () =>{
    localStorage.removeItem('token')
  }
  const [data, setData] = useState([]);

  useEffect(()=>{
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://localhost:8000/api/goals',
      headers: { 
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/x-www-form-urlencoded",
      }
    };
    
  
    axios.request("http://localhost:8000/api/goals",config).then((res)=>setData(res.data)).catch((err)=>console.log(err))

  }, [])

 

 
  return (
    <div>
      <p>List of Goals</p>

      {data.map((item)=>
        <p key={item._id}>{item.text}</p>
     )}

      <Link to="/" >
      <button onClick={handleClick}>Log Out</button>
      </Link>
      
    </div>
  )
}

export default Goal
