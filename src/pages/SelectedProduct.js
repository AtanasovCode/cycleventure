import { useParams } from "react-router-dom";

const SelectedProduct = () => {
    let params = useParams();
    return (
        <div>
            <h1>{params.productId}</h1>
            <h2>{params.brand}</h2>
        </div>
    );
}

export default SelectedProduct;