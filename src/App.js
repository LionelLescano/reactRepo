// import logo from './logo.svg';
import './App.css';


import  NavBar  from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import Saludo from './components/Saludo';




function App() {

  // const estilos = {
  //   backgroundColor: 'white' ,
  //   margin: '20px' ,
  //   padding: '40px' ,
  //   fontSize: '20px'  
  // }
 

  return (
    <div className="container">
      
      <NavBar/>
      <ItemListContainer greeting = {'Saludos'}/>
      
      
      
{/*   
      <Saludo name ="Juan" lastname ="perez" fn ={log}>
        <p> Este es un mensaje extra</p>
      </Saludo>
      <Saludo name ="Sofia" lastname ="Rodriguez" fn= {log2}/>
      <Saludo name ="Adrian" lastname ="Perez">
        <ul>
        <li> Un elemento de lista</li>
        <li> Un elemento de lista</li>
        <li> Un elemento de lista</li>
        <li> Un elemento de lista</li>
        </ul>
      </Saludo>
      <Saludo name ="Pablo" lastname ="daniel"/> */}
      
      
    </div>
  );
}

export default App;
