import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ProdCard } from './ProdCard'

const Category = () => {

    const {id: categoryId} = useParams()

    const [products, setProducts] = useState([])

    useEffect(() => {
      getProductsByCategory()
    }, [])
    
    const getProductsByCategory = () => { 
       
            const db = getFirestore();
            const itemCollection = collection(db,'products')
            const que = query(itemCollection, where('category', '==', 'categoryId'))
            getDocs (que).then(snapshot => {
                setProducts(snapshot.docs.map( d =>({id: d.id , ...d.data()})))
            })  
        }


  return (
    <div>
        <div className=''> Category: {categoryId}</div>
        
        <Link to={'/'}> <button className='btn btn-warning m-5'>  VOLVER ATRAS </button></Link>

        { products.map ( p => <ProdCard key={p.id}> {p.title} </ProdCard>)}

    </div>
  )
}

export default Category