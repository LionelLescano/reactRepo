import React, { useEffect, useState } from 'react'
import ProductosList from "./ProductosList"
import productsJson from '../products.json';


const ProductosContainer = () => {
  
    const [productos, setProductos] = useState([]);
   
    
    
    
        const getProducts = (data, time) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              if (data) {
                resolve(data);
              } else {
                reject("Error");
              }
            }, time);
          });

          useEffect(()=> {
            getProducts(productsJson, 1000)
              .then((res)=> {
              setProductos(res);
            })
            .catch((err)=>console.log(err,"no hay producto"))
          }, []);
    
    return (
    <div>
        <ProductosList productos = {productos}/>
    </div>
  )
}

export default ProductosContainer