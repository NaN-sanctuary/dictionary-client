import { Outlet, Link } from "react-router-dom";

import './NavBar.css';

export default function NavBar() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                </ul>
            </nav >

            <Outlet />
        </>
    );
}