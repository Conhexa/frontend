import React from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import Articles from "../Articles";
import Article from "../Article";
import Category from "../Category";
import Main from "../Main";
import Contact from "../Contact";
import Planning from "../Planning";
import CategoryGallery from "../CategoryGallery";
import '../../assets/style/styleApp.css';
import WorkCouncil from "../WorkCouncil";
import Team from "../Team";
import QuestionAnswer from "../QuestionAnswer";
import Gallery from "../Gallery";
import Academy from "../Academy";
import AcademyCategory from "../AcademyCategory";
import Academies from "../Academies";
import PrivateRoute from "./private-route";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" component={Main} exact />
        <PrivateRoute path="/blog" component={Articles} exact />
        <PrivateRoute path="/article/:id" component={Article} exact />
        <PrivateRoute path="/category/:id" component={Category} exact />
        <PrivateRoute path="/contact" component={Contact} exact />
        <PrivateRoute path="/planning" component={Planning} exact />
        <PrivateRoute path="/gallery" component={CategoryGallery} exact />
        <PrivateRoute path="/gallery/:id" component={Gallery} exact />
        <PrivateRoute path="/workcouncil" component={WorkCouncil} exact />
        <PrivateRoute path="/team" component={Team} exact />
        <PrivateRoute path="/faq" component={QuestionAnswer} exact />
        <PrivateRoute path="/academy" component={Academies} exact />
        <PrivateRoute path="/academy/:id" component={Academy} exact />
        <PrivateRoute path="/category-academy/:id" component={AcademyCategory} exact />
      </Switch>
      <Footer />
    </div>
  );
}
export default App;