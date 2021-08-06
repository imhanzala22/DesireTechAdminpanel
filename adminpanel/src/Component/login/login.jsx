import React, { useState } from 'react';
import {Link} from "react-router-dom"
import img1 from '../../Assets/logo/desiretech1.png'
import './login.css'
import Input from '../input/input';
import Button from '../input/button';
const LogIn = () => {
    const [emailvalue,setemailvalue]= useState('');
    const [password,setpassword]=useState('');

    const handleEmail=(e)=>{
        setemailvalue(e.target.value);
        console.log(e.target.value);
    };

    const handlePassword=(e)=>{
        setpassword(e.target.value);
        console.log(e.target.value);
    };
    const handlesubmit=()=>{
        console.log('click ho gya');
    };
    return ( 
        <div className='container '>
            <div className='loginbox'>
                <div className='logoimg'>
                <img className='logoimg' src={img1} alt="Will be provided soon" />
                </div>
                <div className='login_input_setting'>
                <>
            <h1>Admin Login</h1>
            </>
            <div className='inputsetting'>
            
            <Input type='text' placeholder=' Email/UserName' handleChange={handleEmail} /> 
            <br />
            <Input type='password' placeholder='enter password' handleChange={handlePassword} />
             <Link>   Forget Password ? click  </Link>
            <Button className='login__btn' title='log In' handleSubmit={handlesubmit}/>
            </div>

                </div>

            </div>
           
            {/* <div className='loginbox '>
                <div>
            <img className='logoimg' src={img1} alt="Will be provided soon" />
            </div>
            <>
            <h1>Admin Login</h1>
            </>
            <div className='inputsetting'>
            
            <Input type='text' placeholder=' Email/UserName' handleChange={handleEmail} /> 
            <br />
            <Input type='password' placeholder='enter password' handleChange={handlePassword} />
             <Link>   Forget Password ? click  </Link>
            <Button className='login__btn' title='log In' handleSubmit={handlesubmit}/>
            </div>
            </div> */}
        </div>
     );
}
 
export default LogIn;