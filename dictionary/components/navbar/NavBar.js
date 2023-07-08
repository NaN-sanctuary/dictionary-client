import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdFingerprint } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "../button/Button";
import "./Navbar.css";
import { IconContext, iconContext } from "react-icons/lib";
function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleCLick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener("resize", showButton);

    return (
        <>
            <IconContext.Provider value={{ color: "#1c2237" }}>
                <div className="navbar">
                    <div className="navbar-container container">
                        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                            <img
                                src={"images/logo.svg"}
                                alt={"logo"}
                                className="nav-menu-logo-img"
                            />
                        </Link>
                        <div className="menu-icon" onClick={handleCLick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                            <li className="nav-item">
                                <Link to="/how-it-works" className="nav-links" onClick={closeMobileMenu}>
                                    How it works
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/services"
                                    className="nav-links"
                                    onClick={closeMobileMenu}
                                >
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-links" onClick={() => {
                                    closeMobileMenu();
                                }}>
                                    Connect Wallet
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </IconContext.Provider>
        </>
    );
}

export default Navbar;