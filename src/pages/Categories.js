import { NavLink } from "react-router-dom";
import '../styles/categories.css';
import AllData from "../data/AllData";
import RoadBikes from "../data/RoadBikes";
import GravelBikes from "../data/GravelBikes";
import EBikes from "../data/EBikes";
import Helmets from "../data/Helmets";

const Categories = ({
    className,
    productsToDisplay,
    setProductsToDisplay,
    onCategoryClick,
}) => {

    return (
        <div className={className}>
            <div className="categories-heading-container">
                <span className="categories-heading">Categories</span>
            </div>
            <div className="category-options-container" >
                <NavLink 
                    to="/products/all-products" 
                    className="category-container all-products"
                    onClick={onCategoryClick}
                >
                    <div className="category-name">
                        All Products
                    </div>
                </NavLink>
                <NavLink to="/products/road-bikes" className="category-container road-bike-container" onClick={onCategoryClick}>
                    <div className="category-name">
                        Road Bikes
                    </div>
                </NavLink>
                <NavLink to="/products/gravel-bikes" className="category-container clothing-container" onClick={onCategoryClick}>
                    <div className="category-name">
                        Gravel Bikes
                    </div>
                </NavLink>
                <NavLink to="/products/e-bikes" className="category-container ebikes-container" onClick={onCategoryClick}>
                    <div className="category-name">
                        eBikes
                    </div>
                </NavLink>
                <NavLink to="/products/helmets" className="category-container helmets-container" onClick={onCategoryClick}>
                    <div className="category-name">
                        Helmets
                    </div>
                </NavLink>
            </div>
        </div>
    );
}

export default Categories;