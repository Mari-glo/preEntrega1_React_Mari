import NavBar from './componentes/NavBar/NavBar';
import Home from './componentes/Home/home';
import Accesorios from './componentes/Accesorios/Accesorios';
import Vestuario from './componentes/Vestuario/vestuario';
import Decoracion from './componentes/Decoracion/decoracion';
//import ItemCount from './componentes/ItemCount/ItemCount';
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
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path= "/Accesorios" element={<Accesorios/>}/>
            <Route path= "/Vestuario" element={<Vestuario/>}/>
            <Route path= "/Decoracion" element={<Decoracion/>}/>
            <Route path= "*" element={<h3>no por ahora</h3>}/>


          </Routes>
      
      </BrowserRouter>

      
      <h1>{saludo}</h1>
      <ItemListContainer greeting={" Tejidos y Creaciones "} />
      <ItemDetalContainer/>


    </div>
  )
}

export default App