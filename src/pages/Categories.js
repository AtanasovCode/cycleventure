const Categories = ({className}) => {


    return (
        <div className={className}>
            <div className="categories-heading-container">
                <span className="categories-heading">Categories</span>
            </div>
            <div className="category-options-container">
                <div className="category-container all-products">
                    <div className="category-name active">
                        All Products
                    </div>
                </div>
                <div className="category-container road-bike-container">
                    <div className="category-name">
                        Road Bikes
                    </div>
                </div>
                <div className="category-container clothing-container">
                    <div className="category-name">
                        Gravel Bikes
                    </div>
                </div>
                <div className="category-container ebikes-container">
                    <div className="category-name">
                        eBikes
                    </div>
                </div>
                <div className="category-container helmets-container">
                    <div className="category-name">
                        Helmets
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Categories;