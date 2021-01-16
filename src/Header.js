import React from "react";
import teslaLogoSmall from "./assets/teslaLogoSmall.svg";
import "./Header.css";

function Header() {
    return (
        <div className={"header"}>
            <nav>
                <div className="nav-left">
                    <div className="log">
                        <img src={teslaLogoSmall} alt="Logo"/>
                    </div>
                </div>
                <div className="nav-mid">
                    <ul>
                        <li><a href="#">Model S</a></li>
                        <li><a href="#">Model 3</a></li>
                        <li><a href="#">Model X</a></li>
                        <li><a href="#">Model Y</a></li>
                        <li><a href="#">Solar ROOF</a></li>
                        <li><a href="#">Solar Panel</a></li>
                    </ul>
                </div>
                <div className="nav-right">

                    <ul>
                        <li><a href="#">SHOP</a></li>
                        <li><a href="#">TESLA Account</a></li>
                    </ul>

                </div>
            </nav>
        </div>
    );
}

export default Header;
