 import React from 'react'
 import Reactlogo from '../assets/img/logo192.png'
 import { CartWidtget } from './CartWidtget'

const NavBar = () => {
  return (
    <div className='navBar'>
       <a href='index.html'><img src={Reactlogo} alt='carritoreact'></img></a>
         <li ><a href='index.html'> Inicio</a> </li>
         <li ><a href='index.html'> Donde estamos</a> </li>
         <li ><a href='index.html'> Contacto</a> </li>
      
         <CartWidtget/>
     </div>
  )
}

export default NavBar