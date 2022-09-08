import React, { useState } from 'react'
import Swal from 'sweetalert2';

const ItemCount = ({stock,price}) => {
  
    const alerta = () => { 
        Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No podes exceder la cantidad total del carrito!',
      }) }
    
    const [counter, setCounter] = useState(0);
    const handleClick = () => {
       if (counter < stock){
        setCounter( counter + 1 ) // counter++ -> counter = counter + 1
       }
       else{
        alerta()
       }
     }

     const handleClick2 = () => {
      if (counter > 0){
       setCounter( counter - 1 ) // counter++ -> counter = counter + 1
      }
    
    }
  
    return (
    <div>
          <div>
            <strong className='text-xl'>Stock: {stock}</strong>
         </div>
         <div className='flex flex-col'>
      <button onClick={handleClick} className='btn btn-success my-5 text-xl'>+</button>
      <button onClick={handleClick2} className='btn btn-error my-5 text-xl'>-</button>
      <strong className='text-xl'>Agregados al carrito: {counter}</strong>
      <button className="btn no-animation text-lg my-5">{price} $</button>
      </div>
      
    </div>
  )
}

export default ItemCount