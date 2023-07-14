import NavBar from './componentes/NavBar/NavBar';
import ItemCount from './componentes/ItemCount/ItemCount';
import './App.css';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetalContainer from './componentes/ItemDetailContainer/ItemDetalContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";



const App = () => {
  let saludo = "Bienvenidos a mi tiendita";

  return (
    <div>
      

      <BrowserRouter>
        <NavBar />
        <h1>{saludo}</h1>
          <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path= "/categoria/:idCategoria" element={<ItemListContainer/>}/>
            <Route path= "/item/:idItem" element={<ItemDetalContainer/>}/>
            <Route path= "*" element={<h3>no por ahora</h3>}/>


          </Routes>
      
      </BrowserRouter>

        
      
      
    </div>
  )
}

export default App