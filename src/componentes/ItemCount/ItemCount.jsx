import { useState } from "react"

const ItemCount = () => {
    const [contador, setContador] = useState(1)

    const aumentar = () => {
        if(contador < 8) {
            setContador(contador + 1);
        }
    }
    
    const disminuir = () => {
        if(contador > 1) {
            setContador(contador -1);
        }
    }


  return (
    <div>
        <button onClick={disminuir}> - </button>
        <p>{contador}</p>
        <button onClick={aumentar}> + </button>
    </div>
  )
}

export default ItemCount