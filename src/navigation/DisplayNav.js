import { useState } from "react";
import { Link } from "react-router-dom";

const DisplayNav = ({
    className,
    menu,
    onMenuClick,
    cartNum,
}) => {
    return (
        <nav>
            <div className={className}>
                <Link to="/">Home</Link>
                <Link to="/products/all-products">
                    Products
                </Link>
                <Link to="/cart">Cart ({cartNum})</Link>
            </div>
            <div className="nav-menu-icon">
                <img
                    className="menu-icon"
                    src={menu}
                    onClick={onMenuClick}
                />
            </div>
        </nav>
    );
}

export default DisplayNav;