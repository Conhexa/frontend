import React from 'react';

import { useParams } from "react-router";
import Query from "../../components/Query";
import ReactMarkdown from "react-markdown";

import ACADEMY_QUERY from "../../queries/academy/academy.js";
import "../../assets/style/styleAcademy.css";

const Academy = () => {
    let { id } = useParams();
    return (
        <div>
            <Query query={ACADEMY_QUERY} slug={id}>
                {({ data: { academies } }) => {
                    if (academies.length) {
                    return (
                        <div className="contentArticle">
                        <img src={"http://localhost:1337"+academies[0].image.url} alt={academies[0].image.url} className="bannerArticle"/>
                        <div >
                            <div className="content">
                            <h1 className="articleTitle">{academies[0].title}</h1>
                            <ReactMarkdown >{academies[0].content}</ReactMarkdown>
                            </div>
                        </div>
                        </div>
                    );
                    }
                }}
            </Query>
        </div>
    )
}

export default Academy;