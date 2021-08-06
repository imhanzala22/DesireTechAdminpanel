import React,{useState} from 'react';
import Header from '../header/header';
import Input from '../input/input';
import Button from '../input/button';
import './Settings.css';
const Setting = () => {
    const [oldpassword,setoldpassword]= useState ('');
    const [newpassword,setnewpassword]= useState ('');
    const [confirmpassword,setconfirmpassword]= useState ('');
    const [newemail,setnewemail]=useState('');
    const [password,setpassword]=useState('');


    const handleoldpassword=(e)=>{
        setoldpassword(e.target.value);
        console.log(e.target.value);
    };

    const handlenewPassword=(e)=>{
        setnewpassword(e.target.value);
        console.log(e.target.value);
    };
    const handleconfirmPassword=(e)=>{
        setconfirmpassword(e.target.value);
        console.log(e.target.value);
    };
    const handlesubmit=()=>{
        console.log('click ho gya');
    };
    const handlenewemail=(e)=>{
        setnewemail(e.target.value);
        console.log(e.target.value);
    }
    const handlepassword=(e)=>{
        setpassword(e.target.value);
        console.log(e.target.value);
    }


    return ( 
        
        <div>
            <Header/>
            <h1 className='setting_head1'> Settings</h1>
            <div className='Parent_settings'>
           
            
            <div className='settings_inputs_password'>
            <h2>Change password</h2>
            <Input type='text' placeholder='Old password' handleChange={handleoldpassword} />
            <Input type='text' placeholder='New password' handleChange={handlenewPassword}/>
            <Input type='text' placeholder='Confirm password' handleChange={handleconfirmPassword}/>
            <Button title='Submit' handlesubmit={handlesubmit} />
            </div>
            <div className="settings_inputs_email">
                <h2>Change email</h2>
                <Input type='text' placeholder='Email' handleChange={handlenewemail}/>
                <Input type='text' placeholder='Enter password' handleChange= {handlepassword}/>
                <Button title='Submit' handleSubmit={handlesubmit} />
            </div>
            </div>
        </div>
     );
}
 
export default Setting;
<div>
    <header/>
</div>