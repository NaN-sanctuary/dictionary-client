import React, { useState } from "react";
import "./NavBar.css";
import { useNavigation } from '@react-navigation/native';
import { Icon } from "react-native-elements";

function NavBar() {
    const navigation = useNavigation();

    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);

    };

    const handleGoHome = () => {
        setClick(!click);
        navigation.navigate('AddWord');
    };

    const handleNavigateSignInWithGoogle = () => {
        setClick(!click);
        navigation.navigate('SignInWithGoogle');
    };

    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <div
                                className="nav-links"
                                onClick={handleGoHome}>
                                Home
                            </div>
                        </li>
                        <li className="nav-item">
                            <div
                                className="nav-links"
                                onClick={handleClick}>
                                Contact Us
                            </div>
                        </li>
                        <li className="nav-item">
                            <div
                                className="nav-links"
                                onClick={handleNavigateSignInWithGoogle}>
                                Login with google
                            </div>
                        </li>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}>
                            <Icon name='menu' size={"44px"} color={"#fff"} />
                        </i>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;