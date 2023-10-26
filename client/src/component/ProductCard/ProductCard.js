import React from 'react'
import './ProductCard.css'



function ProductCard({name,description,brand,imgurl,price,_id,remove}) {
  
 

const read=(id)=>{
   window.open(`/details/${id}`,'_blank')
}
const update=(id)=>{
  window.open(`/updateproduct/${id}`,'_blank')
}

  return (
    <div className='pro-main'>
        <img src={imgurl} alt="" className='img'/>
        <strong className='name'>{name}</strong>
      
        <b style={{margin:'5px '}}>Price :{price} </b>
        <span className='remove' 
          onClick={()=>{remove(_id)}}
        >❌</span><br/>
        <span className='update' 
          onClick={()=>{update(_id)}}
        >📝</span><br/>
        <button onClick={()=>{read(_id)}} className='btn-read'>View</button>
    </div>
  )
}

export default ProductCard
