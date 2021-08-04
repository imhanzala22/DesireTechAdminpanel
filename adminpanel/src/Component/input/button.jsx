import React from 'react';
import './button.css';
const Button = ({title,handleSubmit}) => {

    return (
        <div>
            <button className='btn' onClick={handleSubmit}>{title} </button>
        </div> 


     );
}
 
export default Button;