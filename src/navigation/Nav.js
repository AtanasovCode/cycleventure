import { Link } from "react-router-dom";
import { useState } from "react";
import DisplayNav from "./DisplayNav";
import '../styles/nav.css';
import menu from '../images/menu.png';
import close from '../images/close.png';

const Nav = ({ cartNum }) => {

    const [iconSrc, setIconSrc] = useState(menu);
    const [navClassName, setNavClassName] = useState("nav-links");

    const onMenuClick = () => {
        if(navClassName === "nav-links") {
            setNavClassName("nav-links show");
        }else {
            setNavClassName("nav-links");
        }
        if (iconSrc === menu) setIconSrc(close);
        if (iconSrc === close) setIconSrc(menu)
    }



    return (
        <div className="nav-full-container">
            <div className="nav-logo-container">
                <div className="nav-logo">
                    <div className="nav-bg-container"></div>
                    <div className="nav-name">
                        cycleventure.
                    </div>
                </div>
            </div>
            <DisplayNav
                    className={navClassName}
                    onMenuClick={onMenuClick}
                    menu={menu}
                    cartNum={cartNum}
                />
        </div>
    );
}

export default Nav;