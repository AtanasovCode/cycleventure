import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import SelectedProduct from "./pages/SelectedProduct";
import AllProducts from "./pages/AllProducts";
import AllRoadBikes from "./pages/AllRoadBikes";
import AllGravelBikes from "./pages/AllGravelBikes";
import AllEBikes from "./pages/AllEBikes";
import AllHelmets from "./pages/AllHelmets";
import Cart from "./Cart";


const ShopApp = () => {

    const [cartNum, setCartNum] = useState(0);
    const [cartProducts, setCartProducts] = useState([]);

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
                    <Route path="/products" element={<Products cartNum={cartNum} />}>
                    <Route path="all-products" element={<AllProducts />} />
                        <Route path="road-bikes" element={<AllRoadBikes />} />
                        <Route path="gravel-bikes" element={<AllGravelBikes />} />
                        <Route path="e-bikes" element={<AllEBikes />} />
                        <Route path="helmets" element={<AllHelmets />} />
                    </Route>
                    <Route path="/products/:productId" element={<SelectedProduct
                        cartNum={cartNum}
                        setCartNum={setCartNum}
                        cartProducs={cartProducts}
                        setCartProducts={setCartProducts} />}
                    />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/cart" element={<Cart
                        cartNum={cartNum}
                        setCartNum={setCartNum}
                        cartProducts={cartProducts} />}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default ShopApp;