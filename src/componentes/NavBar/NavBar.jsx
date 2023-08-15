import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'

const NavBar = () => {
    return (
        <header>
            <Link to="/">
                <h2>Mi tiendita te-te-jo</h2>
            </Link>
            <nav>
                <ul>
                    <li>
                        <NavLink className="btn" to="/">Home</NavLink>

                    </li>
                    <li>
                        <NavLink className="btn" to="/categoria/1">Vestuario</NavLink>

                    </li>
                    <li>
                        <NavLink className="btn" to="/categoria/2">Accesorios</NavLink>

                    </li>
                    <li>
                        <NavLink className="btn" to="/categoria/3">Decoración</NavLink>

                    </li>
                </ul>
            </nav>
            <CartWidget />
        </header>
    )
}

export default NavBar