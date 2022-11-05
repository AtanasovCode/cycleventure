import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import AllData from "../data/AllData";
import Nav from "../navigation/Nav";
import '../styles/selected-product.css';
import checkmark from '../images/checkmark.png';
import cart from '../images/cart.png';
import star from '../images/star.png';

const SelectedProduct = ({
    cartNum,
    setCartNum,
    cartProducts,
    setCartProducts,
    price,
    setPrice,
    formatNumber,
}) => {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);

    let params = useParams();
    let productId = params.productId;

    const [addBtnValue, setAddBtnValue] = useState("Add To Cart");
    const [addBtnClass, setAddBtnClass] = useState("cart-add-btn");
    const [disabled, setDisabled] = useState(false);

    const onAddBtn = () => {

        setCartNum(cartNum + 1); //Displayed in the nav bar
        setCartProducts(current => [...current, `${productId}`]);  //Used inside Cart.js

        if (addBtnValue === "Add To Cart") setAddBtnValue("Added To Cart");
        else setAddBtnValue("Add To Cart");

        AllData.map(() => { //To update the total amount of money at cart checkout
            const product = AllData.find((product) => product.id === productId);
            setPrice(price + parseInt(product.price))
        })

        setAddBtnClass("cart-add-btn disabled");
        setDisabled(true);
    }

    useEffect(() => {
        cartProducts.map((product) => {
            if(product === productId) {
                setAddBtnClass("cart-add-btn disabled");
                setAddBtnValue("Added To Cart");
                setDisabled(true);
            }
        })
    }, [])

    return (
        <div className="full-selected-product-container">
            <Nav cartNum={cartNum} />
            {AllData.map((product) => {
                if (product.id === productId) {
                    return (
                        <div
                            className="selected-product-container"
                            key={product.id}
                        >
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
                                        <div className="product-rating">
                                            Rating:
                                            <img src={star} alt="star" className="star-icon" />
                                            <img src={star} alt="star" className="star-icon" />
                                            <img src={star} alt="star" className="star-icon" />
                                            <img src={star} alt="star" className="star-icon" />
                                            <img src={star} alt="star" className="star-icon" />
                                        </div>
                                    </div>
                                </div>
                                <div className="selected-product-price">
                                    <div>${formatNumber(product.price)}</div>
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
                                        className={addBtnValue === "Add To Cart" ? "cart-icon" : "cart-icon added"}
                                    />
                                    <input
                                        type="button"
                                        value={addBtnValue}
                                        className={addBtnClass}
                                        onClick={onAddBtn}
                                        disabled={disabled}
                                    />
                                </div>
                            </div>
                        </div>
                    );
                }
            })}
        </div>
    );
}

export default SelectedProduct;