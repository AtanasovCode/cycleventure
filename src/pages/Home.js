import { Link } from "react-router-dom";
import Nav from "../navigation/Nav";
import '../styles/home.css';
import mainBackground from '../images/cycle-hill.jpg';


const Home = ({cartNum}) => {
    return (
        <div className="home-full-container">
            <Nav cartNum={cartNum} />
            <div className="home-info-container">
                <div className="home-info">
                    <h1 className="main-heading">Explore, Enjoy Life</h1>
                    <span className="sub-heading">
                        We offer the best road bikes and ebikes
                        for your to enjoy and explore the world on!
                        We have partnered with top brands to give you what you deserve!
                    </span>
                </div>
                <div className="home-bg-container">
                    <div className="home-shop-container">
                        <span className="main-heading">
                            Adventure Awaits!
                        </span>
                        <Link
                            to="/products"
                            className="shop-btn"
                        >
                            Shop Now!
                        </Link>
                    </div>
                    <div className="photo-attr">
                        Photo by Óscar Aguilar Elías on <a href="https://unsplash.com/">Unsplash</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;