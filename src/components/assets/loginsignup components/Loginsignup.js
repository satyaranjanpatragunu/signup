import React, { useState } from 'react'
import './Loginsignup.css'
import { IoPersonSharp} from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
// import Login from './Login';

function Loginsignup() {

  const[action,setAction]=useState("SIGN UP")
  return (
    <div className='Main-container'>
        <div className='card-tepmlet'>
         <h1> {action}</h1>
         <div className="underline"></div>
         {action==="LOG IN"?<div></div>: <div className='inputs'>
        <IoPersonSharp size={25} />
        
        <input type='text' placeholder='NAME'/>
        </div>}
       <div  className='input-fields'>
        <div className='All-inputs'>
       
       </div>
       <div className='All-inputs'>
        <div className='inputs'>
        <MdEmail size={25} />
        <input type='email' placeholder='EMAIL'/>
        </div>
        </div>
        <div className='All-inputs'>
        <div className='inputs'>
        <RiLockPasswordFill size={25} />
        <input type='password' placeholder='PASSWORD'/>
           </div>
          </div>
         </div>
         {action==="SIGN UP"?<div></div>:<div className="forgot-pass">
            <p>Lost Password?<span style={{color: "blue"}}>Click Here!</span></p>
          </div>}
         
         <div className="Buttons">
             <div className={action==="LOG IN"?"submit gray":"submit"} onClick={()=>{setAction("SIGN UP")}}>SIGN UP</div>
             <div className={action==="SIGN UP"?"submit gray":"submit"} onClick={()=>{setAction("LOG IN")}}>LOG IN</div>
         </div>
        </div>
    </div>
  )
}

export default Loginsignup