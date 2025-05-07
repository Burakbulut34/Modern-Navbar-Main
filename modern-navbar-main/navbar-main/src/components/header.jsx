import React from "react";
import "./header.css";

const Header = () => {
    return(
        <header className="header">
            <nav>
                <div className="logo">
                    <a href="#">Burak.<span>B</span></a>
                </div>
                <input type="checkbox" id="menu-toggle" />
                <label for="menu-toggle" className="menu-icon">&#9776;</label>
                <ul className="menu">
                    <li><a href="#">Anasayfa</a></li>
                    <li><a href="#">Yetenekler</a></li>
                    <li><a href="#">Projeler</a></li>
                    <li><a href="#">Hakkımızda</a></li>
                </ul>
            </nav>
        </header>
    );
}
export default Header; 