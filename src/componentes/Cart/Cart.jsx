import { useContext } from "react";
import { CanastoContext } from "../../context/CanastoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";


const Cart = () => {
    const { canasto, vaciarCanasto, total, cantidadTotal } = useContext(CanastoContext);

    if (cantidadTotal === 0) {
        return (
            <>
                <h2>No hay Tejidos en el Canasto</h2>
                <Link to="/"> Ver Tejidos</Link>
            </>
        )

    }
    return (
        <div>
            {canasto.map(producto => <CartItem key={producto.id} {...producto} />)}
            <h3> Total: ${total} </h3>
            <h3> Cantidad total: {cantidadTotal} </h3>
            <button onClick={() => vaciarCanasto()}> Vaciar Canasto </button>
            <Link to="/checkout"> Finalizar Compra </Link>
        </div>
    )
}

export default Cart