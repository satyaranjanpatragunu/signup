import React from 'react'
import './Loginsignup.css'
import { IoPersonSharp} from "react-icons/io5";
import { MdEmail } from "react-icons/md";
export default function Login() {
  return (
    <div className='Main-container'>
    <div className='card-tepmlet'>
     <h1> Login</h1>
     <div className="underline"></div>
   <div  className='input-fields'>
    <div className='All-inputs'>
    <div className='inputs'>
    <IoPersonSharp size={25} />
    
    <input type='text' placeholder='NAME'/>
    </div>
   </div>
   <div className='All-inputs'>
    <div className='inputs'>
    <MdEmail size={25} />
    <input type='email' placeholder='EMAIL'/>
    </div>
    </div>
  
     </div>
     <div className="forgot-pass">
        <p>Lost Password?<span style={{color: "blue"}}>Click Here!</span></p>
      </div>
     <div className="Buttons">
         <div className="sign-up"style={{backgroundColor: "grey"}}>Sign-up</div>
         <div className="sign-up">Login</div>
     </div>
    </div>
</div>
  )
}
