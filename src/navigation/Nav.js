import { Link } from "react-router-dom";
import '../styles/nav.css';

const Nav = () => {
    return (
        <div className="nav-container">
            <div className="nav-logo-container">
                <div className="nav-logo">
                    cycleventure.
                </div>
            </div>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/cart">Cart (0)</Link>
            </div>
        </div>
    );
}

export default Nav;