/* Import des librairies */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

/* Import des Icons */
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DashboardIcon from '@material-ui/icons/Dashboard';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import PeopleIcon from '@material-ui/icons/People';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import SettingsIcon from '@material-ui/icons/Settings';
import StorefrontIcon from '@material-ui/icons/Storefront';

/* Import du style/img */
import '../../assets/style/nestedList.css'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
    '&:hover':{
      backgroundColor: '#3356a6', 
      color: '#f5f5f5',
      borderLeft: 'solid 3px #1c9447',
    }
  },
  buttonDecoration: {
    '&:hover':{
      backgroundColor: '#3356a6',
      color: '#f5f5f5',
      borderLeft: 'solid 3px #1c9447',
    }
  },

}));

export default function NestedList() {
  const classes = useStyles();
  const [userOpen, setUserOpen] = React.useState(false);
  const handleClickUser = () => {
    setUserOpen(!userOpen);
  };

  const [blogOpen, setBlogOpen] = React.useState(false);
  const handleClickBlog = () => {
    setBlogOpen(!blogOpen);
  };

  const [ceOpen, setCeOpen] = React.useState(false);
  const handleClickCe = () => {
    setCeOpen(!ceOpen);
  };
  
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      
      className={classes.root}
    >
    <ListItem button className={classes.buttonDecoration}>
      <ListItemIcon>
        <DashboardIcon/>
      </ListItemIcon>
      <ListItemText primary="Dashboard"/>
    </ListItem>
    <ListItem button onClick={handleClickBlog} className={classes.buttonDecoration}>
      <ListItemIcon>
        <MenuBookIcon />
      </ListItemIcon>
      <ListItemText primary="Blog"/>
      {blogOpen ? <ExpandLess /> : <ExpandMore />}
    </ListItem>
    <Collapse in={blogOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <ListItemText primary="Ajouter une news" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <EditIcon />
            </ListItemIcon>
            <ListItemText primary="Editer une news" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <DeleteIcon />
            </ListItemIcon>
            <ListItemText primary="Supprimer une news" />
          </ListItem>
        </List>
      </Collapse>
    <ListItem button onClick={handleClickUser} className={classes.buttonDecoration}>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Utilisateurs" />
        {userOpen ? <ExpandLess /> : <ExpandMore />}
    </ListItem>
      <Collapse in={userOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <ListItemText primary="Ajouter un utilisateur" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <EditIcon />
            </ListItemIcon>
            <ListItemText primary="Editer un utilisateur" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <DeleteIcon />
            </ListItemIcon>
            <ListItemText primary="Supprimer un utilisateur" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={handleClickCe} className={classes.buttonDecoration}>
      <ListItemIcon>
        <StorefrontIcon />
      </ListItemIcon>
      <ListItemText primary="Comité d'entreprise" />
        {ceOpen ? <ExpandLess /> : <ExpandMore />}
    </ListItem>
      <Collapse in={ceOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <ListItemText primary="Ajouter un article" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <EditIcon />
            </ListItemIcon>
            <ListItemText primary="Editer un article" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <DeleteIcon />
            </ListItemIcon>
            <ListItemText primary="Supprimer un article" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button className={classes.buttonDecoration}>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Settings"/>
      </ListItem>
    </List>
  );
}
