import NavBar from './componentes/NavBar/NavBar';
import ItemCount from './componentes/ItemCount/ItemCount';
import './App.css';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetalContainer from './componentes/ItemDetailContainer/ItemDetalContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CanastoProvider } from './context/CanastoContext';
import Cart from './componentes/Cart/Cart';
import Checkout from './componentes/Checkout/Checkout';



const App = () => {
  let saludo = "Bienvenidos a mi tiendita";

  return (
    <div>
      

      <BrowserRouter>
      <CanastoProvider>
        <NavBar />
        
          <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path= "/categoria/:idCategoria" element={<ItemListContainer/>}/>
            <Route path= "/item/:idItem" element={<ItemDetalContainer/>}/>
            <Route path= "/cart" element ={<Cart/>}/>
            <Route path= "/checkout" element ={<Checkout/>}/>
            <Route path= "*" element={<h3>En Construcción</h3>}/>
          </Routes>
      </CanastoProvider>
      
      </BrowserRouter>

        
      
      
    </div>
  )
}

export default App