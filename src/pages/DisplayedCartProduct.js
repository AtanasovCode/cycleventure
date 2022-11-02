import { useState } from "react";
import star from '../images/star.png';


const DisplayedCartProduct = ({
    name,
    productPrice,
    image,
    formatNumber,
    id,
    brand,
    category,
    price,
    setPrice,
}) => {

    const [count, setCount] = useState(1);

    const onPlus = () => {
        setCount(count + 1);
        setPrice(price + productPrice);
    }

    const onMinus = () => {
        if (count > 1) {
            setCount(count - 1);
            setPrice(price - productPrice);
        }
    }

    return (
        <div
            className="cart-product-box"
            key={id}
        >
            <div className="cart-img-container">
                <img
                    src={image}
                    alt="cart-img"
                    className="cart-img-preview"
                />
            </div>
            <div className="cart-product-info-container">
                <div className="cart-product-name-container">
                    <div className="cart-product-name">
                        {name}
                    </div>
                    <div className="cart-product-description">
                        <div>
                            Category: {category}
                        </div>
                        <div>
                            Brand: {brand}
                        </div>
                        <div>
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
                    <div className="cart-product-price">
                        ${formatNumber(productPrice)}
                    </div>
                </div>
                <div className="cart-product-count-container">
                    <div
                        className="product-count-add add-symbol"
                        onClick={onMinus}
                    >
                        -
                    </div>
                    <div
                        className="cart-product-count"
                    >
                        {count}
                    </div>
                    <div
                        className="product-count-remove add-symbol"
                        onClick={onPlus}
                    >
                        +
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DisplayedCartProduct;