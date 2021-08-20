import React from "react";
import { useParams } from "react-router";
import Query from "../../components/Query";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import ARTICLE_QUERY from "../../queries/article/article";
import '../../assets/style/pageArticle.css';

const Article = () => {
  let { id } = useParams();
  return (
    <div>
    <Query query={ARTICLE_QUERY} slug={id}>
      {({ data: { articles } }) => {
        if (articles.length) {
          return (
            <div className="contentArticle">
              <img src={"http://localhost:1337"+articles[0].image.url} alt={articles[0].image.url} className="bannerArticle"/>
              <div >
                <div className="content">
                  <h1 className="articleTitle">{articles[0].title}</h1>
                  <ReactMarkdown >{articles[0].content}</ReactMarkdown>
                  <p className="author">
                    Ecrit par : {articles[0].author.name} le <Moment format="Do MMMM YYYY">{articles[0].published_at}</Moment>
                  </p>
                </div>
              </div>
            </div>
          );
        }
      }}
    </Query>
    </div>
  );
};

export default Article;