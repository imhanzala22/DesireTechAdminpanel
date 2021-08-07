import React from 'react';
import Header from '../header/header';
import Button from '../input/button';
import Input from '../input/input';
import './feedback.css';
const Feedback = () => {
    return (  
        <div className='container'>
            <Header/>
            <h1 className='Feed_head1'>
                Feedback
            </h1>
            <div className='First_row'>
                <Input type='text' placeholder=''/>
                <Button title='Approve'/>
                <Button title='Delete'/>

            </div>
            <div className='First_row'>
                <Input type='text' placeholder=''/>
                <Button title='Approve'/>
                <Button title='Delete'/>

            </div>
            <div className='First_row'>
                <Input type='text' placeholder=''/>
                <Button title='Approve'/>
                <Button title='Delete'/>

            </div>
            <div className='First_row'>
                <Input type='text' placeholder=''/>
                <Button title='Approve'/>
                <Button title='Delete'/>

            </div>
            <div className='First_row'>
                <Input type='text' placeholder=''/>
                <Button title='Approve'/>
                <Button title='Delete'/>

            </div>
        </div>
    );
}
 
export default Feedback;