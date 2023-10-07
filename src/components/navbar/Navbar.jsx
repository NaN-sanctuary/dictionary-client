import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { FaBeer } from 'react-icons/fa';
import './NavBar.css';

import SearchBar from "../SearchBar/SearchBar";

export default function NavBar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <>
            <nav>
                <div className="nav-container">
                    <SearchBar />
                    <ul className={click ? "menu active" : "menu"}>
                        <li className="menu-item">
                            <Link to="/" onClick={handleClick}>Головна</Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/blog" onClick={handleClick}>Блог</Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/add" onClick={handleClick}>Додати значення</Link>
                        </li>
                    </ul>
                    <div className="menu-icon" onClick={handleClick}>
                        <span className="icon">
                            <FaBeer size={24} />{" "}
                        </span>
                    </div>
                </div>
            </nav >
            <Outlet />
        </>
    );
}