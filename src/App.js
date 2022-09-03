


import { useState } from 'react';
import './App.css';
import ProductosContainer from './components/ProductosContainer';





function App() {
   const [counter, setCounter] = useState(0);

   const handleClick = () => {
      console.log('hiciste click');
      setCounter( counter + 1 ) // counter++ -> counter = counter + 1
    }

  return (
       <div className='App'>

         <div className='my-5'>
            <strong>Contador: {counter}</strong>
         </div>
      <button onClick={handleClick} className='btn my-5'>Click aqui!</button>
         <ProductosContainer/>
      </div>
   );
}

export default App;
