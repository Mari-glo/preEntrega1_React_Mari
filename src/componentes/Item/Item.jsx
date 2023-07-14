import './Item.css'

const Item = ({id, nombre, valor, img}) => {
  return (
    <div className='cardProducto'>
        <img className='imgProducto' src={img} alt={nombre} />
        <h3>Nombre: {nombre} </h3>
        <p>Valor: {valor} </p>
        <button className='btnProducto'>Ver Detalles</button>
    </div>
  )
}

export default Item