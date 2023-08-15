import { useContext } from 'react';
import { CanastoContext } from '../../context/CanastoContext';
import { Link } from 'react-router-dom';
import './CartWidget.css'

const CartWidget = () => {
  const { cantidadTotal } = useContext(CanastoContext);
  const imgCarrito = "https://cdn.icon-icons.com/icons2/495/PNG/512/shopping-basket-2_icon-icons.com_48459.png";

  return (
    <div>
      <Link to="/cart">
        <img className='imgCarrito' src={imgCarrito} alt="canasto de compra" />
        {
          cantidadTotal > 0 && <strong> {cantidadTotal} </strong>
        }

      </Link>


    </div>
  )
}

export default CartWidget