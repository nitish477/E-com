import React, { useState, useEffect } from 'react';
import './Home.css';
import axios from 'axios';
import ProductCard from '../../component/ProductCard/ProductCard';

function Home() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get('/products');
    setData(response.data.data);
  }

  useEffect(() => {
    getData();
  }, []);


const  remove= async (_id)=>{
 
  const responce=  await axios.delete(`/product/${_id}`);
    if(responce?.data?.status)
    {
      
      alert(responce?.data?.message)
      setData(responce?.data?.data)
    }
}
 

  return (
    <div className='main-contanier'>
      {data?.map((obj, i) => {
        const { name, description, brand, imgurl, price,_id } = obj;

        return (
          <ProductCard
            name={name}
            description={description}
            brand={brand}
            imgurl={imgurl}
            price={price}
            key={i}
             remove={()=>{remove(_id)}}
            _id={_id}
          />
        );
      })}
    </div>
  );
}

export default Home;
