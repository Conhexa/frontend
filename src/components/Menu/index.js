import React from 'react';
import { Link } from "react-router-dom";
/* import LoginButton from "../Login";
import LogoutButton from "../Logout"; */
import './styleMenu.css';

const Menu = () =>{

    return(
        <nav className="menuNavigation">
            <label for="toggle">☰</label>
            <input type="checkbox" id="toggle" />
            <div className="menuNav">
                <Link to="/" className="left">Conhexa</Link>
                <Link to="/academy">Conhexa Academy</Link>
                <Link to="/planning">Planning</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/faq">Information</Link>
                <Link to="/workcouncil">Page CE</Link>
                <Link to="/team">L'équipe</Link>
                <Link to="/gallery">Galerie</Link>
                <Link to="/contact">Contact</Link>
                {/* <LoginButton/>
                <LogoutButton/> */}
            </div>
        </nav>
    )
}

export default Menu;