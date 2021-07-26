import React from "react";
import { Switch, Route } from "react-router-dom";
import Articles from "../Articles";
import Article from "../Article";
import Category from "../Category";
import Main from "../Main";
import Dashboard from "../../components/Dashboard/Dashboard.js";
import Contact from "../Contact";
import Manager from "../Contact/Manager";
/* import Planning from "../Planning"; */
import Gestionnaire from "../Contact/Gestionnaire";
import Gallery from "../Gallery";

import '../../assets/style/styleApp.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/blog" component={Articles} exact />
        <Route path="/article/:id" component={Article} exact />
        <Route path="/category/:id" component={Category} exact />
        <Route path="/admin" component={Dashboard} exact />
        <Route path="/contact" component={Contact} exact />
        {/* <Route path="/planning" component={Planning} exact /> */}
        <Route path="/manager" component={Manager} exact />
        <Route path="/gestionnaire" component={Gestionnaire} exact />
        <Route path="/gallery" component={Gallery} exact />
      </Switch>
    </div>
  );
}
export default App;