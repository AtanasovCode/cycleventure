import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import Nav from "../navigation/Nav";
import Categories from "./Categories";
import AllData from "../data/AllData";
import '../styles/products.css';
import category from '../images/categories.png';
import close from '../images/close.png';


const Products = () => {

    const formatNumber = (number) => {
        return number.toLocaleString('en-US');
    }

    const [iconSrc, setIconSrc] = useState(category);
    const [showCategories, setShowCategories] = useState(false);
    const [productsToDisplay, setProductsToDisplay] = useState(AllData);

    const onCategoryClick = () => {
        setShowCategories(!showCategories);
        if (iconSrc === category) setIconSrc(close);
        if (iconSrc === close) setIconSrc(category);
    }

    const displayMobile = () => {
        if (showCategories) {
            return (
                <Categories
                    className="categories-full-container show"
                    productsToDisplay={productsToDisplay}
                    setProductsToDisplay={setProductsToDisplay}
                    onCategoryClick={onCategoryClick}
                />
            );
        } else {
            return (
                <Categories
                    className="categories-full-container"
                    productsToDisplay={productsToDisplay}
                    setProductsToDisplay={setProductsToDisplay}
                    onCategoryClick={onCategoryClick}
                />
            );
        }
    }

    return (
        <div className="full-products-container">
            <Nav />
            {displayMobile()}
            <img
                src={iconSrc}
                className="category-icon"
                onClick={onCategoryClick}
            />
            <div className="displayed-products-container">
                {productsToDisplay.map((product) => (
                    <Link
                        to={`/products/${product.id}`}
                        key={product.id}
                        className="product-box"
                    >
                        <img
                            src={product.image}
                            className="product-image-displayed"
                        />
                        <div className="product-name">{product.name}</div>
                        <div className="product-price">${formatNumber(product.price)}</div>
                    </Link>
                ))}
            </div>
            <Outlet />
        </div>

    );
}

export default Products;