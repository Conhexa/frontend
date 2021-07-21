import React from "react";
import Card from "../../components/Card";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
    height: 450,
    marginTop: 'auto',
    marginRight: 'auto',
    marginLeft: 'auto',
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
    <div>
      <div>
        <div>
        <Grid container spacing={1}>
          {gridArticles.reverse().map((article, i) => {
            return (
              <div className={classes.root}>
                  <Grid item xs={10}>
                    <Paper className={classes.paper}> 
                      <Card article={article} key={`article__${article.slug}`} />
                    </Paper>
                  </Grid>
              </div>
            )
          })}
        </Grid>
        </div>
      </div>
    </div>
  );
};
export default Articles;