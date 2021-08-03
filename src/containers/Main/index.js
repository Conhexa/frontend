import React from "react";
import '../../assets/style/styleMain.css';

import SlideShow from "../SlideShow/Slide";

import Articles from "./articles.js";
import Query from "../../components/Query";
import ARTICLES_QUERY from "../../queries/article/articles";

import imgFanny from "../../assets/img/Fanny.jpg";
import imgNico from "../../assets/img/nico.jpg";
import imgHildeLuc from "../../assets/img/hilde_luc.jpg";


const MainPage = () => {

    return (
        <div>
            <SlideShow />
            <div className="">
                <h1 className="actualityTitle">Les actualités</h1>
                    <Query query={ARTICLES_QUERY}> 
                        {({ data: { articles } }) => {
                            return <Articles articles={articles} />;
                        }}
                    </Query>
            </div>
            <div className="newEmployee">
                
                <div className="content">
                    <h1>Bienvenue chez Conhexa</h1>
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage;