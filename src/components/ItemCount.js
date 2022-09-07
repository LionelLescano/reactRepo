import React, { useState } from 'react'
import Swal from 'sweetalert2';

const ItemCount = ({stock, initial}) => {
  
    const alerta = () => { 
        Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No podes exceder la cantidad total del carrito!',
      }) }
    
    const [counter, setCounter] = useState(0);
    initial = 1;
    const handleClick = () => {
       if (counter < stock){
        setCounter( counter + 1 ) // counter++ -> counter = counter + 1
       }
       else{
        alerta()
       }
     }
  
    return (
    <div>
          <div>
            <strong>Stock: {stock}</strong>
         </div>
         <div className='flex flex-col'>
      <button onClick={handleClick} className='btn my-5'>Comprar!</button>
      <strong>Agregados al carrito: {counter}</strong>
      </div>
      
    </div>
  )
}

export default ItemCount