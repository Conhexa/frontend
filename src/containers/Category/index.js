import React from "react";
import { useParams } from "react-router";
import Articles from "../../components/Articles";
import Query from "../../components/Query";
import CATEGORY_ARTICLES_QUERY from "../../queries/category/articles";

import { Link } from "react-router-dom";
import CATEGORIES_QUERY from "../../queries/category/categories";

import Breadcrumbs from '@material-ui/core/Breadcrumbs';


const Category = () => {
  
  let { id } = useParams();
  return (
    <div>
    <Query query={CATEGORY_ARTICLES_QUERY} slug={id}>
      {({ data: { categories } }) => {
        if (categories.length) {
          return (
            <div>
              <div>
                <div className="content">
                  <h1>{categories[0].name}</h1>
                  <div className="menuCategory">
                  <Query query={CATEGORIES_QUERY} id={null}>
                    {({ data: { categories } }) => {
                      return (
                        <div>
                        <Breadcrumbs aria-label="breadcrumb">
                        <Link to="/blog" className="backBlog">Revenir sur le blog</Link>
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
                  <Articles articles={categories[0].articles} />
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
export default Category;