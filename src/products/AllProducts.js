import { Link, useLocation } from "react-router-dom";
import DisplayProducts from "../navigation/DisplayProducts";
import AllData from "../data/AllData";

const AllProducts = () => {

    const pathname = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);

    const formatNumber = (number) => {
        return number.toLocaleString('en-US');
    }

    return (
        <DisplayProducts productsToDisplay={AllData} formatNumber={formatNumber} />       
    );
}

export default AllProducts;