import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'

const NavBar = () => {
    return (
        <header>
            <h2>Mi tiendita te-te-jo</h2>
            <nav>
             <ul>
                <li>
                    Vestuario
                </li>
                <li>
                    Accesorios
                </li>
                <li>
                    Decoración
                </li>
             </ul>
            </nav>
            <CartWidget/>
        </header>
    )
}

export default NavBar