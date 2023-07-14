import { useState, useEffect } from "react"
import { getProductos } from "../../asyncmock"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({greeting}) => {
  const [ productos, setProductos] = useState([]);

  useEffect( () =>{
    getProductos()
    .then(respuesta => setProductos(respuesta))
  }, [])

  return (
    <>
    <h2 style={{color:"GrayText", textAlign: 'center'}}> {greeting} </h2>
    <ItemList productos={productos} />
    
    </>

  )
}

export default ItemListContainer