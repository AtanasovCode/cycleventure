import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Home from "./pages/Home";
import SelectedProduct from "./pages/SelectedProduct";
import AllProducts from "./products/AllProducts";
import AllRoadBikes from "./products/AllRoadBikes";
import AllGravelBikes from "./products/AllGravelBikes";
import AllEBikes from "./products/AllEBikes";
import AllHelmets from "./products/AllHelmets";
import Cart from "./Cart";


const ShopApp = () => {

    const [cartNum, setCartNum] = useState(0);
    const [cartProducts, setCartProducts] = useState([]);
    const [price, setPrice] = useState(0);

    const formatNumber = (number) => {
        return number.toLocaleString('en-US');
    }

    return (
        <div className="full-app-container">
            <BrowserRouter>
                <Routes>
                    <Route
                        path="*"
                        element={
                            <main style={{ padding: "1rem" }}>
                                <p>There's nothing here!</p>
                            </main>
                        }
                    />
                    <Route path="/" element={<Home cartNum={cartNum} />} cartNum={cartNum} />
                    <Route path="/products" element={<Products cartNum={cartNum} formatNumber={formatNumber} />}>
                        <Route path="all-products" element={<AllProducts formatNumber={formatNumber} />} />
                        <Route path="road-bikes" element={<AllRoadBikes formatNumber={formatNumber} />} />
                        <Route path="gravel-bikes" element={<AllGravelBikes formatNumber={formatNumber} />} />
                        <Route path="e-bikes" element={<AllEBikes formatNumber={formatNumber} />} />
                        <Route path="helmets" element={<AllHelmets formatNumber={formatNumber} />} />
                    </Route>
                    <Route path="/products/:productId" element={<SelectedProduct
                        cartNum={cartNum}
                        setCartNum={setCartNum}
                        cartProducts={cartProducts}
                        setCartProducts={setCartProducts}
                        price={price}
                        setPrice={setPrice} 
                        formatNumber={formatNumber} />}
                    />
                    <Route path="/cart" element={<Cart
                        cartNum={cartNum}
                        setCartNum={setCartNum}
                        cartProducts={cartProducts}
                        price={price}
                        setPrice={setPrice} 
                        formatNumber={formatNumber} />}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default ShopApp;