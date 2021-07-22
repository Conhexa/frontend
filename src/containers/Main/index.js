import React from "react";
import '../../assets/style/styleMain.css';
/* import Query from "../../components/Query";
import ARTICLES_QUERY from "../../queries/article/articles";

import Articles from "../../components/Articles"; */
import Nav from "../../components/Nav";
import SlideShow from "../SlideShow/Slide";
import Footer from "../../components/Footer"

const MainPage = () => {
    return (
        <div>
            <Nav />
            <SlideShow />
            <div className="content">
                <h1 className="actualityTitle">Les actualités</h1>
                {/* <Query query={ARTICLES_QUERY}> {({ data: { articles } }) => {
                    return (<Articles articles={articles} />);
                    }}
                </Query> */}
            </div>
            <Footer />
        </div>
    );
}

export default MainPage;