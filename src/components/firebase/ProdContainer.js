
import {collection, getDocs, getFirestore} from "firebase/firestore"
import React, { useEffect, useState } from 'react'
import Links from "./Links"
import { ProdCard } from "./ProdCard"




const ProdContainer = () => {


   
    
    const [products, setProducts] = useState([])
    
    useEffect(()=> {
        getProducts()
    }, [])


    const getProducts = () => { 
        const db = getFirestore();
        const itemCollection = collection(db,'products')
        getDocs(itemCollection).then(snapshot => {
            setProducts(snapshot.docs.map( d =>({id: d.id , ...d.data()})))
            console.log(snapshot.docs.map( d =>({id: d.id , ...d.data()}))) 
        })

     }


  return (

    <div>  
        
        <Links/>

    <div className="p-2 grid grid-cols-4 gap-4 content-evenly">

       
        {
            products.map(p => <ProdCard  key = {p.id} price = {p.price} {...p}></ProdCard>)
        }
    </div>
    </div>
  )
}

export default ProdContainer