import { useState, useEffect } from "react"

export const ItemCount = ({ stock, inicial }) => {
    const [contador, setContador] = useState(inicial);
    const [color, setColor] =useState ("black");

    useEffect(() => {
        document.title = `Contador:${contador}`;
        if(contador === stock){
            setColor ("red");
         } else {
            setColor("black");
         }


    }, [contador])

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

    const afregarAlCanasto = () => {
        console.log(`Agregaste ${contador} Productos`);
    }


    return (
        <div>
            <button onClick={disminuir}> - </button>
            <p>{contador}</p>
            <button onClick={aumentar}> + </button>
            <br />
            <button onClick={afregarAlCanasto} style={{color:color}}>Agregar al canasto</button>
        </div>
    )
}

export default ItemCount