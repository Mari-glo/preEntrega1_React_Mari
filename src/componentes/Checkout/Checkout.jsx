import { useState, useContext } from "react";
import { CanastoContext } from "../../context/CanastoContext";
import { db } from "../../services/config";
import { collection, addDoc } from "firebase/firestore";
import './Checkout.css';


const Checkout = () => {
    const { canasto, vaciarCanasto, total } = useContext(CanastoContext);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [orderId, setOrderId] = useState("");

    //validación
    const manejadorFormulario = (event) => {
        event.preventDefault();


        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Por favor complete todos los campos del formulario");
            return;
        }

        if (email !== emailConfirmacion) {
            setError("Los datos no coinciden");
            return;
        }

        const order = {
            items: canasto.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad

            })),
            total: total,
            nombre,
            apellido,
            telefono,
            email,
            fecha: new Date(),
        }

        //guardar orden en la base de datos

        addDoc(collection(db, "registro"), order)
            .then(docRef => {
                setOrderId(docRef.id);
                vaciarCanasto();
            })
            .catch(error => {
                console.log("error al crear la orden", error);
                setError("Se produjo un error al crear la orden de compras, intentar nuevamente");
            })
    }


    return (
        <div>

            <h2>Checkout</h2>
            <form onSubmit={manejadorFormulario} className="formulario">
                {canasto.map(producto => (
                    <div key={producto.item.id}>
                        <p>
                            {producto.item.nombre} x {producto.cantidad}
                        </p>
                        <p>Valor: $ {producto.item.valor} </p>

                    </div>
                ))}
                <hr />


                <div className="form-group">
                    <label htmlFor=""> Nombre</label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor=""> Apellido </label>
                    <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor=""> Telefono</label>
                    <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor=""> Email </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor=""> Email Confirmación </label>
                    <input type="email" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />
                </div>

                {error && <p style={{ color: "red" }}> {error} </p>}
                <button type="submit" > Finalizar Compra </button>

            </form>

            {
                orderId && (
                    <strong> ¡Gracias por tu compra! tu número de orden es: {orderId} </strong>
                )
            }

        </div>
    )
}

export default Checkout