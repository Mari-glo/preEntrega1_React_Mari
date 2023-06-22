import NavBar from './componentes/NavBar/NavBar';
import './App.css'


const App = () => {
  let saludo = "Bienvenidos a mi tiendita";

  return (
    <div>
      <NavBar/>
      <h1>{saludo}</h1>
      
    </div>
  )
}

export default App