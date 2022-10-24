import { Link } from "react-router-dom";
import { useState } from "react";
import '../styles/nav.css';
import menu from '../images/menu.png';
import close from '../images/close.png';

const Nav = ({cartProducts}) => {

    const [displayMenu, setDisplayMenu] = useState(false);
    const [iconSrc, setIconSrc] = useState(menu);

    const onMenuClick = () => {
        setDisplayMenu(!displayMenu);
        if(iconSrc === menu) setIconSrc(close);
        if(iconSrc === close) setIconSrc(menu)
    }

    const display = () => {
        if (displayMenu) {
            return (
                <div>
                    <div className="nav-links show">
                        <Link to="/">Home</Link>
                        <Link to="/products">Products</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/cart">Cart ({cartProducts})</Link>
                    </div>
                    <div className="nav-menu-icon">
                        <img
                            className="menu-icon"
                            src={iconSrc}
                            onClick={onMenuClick}
                        />
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <div className="nav-links">
                        <Link to="/">Home</Link>
                        <Link to="/products">Products</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/cart">Cart ({cartProducts})</Link>
                    </div>
                    <div className="nav-menu-icon">
                        <img
                            className="menu-icon"
                            src={menu}
                            onClick={onMenuClick}
                        />
                    </div>
                </div>
            );
        }
    }



    return (
        <div className="nav-container">
            <div className="nav-logo-container">
                <div className="nav-logo">
                    cycleventure.
                </div>
            </div>
            {display()}
        </div>
    );
}

export default Nav;