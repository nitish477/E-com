import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Details.css'

function Details() {
  const { id } = useParams();
  const [details, setDetails] = useState({});

  const load = async () => {
    
      const response = await axios.get(`/product/${id}`); 
      setDetails(response.data.data);
   
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <>
    <h1 className='text-center'>Details</h1>
     
      <div>
        <img src={details.imgurl} alt="" />
        <h2>Name: {details.name}</h2>
        <p>Description: {details.description}</p>
        setUrl
        <strong>Price: {details.price}</strong>
      </div>
    </>
  );
}

export default Details;
