import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import { CartContextProvider } from './components/CartContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  

  <BrowserRouter>
  <CartContextProvider>
      <NavBar/>
      
        <Routes>
           
          <Route path='/' element= {<App/>} />
          <Route path='/item/:slug' element= {<ItemDetailContainer/>} />
          <Route path='/cart' element= {<Cart/>} />

        </Routes>
      
      <Footer/>
    </CartContextProvider>
  </BrowserRouter>
  
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>


  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
