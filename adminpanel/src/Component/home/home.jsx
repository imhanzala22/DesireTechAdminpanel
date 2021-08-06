import React from 'react';
import Button from '../input/button';
import Header from '../header/header';
import './home.css'
const Home = () => {
    return (


        
        // const handlesubmit=()=>{
        //     console.log('click ho gya');
        // };

        <div>
        <Header/>
           <div className='home_settings'>
           <Button title='manage pc/laptops' />
           <Button title='manage pc part' />
           <Button title='manage parts' />
           <Button title='custom bill order' />
            
           </div>    
        </div>
    );
}
 
export default Home;