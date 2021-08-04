import React from 'react';
import './input.css';
const Input = ({type,placeholder,handleChange}) => {

  
    return (
    <div>
        <input className='input' type={type} placeholder={placeholder} onChange={handleChange} />

    </div>
    
    );
}
 
export default Input;