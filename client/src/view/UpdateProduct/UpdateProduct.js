import React, { useEffect, useState } from 'react'
import './UpdateProduct.css'
import axios from 'axios'
import {  useParams } from 'react-router-dom'

function UpdateProduct() {
    const [name,setName]=useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [brand,setBrand]=useState('')
    const [url,setUrl]=useState('')
   
    const{id}=useParams();

    const updateDetails= async ()=>{
        const responce =await axios.get(`/product/${id}`)
       const{ name, description, brand, imgurl, price}=(responce?.data?.data)

        setName(name)
        setDescription(description)
        setBrand(brand)
        setUrl(imgurl)
        setPrice(price)
      
        
       
    }
    useEffect(()=>{
        updateDetails()
    },[])

    const update= async()=>{
        const updateDetails={
            name,
            description,
            brand,
            imgurl:url,
            price

        }
        const response=await axios.put(`/product/${id}`,updateDetails)
       alert(response?.data?.message);
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
            
     <button className='btn' type='button' onClick={update}>Update products</button>
        </form>
    </div>
  )
}

export default UpdateProduct
