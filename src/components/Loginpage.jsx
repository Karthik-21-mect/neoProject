import React from 'react'
import {useState} from 'react';

export default function Loginpage() {
    const [value,setValue] = useState(0);
    const increase = () =>{
        setValue(value+1);
    };
  return (
    <div>
        <p> count-{value} </p>
        <button type='button' onClick={increase}>click me</button>
    </div>
  )
}
