import React from "react";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";

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

import imgPlanningDF from "../../assets/img/Planning_DunFresh.PNG";

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
      <Nav />
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
            <Zoom>
              <img
                alt="that wanaka tree"
                src={imgPlanningDF}
              />
            </Zoom>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <h1>Planning de Dunfrost</h1>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <h1>Planning de Frigo A25</h1>
          </TabPanel>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Planning;