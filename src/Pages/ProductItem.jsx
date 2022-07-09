import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductItem = () => {

    const {id} = useParams();
    const [product,setProduct]=useState([])
    
    useEffect(()=>
    {
        if(id){
            fetch(`https://fakestoreapi.com/products/${id}`)
            .then((r)=>r.json())
            .then((d)=>setProduct(d));
        }
    },[id])
    console.log(product.title)
  return (
    <div>products
       <button>add</button>
    </div>
  )
}

export default ProductItem