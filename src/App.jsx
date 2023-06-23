import NavBar from './componentes/NavBar/NavBar';
import ItemCount from './componentes/ItemCount/ItemCount';
import './App.css'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';


const App = () => {
  let saludo = "Bienvenidos a mi tiendita";

  return (
    <div>
      
      <NavBar/>
      <h1>{saludo}</h1>
      <ItemListContainer greeting={" Tejidos y Creaciones "}/>
      <ItemCount/>
      
      
    </div>
  )
}

export default App