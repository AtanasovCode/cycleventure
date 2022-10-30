import { Link } from "react-router-dom";
import DisplayProducts from "../navigation/DisplayProducts";
import GravelBikes from "../data/GravelBikes";

const AllGravelBikes = () => {
    const formatNumber = (number) => {
        return number.toLocaleString('en-US');
    }

    return (
        <DisplayProducts productsToDisplay={GravelBikes} formatNumber={formatNumber} />       
    );
}

export default AllGravelBikes;