import { useState } from "react";
import { useParams } from "react-router-dom";
import AllData from "../data/AllData";
import Nav from "../navigation/Nav";
import '../styles/selected-product.css';
import checkmark from '../images/checkmark.png';
import cart from '../images/cart.png';

const SelectedProduct = () => {
    let params = useParams();
    let productId = params.productId;


    return (
        <div className="full-selected-product-container">
            <Nav />
            {AllData.map((product) => {
                if (product.id === productId) {
                    return (
                        <div className="selected-product-container">
                            <div className="selected-product-image-container">
                                <img
                                    src={product.image}
                                    className="selected-product-image"
                                />
                            </div>
                            <div className="selected-product-info-container">
                                <div className="selected-product-name">
                                    <span>{product.name}</span>
                                    <div className="product-info">
                                        <div>
                                            Category: {product.category}
                                        </div>
                                        <div>
                                            Brand: {product.brand}
                                        </div>
                                    </div>
                                </div>
                                <div className="selected-product-price">
                                    <div>${product.price}</div>
                                    <div className="product-available">
                                        <div>
                                            Available
                                        </div>
                                        <img
                                            src={checkmark}
                                            className="checkmark"
                                        />
                                    </div>
                                </div>
                                <div className="selected-product-description">
                                    <span>{product.description}</span>
                                </div>
                                <div className="cart-btn-container">
                                    <img
                                        src={cart}
                                        className="cart-icon"
                                    />
                                    <input
                                        type="button"
                                        value="Add To Cart"
                                        className="cart-add-btn"
                                    />
                                </div>
                            </div>
                        </div>
                    );
                }
            }
            )}
        </div>
    );
}

export default SelectedProduct;