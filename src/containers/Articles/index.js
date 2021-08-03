import React from "react";
import Articles from "../../components/Articles";
import Query from "../../components/Query";
import ARTICLES_QUERY from "../../queries/article/articles";

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { Link } from "react-router-dom";
import CATEGORIES_QUERY from "../../queries/category/categories";

import '../../assets/style/styleBlog.css';

const Home = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>Blog</h1>
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
          <Query query={ARTICLES_QUERY}>
            {({ data: { articles } }) => {
              return <Articles articles={articles} />;
            }}
          </Query>
        </div>
      </div>
    </div>
  );
};
export default Home;