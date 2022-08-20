 import React from 'react'
 import { CartWidtget } from './CartWidtget'

const NavBar = () => {
  return (
    <div>
         <li> Inicio </li>
         <li> Contacto </li>
         <li> Productos </li>
         <li> Acerca de </li>
         <CartWidtget/>
     </div>
  )
}

export default NavBar