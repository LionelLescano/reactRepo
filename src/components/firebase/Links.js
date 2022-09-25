import { collection, getDocs, getFirestore } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Links = () => {

    const [categories, setCategories] = useState([])

     
    useEffect(()=> {
        getCategories()
    }, [])

    
    const getCategories = () => { 

        const db = getFirestore();
        const categoryCollection = collection(db,'categories')
        getDocs(categoryCollection).then(snapshot => {
            setCategories(snapshot.docs.map( d =>({id: d.id , price: d.price, ...d.data()})))
        })


     }
  
  
return (
    <div>
        {categories.map(c => <Link key={c.id} className='mx-4' to ={`/category/${c.id}`}><button className='btn btn-success'> {c.id}</button>  </Link>)}
    </div>
  )
}

export default Links