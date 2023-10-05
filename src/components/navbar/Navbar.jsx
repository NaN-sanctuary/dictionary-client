import { Outlet, Link } from "react-router-dom";

import './NavBar.css';

export default function NavBar() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Головна</Link>
                    </li>
                    <li>
                        <Link to="/blog">Блог</Link>
                    </li>
                    <li>
                        <Link to="/add">Додати слово</Link>
                    </li>
                    <li>
                        <input type="search" id="search" name="search" placeholder="Пошук"></input>
                    </li>
                </ul>
            </nav >
            <Outlet />
        </>
    );
}