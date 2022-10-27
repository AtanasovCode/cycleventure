import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import SelectedProduct from "./pages/SelectedProduct";
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
                    <Route path="/products" element={<Products cartNum={cartNum} />} />
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