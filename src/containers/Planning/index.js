import React from "react";

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import "../../assets/style/stylePlanning.css";
import Zoom from "react-medium-image-zoom";
import 'react-medium-image-zoom/dist/styles.css';

import ReactMarkdown from "react-markdown";

import Query from "../../components/Query";
import PLANNING_DUNFRESH_QUERY from "../../queries/planning/dunfresh.js";
import PLANNING_DUNFROST_QUERY from "../../queries/planning/dunfrost";
import PLANNING_FRIGOA25_QUERY from "../../queries/planning/frigoa25";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  appBar:{
    alignSelf: "center",
  },
}));

const Planning = () =>{

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return(
    <div>
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" className={classes.appBar}>
            <Tab label="DunFresh" {...a11yProps(0)} />
            <Tab label="DunFrost" {...a11yProps(1)} />
            <Tab label="Frigo A25" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <div className="content">
          <TabPanel value={value} index={0}>
            <h1>Planning de DunFresh</h1>

            <Query query={PLANNING_DUNFRESH_QUERY}> 
              {({ data: { planningDunFreshes } }) => {
                const planningDunfresh = planningDunFreshes.slice(planningDunFreshes.length-1, planningDunFreshes.length);
                return (
                  <div>
                    {planningDunfresh.reverse().map((planning, i) => {
                      return (
                        <div>
                          <ReactMarkdown>{planning.comment}</ReactMarkdown>
                          <Zoom>
                          <img
                            src={"http://localhost:1337"+planning.picture.url}
                            alt={planning.picture.name}
                          />
                          </Zoom>
                        </div>
                      )
                    })}
                  </div>
                );
              }}
            </Query>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <h1>Planning de Dunfrost</h1>
            <Query query={PLANNING_DUNFROST_QUERY}> 
              {({ data: { planningDunFrosts } }) => {
                const planningDunFrost = planningDunFrosts.slice(planningDunFrosts.length-1, planningDunFrosts.length);
                return (
                  <div>
                    {planningDunFrost.reverse().map((planning, i) => {
                      return (
                        <div>
                          <ReactMarkdown>{planning.comment}</ReactMarkdown>
                          <Zoom>
                          <img
                            src={"http://localhost:1337"+planning.picture.url}
                            alt={planning.picture.name}
                          />
                          </Zoom>
                        </div>
                      )
                    })}
                  </div>
                );
              }}
            </Query>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <h1>Planning de Frigo A25</h1>
            <Query query={PLANNING_FRIGOA25_QUERY}> 
              {({ data: { planningFrigoA25s } }) => {
                const planningFrigoA25 = planningFrigoA25s.slice(planningFrigoA25s.length-1, planningFrigoA25s.length);
                return (
                  <div>
                    {planningFrigoA25.reverse().map((planning, i) => {
                      return (
                        <div>
                          <ReactMarkdown>{planning.comment}</ReactMarkdown>
                          <Zoom>
                          <img
                            src={"http://localhost:1337"+planning.picture.url}
                            alt={planning.picture.name}
                          />
                          </Zoom>
                        </div>
                      )
                    })}
                  </div>
                );
              }}
            </Query>
          </TabPanel>
        </div>
      </div>
    </div>
  )
}

export default Planning;