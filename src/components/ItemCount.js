import React, { useState } from 'react'
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const ItemCount = ({stock,price}) => {

    
  

  const [goToCart, SetGoToCart]= useState(false);

    const alerta = () => { 
        Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No podes exceder la cantidad total del carrito!',
      }) }
    
    const [counter, setCounter] = useState(0);
  
    const handleClick = () => {
      if(counter < stock ){
        setCounter( counter + 1)
        SetGoToCart(true)
      }
      else {
        alerta()
      }
     }

     const handleClickQuitar = () => {
     if (counter > 0) {
      setCounter (counter - 1)
     }
     if(counter === 1) {
      SetGoToCart(false)
     }

   
   
     }

    //  counter >= 1 ? <Link to={"/cart"}><button class="btn btn-primary">finalizar</button></Link>:   
    
  
    return (
    <div>
          <div>
            <strong className='text-xl'>Stock: {stock}</strong>
         </div>
         <div className='flex flex-col'>
      <button onClick={handleClick} className='btn btn-success my-5 text-xl'>+</button>
      <button onClick={handleClickQuitar} className='btn btn-error my-5 text-xl'>-</button>
      <strong className='text-xl'>Agregados al carrito: {counter}</strong>
      {
        goToCart ? <Link to={"/cart"}><button class="btn btn-primary my-5">Finalizar</button></Link> :
        <p>Agrega productos!</p>
      }    
      <button className="btn no-animation text-lg my-5">{price} $</button>
      </div>
      
    </div>
  )
}

export default ItemCount