import React from "react";
import '../../assets/style/styleMain.css';
/* import Query from "../../components/Query";
import ARTICLES_QUERY from "../../queries/article/articles";

import Articles from "../Main/articles.js"; */

import SlideShow from "../SlideShow/Slide";


const MainPage = () => {

    return (
        <div>
            <SlideShow />
            <div className="content">
                <div className="breadcrumb box">
                    Fil d'Ariane
                </div>
                <aside class="sidebar box">
                    Sidebar
                </aside>
                <main className="main">
                <div>
                    <div>
                        <div>
                            {/* <Query query={ARTICLES_QUERY}> {({ data: { articles } }) => {
                                return (<Articles articles={articles} />);
                                }}
                            </Query> */}
                        </div>
                    </div>
                </div>
                </main>
            </div>
        </div>
    );
}

export default MainPage;