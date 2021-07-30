import React from "react";
import Card from "../../components/Card";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import "../../assets/style/styleMain.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
    height: 450,
    marginTop: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: 'auto',
    height: '300px',
    marginRight: 'auto',
    marginLeft: 'auto',
    border: '4px solid #3656A6',
  },
}));

const Articles = ({ articles }) => {
  const classes = useStyles();
  const gridArticles = articles.slice(articles.length-3, articles.length);
  return (
        <div className="content">
          <div className="gridMainArticle">
          {gridArticles.reverse().map((article, i) => {
            return (
              <div className={classes.root}>
                <Paper className={classes.paper}> 
                  <Card article={article} key={`article__${article.slug}`} />
                </Paper>
              </div>
            )
          })}
          </div>
        </div>

  );
};
export default Articles;