import React from 'react'
import './Register.css'
export default function Forms() {
  return (
    <div >
        <div className='bg'>
        <h2 className='bs'>BookMyStay</h2>
        <div className='boy'>
        <h3> USER REGISTRATION FORM</h3> 
       <input type="text" placeholder=' UserName' className='txtarea1' required/>
       <p><input type="text" placeholder=' MailId' className='txtarea22' required/></p>
        <p > <input type="password"  placeholder=' Password' className='txtarea3' required/></p>
        <button type='Submit' className='btn'>REGISTER</button>
        </div>
        </div>
    </div>
  )
}
