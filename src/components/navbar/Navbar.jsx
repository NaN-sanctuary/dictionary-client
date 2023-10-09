import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { FaBeer } from 'react-icons/fa';
import './NavBar.css';

import SearchBar from "../SearchBar/SearchBar";

export default function NavBar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const [results, setResults] = useState();

    const profiles = [
        { id: "1", name: "Allie Grater" },
        { id: "2", name: "Aida Bugg" },
        { id: "3", name: "Gabrielle" },
        { id: "4", name: "Grace" },
        { id: "5", name: "Hannah" },
        { id: "6", name: "Heather" },
        { id: "7", name: "John Doe" },
        { id: "8", name: "Anne Teak" },
        { id: "9", name: "Audie Yose" },
        { id: "10", name: "Addie Minstra" },
        { id: "11", name: "Anne Ortha" },
    ];

    const [selectedProfile, setSelectedProfile] = useState();
    const handleChange = (e) => {
        const { target } = e;
        if (!target.value.trim()) return setResults([]);

        const filteredValue = profiles.filter((profile) =>
            profile.name.toLowerCase().startsWith(target.value)
        );
        setResults(filteredValue);
    };
    return (
        <>
            <nav>
                <div className="nav-container">
                    <SearchBar
                        results={results}
                        value={selectedProfile?.name}
                        renderItem={(item) => <p>{item.name}</p>}
                        onChange={handleChange}
                        onSelect={(item) => setSelectedProfile(item)}
                    />
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