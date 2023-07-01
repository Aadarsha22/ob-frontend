import React, { useState } from 'react'
import { forgotPasswordApi } from '../../apis/Api';

const ForgotPassword = () => {
    const[email, setEmail] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        forgotPasswordApi ({email}). then((res) => {
            toast.success("Password reset link sent to your email")
        }).catch((err) => {
            console.log(err)
            toast.error("Something went wrong")
        })
    }
  return (
    <div className='container'>
        <h1>ForgotPassword</h1>
        <label>Type Your email</label>
        <input className='form-control w-25' type="email" placeholder='enter valid email' onChange={(e) => setEmail(e.target.value)}/>
        <button className='btn btn-primary' onClick={handleSubmit}>
            Send Password Reset Link
        </button>
        </div>
  )
}

export default ForgotPassword