import React from 'react'
import { useCartContext } from './CartContext'



const ItemCount = ({id,price}) => {

    
   const {addProduct} = useCartContext()

  
    return (
    <div>
         
         <div className='flex flex-col'>
      <button onClick={addProduct} className='btn btn-success my-5 text-xl'>Agregar Carrito</button>   
      <button className="btn no-animation text-lg my-5">{price} $</button>
      </div> 
    </div>
  )
}

export default ItemCount