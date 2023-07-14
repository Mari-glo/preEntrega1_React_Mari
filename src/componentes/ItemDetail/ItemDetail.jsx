import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({id, nombre, valor, img}) => {
  return (
    <div className='contenedorItem'>
        <h3>Nombre: {nombre} </h3>
        <h4>Valor: {valor} </h4>
        <p>descripción: Producto Artesanal hecho con amor, lana 100% algodón, relleno hipoalergénico</p>
        <img src={img} alt={nombre} />

        <ItemCount/>
        

        

    </div>
  )
}

export default ItemDetail