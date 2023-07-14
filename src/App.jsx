import NavBar from './componentes/NavBar/NavBar';
import ItemCount from './componentes/ItemCount/ItemCount';
import './App.css';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetalContainer from './componentes/ItemDetailContainer/ItemDetalContainer';



const App = () => {
  let saludo = "Bienvenidos a mi tiendita";

  return (
    <div>

      <NavBar />
      <h1>{saludo}</h1>
      <ItemListContainer greeting={" Tejidos y Creaciones "} />
      <ItemDetalContainer/>


    </div>
  )
}

export default App