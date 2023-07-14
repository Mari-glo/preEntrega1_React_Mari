import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({id, nombre, valor, img}) => {
  return (
    <div className='cardProducto'>
        <img className='imgProducto' src={img} alt={nombre} />
        <h3>Nombre: {nombre} </h3>
        <p>Valor: {valor} </p>
        <Link className='btnProducto' to={`/item/${id}`}>Ver Detalles</Link>
        
    </div>
  )
}

export default Item
