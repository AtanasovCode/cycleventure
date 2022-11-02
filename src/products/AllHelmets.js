import { Link } from "react-router-dom";
import DisplayProducts from "../navigation/DisplayProducts";
import Helmets from "../data/Helmets";

const AllHelmets = () => {
    const formatNumber = (number) => {
        return number.toLocaleString('en-US');
    }

    return (
        <DisplayProducts productsToDisplay={Helmets} formatNumber={formatNumber} />       
    );
}

export default AllHelmets;