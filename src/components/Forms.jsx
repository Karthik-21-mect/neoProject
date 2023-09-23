import React from 'react'
import './Forms.css'
export default function Forms() {
  return (
    <div >
        <div className='bg'>
        <h2 className='bs'>BookMyStay</h2>
        <div className='boy'>
        <h3> USER LOGIN FORM</h3>
       <input type="text" placeholder=' Username' className='txtarea1' required/>
        <p > <input type="password"  placeholder=' Password' className='txtarea2' required/></p>
        <button type='Submit' className='btn'>LOGIN</button>
        <p className='p1'>Don't  have an account? <a href="">Register</a> here</p>
        </div>
        </div>
    </div>
  )
}
