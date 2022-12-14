import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import DisplayProducts from "../navigation/DisplayProducts";
import Helmets from "../data/Helmets";

const AllHelmets = () => {

    const pathname = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);

    const formatNumber = (number) => {
        return number.toLocaleString('en-US');
    }

    return (
        <DisplayProducts productsToDisplay={Helmets} formatNumber={formatNumber} />       
    );
}

export default AllHelmets;