import React from "react";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import "../../assets/style/styleTeam.css";

import imgFanny from "../../assets/img/Fanny.jpg";
import imgNico from "../../assets/img/nico.jpg";
import imgThomas from "../../assets/img/thomas.jpg";
import imgHildeLuc from "../../assets/img/hilde_luc.jpg";

const Team = () =>{

    return(
        <div>
            <Nav />
            <div className="content">
                <h1>L'équipe Conhexa</h1>
                <div className="teamGrid">
                    <div className="teamCard">
                        <img src={imgHildeLuc} alt="Hilde_Luc" />
                        <div className="teamContainer">
                            <h2 className="teamName">Hilde &amp; Luc </h2>
                            <p className="teamTitle">Managing Directors</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p className="teamMail">h.dejonghe@conhexa.com</p>
                            <p className="teamMail">l.vanholzaet@conhexa.com</p>
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
                        <img src={imgNico} alt="Nico" />
                        <div className="teamContainer">
                            <h2 className="teamName">Nicolas Vangheluwe</h2>
                            <p className="teamTitle">Plant Manager</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p className="teamMail">n.vangheluwe@conhexa.com</p>
                        </div>
                    </div>
                    <div className="teamCard">
                        <img src={imgThomas} alt="Thomas" />
                        <div className="teamContainer">
                            <h2 className="teamName">Thomas Van Herck</h2>
                            <p className="teamTitle">Information Systems Manager</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p className="teamMail">t.vanherck@conhexa.com</p>
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
                        <img src={imgNico} alt="Nico" />
                        <div className="teamContainer">
                            <h2 className="teamName">Nicolas Vangheluwe</h2>
                            <p className="teamTitle">Plant Manager</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p className="teamMail">n.vangheluwe@conhexa.com</p>
                        </div>
                    </div>
                    <div className="teamCard">
                        <img src={imgThomas} alt="Thomas" />
                        <div className="teamContainer">
                            <h2 className="teamName">Thomas Van Herck</h2>
                            <p className="teamTitle">Information Systems Manager</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p className="teamMail">t.vanherck@conhexa.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Team;