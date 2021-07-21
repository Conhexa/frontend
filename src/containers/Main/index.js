import React from "react";
import '../../assets/style/styleMain.css';
/* import Query from "../../components/Query";
import ARTICLES_QUERY from "../../queries/article/articles";

import Articles from "../../components/Articles"; */

import SlideShow from "../SlideShow/Slide";


const MainPage = () => {
    return (
        <div>
            <SlideShow />
            <div className="content">
                <h1 className="actualityTitle">Les actualités</h1>
                {/* <Query query={ARTICLES_QUERY}> {({ data: { articles } }) => {
                    return (<Articles articles={articles} />);
                    }}
                </Query> */}
            </div>
        </div>
    );
}

export default MainPage;