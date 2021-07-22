import React from "react";
import { Switch, Route } from "react-router-dom";
import Articles from "../Articles";
import Article from "../Article";
import Category from "../Category";
import Main from "../Main";
import Dashboard from "../../components/Dashboard/Dashboard.js";
import Footer from "../../components/Footer"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/blog" component={Articles} exact />
        <Route path="/article/:id" component={Article} exact />
        <Route path="/category/:id" component={Category} exact />
        <Route path="/admin" component={Dashboard} exact />
      </Switch>
      <Footer />
    </div>
  );
}
export default App;