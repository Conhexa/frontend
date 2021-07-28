import React from "react";
import { Link } from "react-router-dom";
import '../../assets/style/styleNav.css'

const Nav = () => {
  return (
    <div>
            <div>
              <nav className="menuNav" data-uk-navbar>
                <div className="uk-navbar-left">
                  <ul className="uk-navbar-nav menuNav">
                    <li>
                      <Link to="/">Conhexa</Link>
                    </li>
                    <li>
                      <Link to="/admin">Gérer le site</Link>
                    </li>
                  </ul>
                </div>
                <div className="uk-navbar-right">
                  <ul className="uk-navbar-nav">
                    <li>
                      <Link to="/">Conhexa Academy</Link>
                    </li>
                    <li>
                      <Link to="/">Planning</Link>
                    </li>
                    <li>
                      <Link to="/blog">Blog</Link>
                    </li>
                    <li className="dropdown">
                      <Link to="/"className="dropbtn">Information</Link>
                        <div className="dropdownContent">
                          <Link to="/workcouncil" className="dropdownItem">Page CE</Link>
                          <Link to="/" className="dropdownItem">FaQ</Link>
                          <Link to="/team" className="dropdownItem">L'équipe</Link>
                        </div>
                    </li>
                    <li>
                      <Link to="/gallery">Gallerie</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
    </div>
  );
};
export default Nav;