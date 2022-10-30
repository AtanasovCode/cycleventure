import { useEffect, useState } from "react";
import Nav from "./navigation/Nav";
import AllData from "./data/AllData";
import './styles/cart.css';

const Cart = ({
    cartNum,
    setCartNum,
    cartProducts,
}) => {

    const [cartItems, setCartItems] = useState([]);
    const [prices, setPrices] = useState([]);
    let i = 0;   


    const handleChange = () => {
        console.log();
    }

    const onBtnClick = () => {
        console.log(prices);
    }

    const renderProduct = () => {
        return (
            <div className="cart-products-container">
                {cartProducts.map((productId) => {
                    const product = AllData.find((product) => product.id === productId);
                        return (
                            <div
                                className="cart-product-box"
                                key={product.id}
                            >
                                <div className="cart-img-container">
                                    <img
                                        src={product.image}
                                        className="cart-img-preview"
                                    />
                                </div>
                                <div className="cart-product-info-container">
                                    <div>
                                        {product.name}
                                    </div>
                                    <div>
                                        {product.price}
                                    </div>
                                    <div className="cart-product-count-container">
                                        <div className="product-count-add add-symbol">
                                            +
                                        </div>
                                        <input
                                            type="text"
                                            value="1"
                                            className="cart-product-count"
                                            onChange={handleChange}
                                        />
                                        <div className="product-count-remove add-symbol">
                                            -
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                )}
            </div>
        );
    }


    return (
        <div className="full-cart-container">
            <Nav cartNum={cartNum} />
            <div className="cart-info-container">
                <div className="cart-info-heading">
                    Cart Info
                </div>
                <div>
                    Total: 0
                </div>
                <div>
                    <input
                        type="button"
                        value="Check Out"
                        onClick={onBtnClick}
                    />
                </div>
            </div>
            {renderProduct()}
        </div>
    );
}

export default Cart;