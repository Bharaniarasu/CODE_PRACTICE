import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Success() {
    const [timer,setTimer]=useState(15);
    const navigate=useNavigate();
    useEffect(()=>{
        setInterval(()=>setTimer(timer-1),1000);
        setTimeout(() => {
            navigate("/")
        }, 15000);
    },[timer])
  return (
    <div>
      <h2>Order placed Successfully.You will redirect to home with in {timer} seconds.</h2>
    </div>
  )
}
