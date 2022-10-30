import { Link } from "react-router-dom";
import DisplayProducts from "../navigation/DisplayProducts";
import AllData from "../data/AllData";

const AllProducts = () => {
    const formatNumber = (number) => {
        return number.toLocaleString('en-US');
    }

    return (
        <DisplayProducts productsToDisplay={AllData} formatNumber={formatNumber} />       
    );
}

export default AllProducts;