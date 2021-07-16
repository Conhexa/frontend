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
    <Query query={ARTICLE_QUERY} slug={id}>
      {({ data: { articles } }) => {
        if (articles.length) {
          const imageUrl =
            process.env.NODE_ENV !== "development"
              ? articles[0].image.url
              : process.env.REACT_APP_BACKEND_URL + articles[0].image.url;
          return (
            <div>
              <div
                id="banner"
                className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
                data-src={imageUrl}
                data-srcset={imageUrl}
                data-uk-img
              >
              </div>
              <div className="uk-section">
                <div className="uk-container uk-container-small">
                  <h1>{articles[0].title}</h1>
                  <ReactMarkdown className="content">{articles[0].content}</ReactMarkdown>
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
  );
};
export default Article;