import React, { useEffect, useState } from 'react'
import productsJson from "../products.json"

const Productos = () => {
  
    const [products, setProducts] = useState([]);

    const getProducts = (data, time) => 
        new Promise((resolve, reject)=>{
            setTimeout (()=>{
                if(data){
                    resolve(data)
                } else {
                    reject ("error")
                }
        }, time)}
        )
     
        useEffect(()=>{
            getProducts(productsJson,3000).then((res)=>{
                setProducts(res)
            }).catch((err)=>console.log(err,": no hay producto"))
        }, [])

  
    return (
    <div></div>
  )
}

export default Productos