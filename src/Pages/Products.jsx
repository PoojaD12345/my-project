import React, { useState,useEffect } from 'react'
import axios from 'axios'
import styles from '../components/style.module.css'

const Products = () => {
  // const [query,setQuery]=useState();
  const [todos,setTodos]=useState([])

  // const handleClick= (e)=>{
  //   e.preventDefault()
  //   console.log(e.target.value)
  //   setQuery(e.target.value)
  // }

  // console.log(query)

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
       <div className={styles.single} >
         <img src={e.image} className={styles.img}/>
         <h5>{e.title}</h5>
         </div>
    ))}
    </div>
  )
}

export default Products