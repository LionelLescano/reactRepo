// import logo from './logo.svg';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import  NavBar  from './components/NavBar';
import Saludo from './components/Saludo';



function App() {

  const mensaje = "bienvenido a mi app bb";
  const estilos = {
    backgroundColor: 'red' ,
    margin: '20px' ,
    padding: '40px' ,
    fontSize: '30px'    
  }

  const log = () => {console.log('hola'); }
  const log2 = () => {console.log('hello'); }
  

  return (
    <div className="container" style={estilos}>
      <NavBar/>
      <ItemListContainer greeting = {'Saludos'}/>
      
      
      <h1> Hello world!</h1>
      <h3 > como estan</h3>
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
      <Saludo name ="Pablo" lastname ="daniel"/>
      
      <h3> {mensaje} </h3>    
    </div>
  );
}

export default App;
