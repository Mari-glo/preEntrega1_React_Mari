import { useState, useEffect } from "react"

export const ItemCount = ({ stock, inicial, funcionAgregar }) => {
    const [contador, setContador] = useState(inicial);
    const [color, setColor] = useState("black");


    const aumentar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const disminuir = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }


    return (
        <>
            <div>
                <button onClick={disminuir}> - </button>
                <p>{contador}</p>
                <button onClick={aumentar}> + </button>
            </div>
            <button onClick={() => funcionAgregar(contador)} style={{ color: color }}>Agregar al canasto</button>
        </>

    )
}

export default ItemCount