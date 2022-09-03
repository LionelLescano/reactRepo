// import logo from './logo.svg';
import './App.css';
import  NavBar  from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import Card from './components/Card'
import Footer from './components/Footer';



function App() {



  return (
    <div className="App">
      <header className='App-header'>
      <NavBar/>
      </header>

      <main className='App-main'>

      <ItemListContainer greeting = {'Saludos'}/>
      
      <div className='container grid gap-4 grid-cols-2 grid-rows-3'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>

      </main>
      
      <footer>
        <Footer/>
      </footer>
        
    </div>
  );
}

export default App;
