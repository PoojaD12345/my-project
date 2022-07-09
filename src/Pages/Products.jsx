import React, { useState,useEffect } from 'react'
import axios from 'axios'
import styles from '../components/style.module.css'
import {Link} from "react-router-dom"

const Products = () => {
  // const [query,setQuery]=useState();
  const [todos,setTodos]=useState([])

  useEffect (()=>{
    axios({
      url:"https://fakestoreapi.com/products",
       method:"GET"
      }).then((r)=>{
          setTodos(r.data);
          console.log(r.data);
      })
      .catch((err)=>{});
  },[])
  // useEffect(()=>{
  //   const getData=async()=>{
  //     let res=await axios.get(`https://reqres.in/api/users?`)
  //     console.log(res)
  //   }
  //   getData()
  // },[])
  
  return (
    <div className={styles.product}>
    {todos.map((e)=>(
       <div className={styles.single} ><Link to={`/products/${e.id}`}>
         <img src={e.image} className={styles.img}/>
         <h5>{e.title}</h5>
         <button>Add to cart</button>
         </Link>
         </div>
    ))}
    
    </div>
  )
}

export default Products