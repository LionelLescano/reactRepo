import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import productsJson from '../products.json';
import { Link, useParams } from 'react-router-dom';





const ItemDetailContainer = () => {

       

    const [item, setItem] = useState({})



    const {slug} =useParams()

        useEffect(() => {
          getItem().then(data => {
            if (data) {
                setItem(data)
            } 
          })

        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []) 
    
    const getItem = () => { 
        return new Promise(resolve  => {
            setTimeout(()=>{
                // eslint-disable-next-line eqeqeq
                resolve(productsJson.find( p => p.slug == slug))
            },1000);
        })
       }

  return (

   <div className='flex flex-col'>
     <Link to = "/" className=''> <button className="btn btn-outline btn-error mx-5">Volver a Inicio</button> </Link>
     <ItemDetail item = {item} className= "" />
   
   </div>

    

    )
}

export default ItemDetailContainer