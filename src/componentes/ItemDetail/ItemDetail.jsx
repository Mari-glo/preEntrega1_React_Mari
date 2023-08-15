import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import './ItemDetail.css';
import { CanastoContext } from '../../context/CanastoContext';
import { useContext } from 'react';


const ItemDetail = ({ id, nombre, valor, img, stock }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const { agregarProducto } = useContext(CanastoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    //console.log ("Productos agregados: " + cantidad);
    const item = { id, nombre, valor };
    agregarProducto(item, cantidad);
  }
  return (
    <div className='contenedorItem'>
      <h3>Nombre: {nombre} </h3>
      <h4>Valor: {valor} </h4>
      <p>descripción: Producto Artesanal hecho con amor, lana 100% algodón, relleno hipoalergénico</p>
      <img src={img} alt={nombre} />
      {
        agregarCantidad > 0 ? (<Link to="/cart"> Terminar Compra </Link>) : (<ItemCount inicial={1} stock={stock}
          funcionAgregar={manejadorCantidad} />)
      }

    </div>
  )
}

export default ItemDetail