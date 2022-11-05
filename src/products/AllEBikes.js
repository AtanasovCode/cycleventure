import { Link, useLocation } from "react-router-dom";
import DisplayProducts from "../navigation/DisplayProducts";
import EBikes from "../data/EBikes";

const AllEBikes = () => {

    const pathname = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);

    const formatNumber = (number) => {
        return number.toLocaleString('en-US');
    }

    return (
        <DisplayProducts productsToDisplay={EBikes} formatNumber={formatNumber} />       
    );
}

export default AllEBikes;