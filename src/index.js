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


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import Category from './components/firebase/Category';
import Detail from './components/firebase/Detail';
import ItemDetail from './components/ItemDetail';
// import ProdContainer from './components/firebase/ProdContainer';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.REACT_APP_apiKey,
  authDomain:process.env.REACT_APP_authDomain,
  projectId:process.env.REACT_APP_projectId,
  storageBucket:process.env.REACT_APP_storageBucket,
  messagingSenderId:process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  

  <BrowserRouter>
  <CartContextProvider>
      <NavBar/>
      
        <Routes>
           
          <Route path='/' element= {<App/>} />
          {/* <Route path='/item/:slug' element= {<Detail/>} /> */}
          <Route path='/cart' element= {<Cart/>} />
          <Route path='/category/:id' element= {<Category/>} />
          <Route path='/item/:slug' element= {<ItemDetailContainer/>} />
          

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
