import React from "react";
import { Link } from "react-router-dom";


import '../../assets/style/styleCard.css';


const Card = ({ article }) => {
  
  const imageUrl =
    process.env.NODE_ENV !== "development"
      ? article.image.url
      : process.env.REACT_APP_BACKEND_URL + article.image.url;
  return (
    
    <Link to={`/article/${article.slug}`} className="link">
      <div>
        <div>
          <img
            src={imageUrl}
            alt={article.image.url}
            height="100"
            className="articleImg"
          />
        </div>
        <p id="category" >
          {article.category.name}
        </p>
        <p id="author">
        Écrit par {article.author.name}
        </p>
        <div>
          <p id="title" >
            {article.title}
          </p>
          <p id="description">
            {article.description}
          </p>
        </div>
      </div>
    </Link>
  );
};
export default Card;