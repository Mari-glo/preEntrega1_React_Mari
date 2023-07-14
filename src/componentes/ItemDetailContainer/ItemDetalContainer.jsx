import { useState, useEffect } from "react";
import { getUnProducto } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetalContainer = () => {
    const [producto, setProducto] = useState (null);

    useEffect ( ()=> {
        getUnProducto (4)
            .then( res => setProducto(res))
    }, [])

    
  return (
    <div>
        <ItemDetail {...producto} />
        
    </div>
  )
}

export default ItemDetalContainer