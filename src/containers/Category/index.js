import React from "react";
import { useParams } from "react-router";
import Articles from "../../components/Articles";
import Query from "../../components/Query";
import CATEGORY_ARTICLES_QUERY from "../../queries/category/articles";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { Link } from "react-router-dom";
import CATEGORIES_QUERY from "../../queries/category/categories";


const Category = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  let { id } = useParams();
  return (
    <div>
    <Query query={CATEGORY_ARTICLES_QUERY} slug={id}>
      {({ data: { categories } }) => {
        if (categories.length) {
          return (
            <div>
              <div className="uk-section">
                <div className="uk-container uk-container-large">
                  <h1>{categories[0].name}</h1>
                  <div className="menuCategory">
                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                      Catégorie
                    </Button>
                    <Menu
                      id="simple-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                      <Query query={CATEGORIES_QUERY} id={null}>
                      {({ data: { categories } }) => {
                        return (
                          <div>{categories.map((category, i) => {
                              return (
                                <MenuItem onClick={handleClose} key={category.slug}>
                                  <Link
                                    to={`/category/${category.slug}`}
                                    className="uk-link-reset"
                                  >
                                    {category.name}
                                  </Link>
                                </MenuItem>
                              );
                            })}
                          </div>)}}
                      </Query>
                    </Menu>
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