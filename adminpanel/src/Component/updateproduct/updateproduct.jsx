import React,{useState} from 'react';
import Header from '../header/header';
import Button from '../input/button';
import Input from '../input/input';
import './updateproduct.css';
const Updateproduct = () => {
    const [productId,setproductId]= useState ('');
    const [productName,setproductName]= useState ('');
    const [companyName,setCompanyName]= useState ('');
    const [productModel,setproductModel]= useState ('');
    const [productPrice,setproductPrice]= useState ('');
    const [productQuantity,setproductQuantity]= useState ('');
    const [productDescription,setproductDescription]= useState ('');

    const handleProductId=(e)=>{
            setproductId(e.target.value);
            console.log(e.target.value);
    }

    const handleProductName=(e)=>{
            setproductName(e.target.value);
            console.log(e.target.value);
    }

    const handlecompanyName=(e)=>{
            setCompanyName(e.target.value);
            console.log(e.target.value);
    }

    const handleProductModel=(e)=>{
            setproductModel(e.target.value);
            console.log(e.target.value);
    }

    const handleProductPrice=(e)=>{
            setproductPrice(e.target.value);
            console.log(e.target.value);
    }

    const handleProductQuantity=(e)=>{
            setproductQuantity(e.target.value);
            console.log(e.target.value);
    }

    const handleProductDescription=(e)=>{
            setproductDescription(e.target.value);
            console.log(e.target.value);
    }

    return ( 
        <div>
        <Header/>
        <h1 className='prod_head1'>Add Product</h1>
        <div className='main_Product'>
           
            <div className='left_inputs'>
            <div className='first_log'>
                <h2 > product Id</h2>
                <Input type='text' placeholder='' handleChange={handleProductId}/>
            </div>
            
            <div className='first_log'>
                <h2 > product Name</h2>
                <Input type='text' placeholder='' handleChange={handleProductName}/>
            </div>
            <div className='first_log'>
                <h2 > Company name</h2>
                <Input type='text' placeholder='' handleChange={handlecompanyName}/>
            </div>
            <div className='first_log'>
                <h2 > Model</h2>
                <Input type='text' placeholder='' handleChange={handleProductModel}/>
            </div>
            <div className='first_log'>
                <h2 > Price</h2>
                <Input type='text' placeholder='' handleChange={handleProductPrice}/>
            </div>
            <div className='first_log'>
                <h2 > Qunatity</h2>
                <Input type='text' placeholder='' handleChange={handleProductQuantity}/>
            </div>
            </div>
            <div className="right_inputs">
            <h3>Description</h3>
                <textarea name="description" id="" cols="20" rows="10"></textarea>
                <Input type='file' placeholder='' handleChange={handleProductDescription}/>
                <Button title='add product'/>
            </div>

            </div>
    </div>
     );
}
 
export default Updateproduct;