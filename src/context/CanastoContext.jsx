import { useState, createContext } from "react";

export const CanastoContext = createContext({
    canasto: [],
    total: 0,
    cantidadTotal: 0

})
export const CanastoProvider = ({ children }) => {
    const [canasto, setCanasto] = useState([]);
    const [total, setTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0);

    const agregarProducto = (item, cantidad) => {
        const productoExistente = canasto.find(prod => prod.item.id === item.id);
        if (!productoExistente) {
            setCanasto(prev => [...prev, { item, cantidad }]);
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev => prev + (item.valor * cantidad))
        } else {
            const canastoActualizado = canasto.map(prod => {
                if (prod.item.id === item.id) {
                    return { ...prod, cantidad: prod.cantidad + cantidad };
                } else {
                    return prod;
                }
            })
            setCanasto(canastoActualizado);
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev => prev + (item.valor * cantidad));
        }

    }

    const eliminarProducto = (id) => {
        const productoEliminado = canasto.find(prod => prod.item.id === id);
        const canastoActualizado = canasto.filter(prod => prod.item.id !== id);

        setCanasto(canastoActualizado);
        setCantidadTotal(prev => prev - productoEliminado.cantidad);
        setTotal(prev => prev - (productoEliminado.item.valor * productoEliminado.cantidad));
    }
    const vaciarCanasto = () => {
        setCanasto([]);
        setCantidadTotal(0);
        setTotal(0);

    }
    return (
        <CanastoContext.Provider value={{ canasto, total, cantidadTotal, agregarProducto, eliminarProducto, vaciarCanasto }}>
            {children}
        </CanastoContext.Provider>

    )


}