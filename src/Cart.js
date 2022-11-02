import { useEffect, useState } from "react";
import Nav from "./navigation/Nav";
import CartProduct from "./pages/CartProduct";
import AllData from "./data/AllData";
import './styles/cart.css';

const Cart = ({
    cartNum,
    setCartNum,
    cartProducts,
    price,
    setPrice,
    formatNumber,
}) => {

    const onBtnClick = () => {
        console.log(price);
    }

    return (
        <div className="full-cart-container">
            <Nav cartNum={cartNum} />
            <div className="cart-info-container">
                <div className="cart-totaL-price">
                    Total: <span className="total">${formatNumber(price)}</span>
                </div>
            </div>
            <CartProduct 
                cartProducts={cartProducts}
                AllData={AllData}
                formatNumber={formatNumber}
                price={price}
                setPrice={setPrice}
            />
        </div>
    );
}

export default Cart;