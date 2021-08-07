import React,{useState} from 'react';
import Header from '../header/header';
import Button from '../input/button';
import Input from '../input/input';
import './updateproduct.css';
const Updateproduct = () => {
    const [productId,setproductId]= useState ('');

    const handleProductId=(e)=>{
            setproductId(e.target.value);
            console.log(e.target.value);
    }

    return ( 
        <div>
            <Header/>
            <h1 className='prod1_head1'>Update Product</h1>
            <div className='main_Product1'>
               
                <div className='left_inputs1'>
                <div className='first_log1'>
                    <h2 > product Id</h2>
                    <Input type='text' placeholder='' handleChange={handleProductId}/>
                </div>
                <div className='first_log1'>
                    <h2 > product Id</h2>
                    <Input type='text' placeholder='' handleChange={handleProductId}/>
                </div>
                <div className='first_log1'>
                    <h2 > product Name</h2>
                    <Input type='text' placeholder='' handleChange={handleProductId}/>
                </div>
                <div className='first_log1'>
                    <h2 > Company name</h2>
                    <Input type='text' placeholder='' handleChange={handleProductId}/>
                </div>
                <div className='first_log1'>
                    <h2 > Model</h2>
                    <Input type='text' placeholder='' handleChange={handleProductId}/>
                </div>
                <div className='first_log1'>
                    <h2 > Price</h2>
                    <Input type='text' placeholder='' handleChange={handleProductId}/>
                </div>
                <div className='first_log1'>
                    <h2 > Qunatity</h2>
                    <Input type='text' placeholder='' handleChange={handleProductId}/>
                </div>
                </div>
                <div className="right_inputs1">
                    <h3>Description</h3>
                    <textarea name="description" id="" cols="20" rows="10"></textarea>
                    <Input type='file' placeholder='' handleChange={handleProductId}/>
                    <Button title='add product'/>
                </div>

                </div>
        </div>
     );
}
 
export default Updateproduct;