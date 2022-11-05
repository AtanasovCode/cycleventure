import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DisplayedCartProduct from "./DisplayedCartProduct";

const CartProduct = ({
    cartProducts,
    AllData,
    formatNumber,
    price,
    setPrice,
}) => {


    return (
        <div className="cart-products-container">
            {cartProducts.map((productId) => {
                const product = AllData.find((product) => product.id === productId);
                return (
                    <DisplayedCartProduct 
                        name={product.name}
                        productPrice={product.price}
                        image={product.image}
                        category={product.category}
                        brand={product.brand}
                        formatNumber={formatNumber}
                        id={product.id}
                        price={price}
                        setPrice={setPrice}
                    />
                );
            }
            )}
        </div>
    );
}

export default CartProduct;