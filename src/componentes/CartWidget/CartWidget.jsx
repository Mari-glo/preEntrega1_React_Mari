import './CartWidget.css'

const CartWidget = () => {
    const imgCarrito = "https://cdn.icon-icons.com/icons2/495/PNG/512/shopping-basket-2_icon-icons.com_48459.png";

  return (
    <div>
        <strong> 4 </strong>
        <img  className='imgCarrito' src={imgCarrito} alt="canasto de compra" />
        
        
    </div>
  )
}

export default CartWidget