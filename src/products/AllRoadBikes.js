import { Link } from "react-router-dom";
import DisplayProducts from "../navigation/DisplayProducts";
import RoadBikes from "../data/AllData";

const AllRoadBikes = () => {
    const formatNumber = (number) => {
        return number.toLocaleString('en-US');
    }

    return (
        <DisplayProducts productsToDisplay={RoadBikes} formatNumber={formatNumber} />       
    );
}

export default AllRoadBikes;