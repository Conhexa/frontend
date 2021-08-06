import React from "react";
import Card from "../Card";

const Articles = ({ articles }) => {
  const gridArticles = articles.slice(0, articles.length);
  return (
        <div className="gridBlog">
          {gridArticles.reverse().map((article, i) => {
            return (
              <div className="cardBlog"> 
                <Card article={article} key={`article__${article.slug}`} />          
              </div>
            )
          })}
        </div>
  );
};
export default Articles;