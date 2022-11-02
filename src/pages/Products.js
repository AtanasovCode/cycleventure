import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import Nav from "../navigation/Nav";
import Categories from "./Categories";
import DisplayProducts from "../navigation/DisplayProducts";
import AllData from "../data/AllData";
import '../styles/products.css';
import category from '../images/categories.png';
import close from '../images/close.png';



const Products = ({ cartNum, formatNumber }) => {

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
            <Nav cartNum={cartNum} />
            {displayMobile()}
            <img
                src={iconSrc}
                className="category-icon"
                onClick={onCategoryClick}
            />
            <Outlet />
        </div>
    );
}

export default Products;