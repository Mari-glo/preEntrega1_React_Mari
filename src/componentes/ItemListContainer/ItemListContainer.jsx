import { useState, useEffect } from "react"
import { getProductos, getProductosPorCategoria } from "../../asyncmock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = ({greeting}) => {
  const [ productos, setProductos] = useState([]);
  const {idCategoria} = useParams();

  useEffect( () => {
    const funcion = idCategoria ? getProductosPorCategoria : getProductos;
    funcion(idCategoria)
     .then(res => setProductos(res) )
     .catch(error => console.log(error))
      
    
  }, [idCategoria])

  return (
    <>
    <h2 style={{color:"GrayText", textAlign: 'center'}}> {greeting} </h2>
    <ItemList productos={productos} />
    
    </>

  )
}

export default ItemListContainer