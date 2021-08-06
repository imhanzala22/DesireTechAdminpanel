import React from 'react';
import Button from '../input/button';
import Header from '../header/header';
import './home.css'
const Home = () => {

     
    const handlesubmit1=()=>{
        console.log('click ho gya');
    };
    
    const handlesubmit2=()=>{
        console.log('click ho gya');
    };
    
    const handlesubmit3=()=>{
        console.log('click ho gya');
    };
    
    const handlesubmit4=()=>{
        console.log('click ho gya');
    };
    
    

    return (


       

        <div>
        <Header/>
           <div className='home_settings' >
           <Button title='manage pc/laptops'handleSubmit={handlesubmit1} />
           <Button title='manage pc part' handleSubmit={handlesubmit2}/>
           <Button title='manage parts' handleSubmit={handlesubmit3} />
           <Button title='custom bill order' handleSubmit={handlesubmit4}/>
            
           </div>    
        </div>
    );
}
 
export default Home;