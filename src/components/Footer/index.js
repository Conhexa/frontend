import React from "react";
import { Link } from "react-router-dom";
import '../../assets/style/styleFooter.css';

const Footer = () => {
  return (
    <div className="box">
      <div className="container">
        <div className="row">
          <div className="column">
            <p className="heading">A voir aussi</p>
            <Link to="/" className="footerLink">Conhexa Academy</Link>
            <Link to="/" className="footerLink">Information</Link>
            <Link to="/" className="footerLink">Page CE</Link>
          </div>
          <div className="column">
            <p className="heading">Blog</p>
            <Link to="/" className="footerLink">News</Link>
            <Link to="/" className="footerLink">Important</Link>
            <Link to="/" className="footerLink">Information RH</Link>
          </div>
          <div className="column">
            <p className="heading">Service RH</p>
            <Link to="/" className="footerLink">Fanny Adam</Link>
            <Link to="/" className="footerLink">Margaux Tacquez</Link>
          </div>
          <div className="column">
            <p className="heading">Nos réseaux</p>
            <Link to="/" className="footerLink">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  LinkedIn
                </span>
              </i>
            </Link>
            <Link to="/" className="footerLink">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </Link>
          </div>
        </div>
      </div>
      <div className="copyright">
            <p>Copyright © 
                {' '}
                <a href="https://www.conhexa.com/">
                    Conhexa {' ' + new Date().getFullYear() + '.'}
                </a>
            </p> 
        </div>
    </div>
  );
};
export default Footer;