import React, { useState } from 'react'
import './AddProduct.css'
import axios from 'axios'

function AddProduct() {
    const [name,setName]=useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [brand,setBrand]=useState('')
    const [url,setUrl]=useState('')

    const AddProduct= async ()=>{
        
        if(!name||!price||!description)
        {
            alert('Requide All Feild')
        }
     
        const obj={
            name: name,
            price: price,
            description: description,
            brand: brand,
             imgurl:url
           }
          const responce= await axios.post('/product',obj)
         

        setName('')
        setDescription('')
        setBrand('')
        setUrl('')
        setPrice('')
         
    }

  return (
    <div>
        <form className='form-contanier'>
            <input 
            type="text" 
            placeholder='product name' 
            value={name} 
            onChange={e=>setName(e.target.value)}
            className='input-box'
            />
            <input 
            type="text" 
            placeholder='Description' 
            value={description} 
            onChange={e=>setDescription(e.target.value)}
            className='input-box'
            />
            <input 
            type="text" 
            placeholder='Brand' 
            value={brand} 
            onChange={e=>setBrand(e.target.value)}
            className='input-box'
            />
            <input 
            type="text" 
            placeholder='Image-URL' 
            value={url} 
            onChange={e=>setUrl(e.target.value)}
            className='input-box'
            />
            <input 
            type="text" 
            placeholder='Enter Price' 
            value={price} 
            onChange={e=>setPrice(e.target.value)}
            className='input-box'
            />
            
     <button className='btn' type='button' onClick={AddProduct}>Add products</button>
        </form>
    </div>
  )
}

export default AddProduct
