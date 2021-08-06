import React from 'react';
import Header from '../header/header';
import Input from '../input/input';
import Button from '../input/button';
import './Settings.css';
const Setting = () => {
    return ( 
        <div>
            <Header/>
            <h1 className='setting_head1'> Settings</h1>
            <div className='Parent_settings'>
           
            
            <div className='settings_inputs_password'>
            <h2>Change password</h2>
            <Input type='text' placeholder='Old password'/>
            <Input type='text' placeholder='New password'/>
            <Input type='text' placeholder='Confirm password'/>
            <Button title='Submit' />
            </div>
            <div className="settings_inputs_email">
                <h2>Change email</h2>
                <Input type='text' placeholder='Email'/>
                <Input type='text' placeholder='Enter password'/>
                <Button title='Submit' />
            </div>
            </div>
        </div>
     );
}
 
export default Setting;
<div>
    <header/>
</div>