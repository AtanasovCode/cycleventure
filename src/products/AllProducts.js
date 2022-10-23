const AllProducts = ({ products }) => {

    const formatNumber = (number) => {
        return number.toLocaleString('en-US');
    }


    const content = products.map((product) =>
        <div key={product.id} className="product-box">
            <img
                src={product.image}
                className="product-image-displayed"
            />
            <div className="product-name">{product.name}</div>
            <div className="product-price">${formatNumber(product.price)}</div>
        </div>
    )

    return (
        <div className="box-container">
            {content}
        </div>
    );
}

export default AllProducts;