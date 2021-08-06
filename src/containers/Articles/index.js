import React from "react";
import Articles from "../../components/Articles";
import Query from "../../components/Query";
import ARTICLES_QUERY from "../../queries/article/articles";

import { Link } from "react-router-dom";
import CATEGORIES_QUERY from "../../queries/category/categories";

import '../../assets/style/styleBlog.css';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
const Home = () => {
  

  return (
    <div>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <div className="content">
            <h1>Blog</h1>
            <div className="menuCategory">
              
                <Query query={CATEGORIES_QUERY} id={null}>
                {({ data: { categories } }) => {
                  return (
                    <div>
                    <Breadcrumbs aria-label="breadcrumb">
                    {categories.map((category, i) => {
                        return (
                          <div className="navCategory">
                            <Link
                              to={`/category/${category.slug}`}
                            >
                              {category.name}
                            </Link>
                          </div>
                        );
                      })}
                    </Breadcrumbs>
                    </div>
                    )}}
                </Query>
            </div>
            <Query query={ARTICLES_QUERY}>
              {({ data: { articles } }) => {
                return <Articles articles={articles} />;
              }}
            </Query>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;