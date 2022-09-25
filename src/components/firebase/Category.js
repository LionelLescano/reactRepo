import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const Category = () => {

    const {id: catId} = useParams()

    const [products, setProducts] = useState([])

    useEffect(() => {
      getProductsByCategory()
    }, [])
    
    const getProductsByCategory = () => { 
       
            const db = getFirestore();
            const itemCollection = collection(db,'products')
            const q = query(itemCollection, where('category', '==', 'catId'))
            getDocs (q).then(snapshot => {
                setProducts(snapshot.docs.map( d =>({id: d.id , ...d.data()})))
            })  
        }


  return (
    <div>
        <div className=''> Category: {catId}</div>
        <Link to={'/'}> <button className='btn btn-warning m-5'>  VOLVER ATRAS </button></Link>
        
        
        { products.map ( p => <li key={p.id}> {p.title} </li>)}
    </div>
  )
}

export default Category