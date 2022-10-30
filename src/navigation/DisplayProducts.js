import { Link } from "react-router-dom";

const DisplayProducts = ({
    productsToDisplay,
    formatNumber,
}) => {
    return (
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
    );
}

export default DisplayProducts;