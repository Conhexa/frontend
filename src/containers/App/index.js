import React from "react";
import { Switch, Route } from "react-router-dom";
import Articles from "../Articles";
import Article from "../Article";
import Category from "../Category";
import Main from "../Main";
import Dashboard from "../../components/Dashboard/Dashboard.js";
import Contact from "../Contact";
import Planning from "../Planning";
import Gallery from "../Gallery";

import '../../assets/style/styleApp.css';
import WorkCouncil from "../WorkCouncil";
import Team from "../Team";
import QuestionAnswer from "../QuestionAnswer";


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
        <Route path="/planning" component={Planning} exact />
        <Route path="/gallery" component={Gallery} exact />
        <Route path="/workcouncil" component={WorkCouncil} exact />
        <Route path="/team" component={Team} exact />
        <Route path="/faq" component={QuestionAnswer} exact />
      </Switch> 
    </div>
  );
}
export default App;