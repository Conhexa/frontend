import React from "react";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import "../../assets/style/styleTeam.css";

import imgFanny from "../../assets/img/Fanny.jpg";

const Team = () =>{

    return(
        <div>
            <Nav />
            <div className="content">
                <h1>L'équipe Conhexa</h1>
                <div className="teamGrid">
                    <div className="teamCard">
                        <img src={imgFanny} alt="Fanny" />
                        <div className="teamContainer">
                            <h2 className="teamName">Fanny Adam</h2>
                            <p className="teamTitle">Talent Manager</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p className="teamMail">f.adam@conhexa.com</p>
                        </div>
                    </div>
                    <div className="teamCard">
                        <img src={imgFanny} alt="Fanny" />
                        <div className="teamContainer">
                            <h2 className="teamName">Fanny Adam</h2>
                            <p className="teamTitle">Talent Manager</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p className="teamMail">f.adam@conhexa.com</p>
                        </div>
                    </div>
                    <div className="teamCard">
                        <img src={imgFanny} alt="Fanny" />
                        <div className="teamContainer">
                            <h2 className="teamName">Fanny Adam</h2>
                            <p className="teamTitle">Talent Manager</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p className="teamMail">f.adam@conhexa.com</p>
                        </div>
                    </div>
                    <div className="teamCard">
                        <img src={imgFanny} alt="Fanny" />
                        <div className="teamContainer">
                            <h2 className="teamName">Fanny Adam</h2>
                            <p className="teamTitle">Talent Manager</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p className="teamMail">f.adam@conhexa.com</p>
                        </div>
                    </div>
                    <div className="teamCard">
                        <img src={imgFanny} alt="Fanny" />
                        <div className="teamContainer">
                            <h2 className="teamName">Fanny Adam</h2>
                            <p className="teamTitle">Talent Manager</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p className="teamMail">f.adam@conhexa.com</p>
                        </div>
                    </div>
                    <div className="teamCard">
                        <img src={imgFanny} alt="Fanny" />
                        <div className="teamContainer">
                            <h2 className="teamName">Fanny Adam</h2>
                            <p className="teamTitle">Talent Manager</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p className="teamMail">f.adam@conhexa.com</p>
                        </div>
                    </div>
                    <div className="teamCard">
                        <img src={imgFanny} alt="Fanny" />
                        <div className="teamContainer">
                            <h2 className="teamName">Fanny Adam</h2>
                            <p className="teamTitle">Talent Manager</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p className="teamMail">f.adam@conhexa.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Team;