import React from 'react'
import { Link } from 'react-router-dom'



const NavBar = () => {
  return (
    <div className="navbar bg-base-100 flex justify-evenly p-10">
  <div className="flex-1">

    <Link to={'/'}  className="btn btn-ghost normal-case text-xl">ShopEcommerce</Link>
    {/* <a className="btn btn-ghost normal-case text-xl" href='index.html'>Shop E-Commerce</a> */}
  </div>
  <div className="flex justify-around">
    <div className="dropdown dropdown-end">
      <label tabIndex="0" className="btn btn-ghost btn-circle mx-4">
        <div className="indicator">
        
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">0</span>
        </div>
      </label>
       {/* carrito */}
      <div tabIndex="0" className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"> 
        <div className="card-body">
          <span className="font-bold text-lg">Cantidad items</span>
          <span className="text-info">Subtotal: $0</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">Carrito</button>
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://placeimg.com/80/80/people" alt='imagen' />
        </div>
      </label>
      <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between" href='##'>
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a href='##'>Settings</a></li>
        <li><a href='##'>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
  )
}

export default NavBar














//  import React from 'react'
// //  import Reactlogo from '../assets/img/logo192.png'
// //  import { CartWidtget } from './CartWidtget'

// const NavBar = () => {
 

//   return (




  
//     // <div classNameNameName='navBar bg-slate-900 text-zinc-200'>

//     //    <a href='index.html'><img src={Reactlogo} alt='carritoreact'></img></a>
//     //    <ul>
//     //    <li classNameNameName={style.title} ><a href='index.html'> Inicio</a> </li>
//     //      <li classNameNameName={style.title}  ><a href='index.html'> Donde estamos</a> </li>
//     //      <li classNameNameName={style.title}  ><a href='index.html'> Contacto</a> </li>
//     //    </ul>
         
      
//     //      <CartWidtget/>
//     //  </div>
  
// }

// export default NavBar