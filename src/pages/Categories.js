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
    
    const onLinkClick = (e) => {
        let category = e.currentTarget.id;
        if(category === "all") setProductsToDisplay(AllData);
        if(category === "road") setProductsToDisplay(RoadBikes);
        if(category === "gravel") setProductsToDisplay(GravelBikes);
        if(category === "ebikes") setProductsToDisplay(EBikes);
        if(category === "helmets") setProductsToDisplay(Helmets);
        onCategoryClick();
    }

    return (
        <div className={className}>
            <div className="categories-heading-container">
                <span className="categories-heading">Categories</span>
            </div>
            <div className="category-options-container" >
                <div className="category-container active all-products" id="all" onClick={onLinkClick}>
                    <div className="category-name">
                        All Products
                    </div>
                </div>
                <div className="category-container road-bike-container" id="road" onClick={onLinkClick}>
                    <div className="category-name">
                        Road Bikes
                    </div>
                </div>
                <div className="category-container clothing-container" id="gravel" onClick={onLinkClick}>
                    <div className="category-name">
                        Gravel Bikes
                    </div>
                </div>
                <div className="category-container ebikes-container" id="ebikes" onClick={onLinkClick}>
                    <div className="category-name">
                        eBikes
                    </div>
                </div>
                <div className="category-container helmets-container" id="helmets" onClick={onLinkClick}>
                    <div className="category-name">
                        Helmets
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Categories;