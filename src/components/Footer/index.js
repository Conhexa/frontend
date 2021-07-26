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
            <Link to="/category/news" className="footerLink">News</Link>
            <Link to="/category/important" className="footerLink">Important</Link>
            <Link to="/category/information-rh" className="footerLink">Information RH</Link>
          </div>
          <div className="column">
            <p className="heading">Service RH</p>
            <Link to="/manager" className="footerLink">Fanny Adam</Link>
            <Link to="/gestionnaire" className="footerLink">Margaux Tacquez</Link>
          </div>
          <div className="column">
            <p className="heading">Nos réseaux</p>
            <a href="https://fr.linkedin.com/company/conhexa" className="footerLink">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  LinkedIn
                </span>
              </i>
            </a>
            <a href="https://www.youtube.com/channel/UCBsNkuWbJJ5RoxkQFWvOmWQ" className="footerLink">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">
            <p>Copyright © 
                {' ' + new Date().getFullYear() + ' | Designed by '}
                <a href="https://www.conhexa.com/">
                    Conhexa 
                </a>
            </p> 
        </div>
    </div>
  );
};
export default Footer;