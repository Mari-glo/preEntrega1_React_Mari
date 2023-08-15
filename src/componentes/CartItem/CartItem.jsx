import { useContext } from "react";
import { CanastoContext } from "../../context/CanastoContext";

const CartItem = ({ item, cantidad }) => {
    const { eliminarProducto } = useContext(CanastoContext);
    return (
        <div>
            <h4> {item.nombre} </h4>
            <p> Cantidad: {cantidad} </p>
            <p> Valor: {item.valor}</p>
            <button onClick={() => eliminarProducto(item.id)}> Eliminar </button>
            <hr />

        </div>
    )
}

export default CartItem