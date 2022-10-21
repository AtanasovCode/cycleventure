import { useState } from "react";
import Nav from "../navigation/Nav";
import Categories from "./Categories";
import '../styles/products.css';
import category from '../images/categories.png';
import close from '../images/close.png';


const Products = () => {

    const [iconSrc, setIconSrc] = useState(category);
    const [showCategories, setShowCategories] = useState(false);

    const onCategoryClick = () => {
        setShowCategories(!showCategories);
        if(iconSrc === category) setIconSrc(close);
        if(iconSrc === close) setIconSrc(category);
    }

    const displayMobile = () => {
        if(showCategories) {
            return (
                <Categories className="categories-full-container show" />
            );
        }else {
            return (
                <Categories className="categories-full-container" />
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
        </div>
    );
}

export default Products;