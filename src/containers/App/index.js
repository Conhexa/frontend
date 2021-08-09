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


function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/blog" component={Articles} exact />
        <Route path="/article/:id" component={Article} exact />
        <Route path="/category/:id" component={Category} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/planning" component={Planning} exact />
        <Route path="/gallery" component={CategoryGallery} exact />
        <Route path="/gallery/:id" component={Gallery} exact />
        <Route path="/workcouncil" component={WorkCouncil} exact />
        <Route path="/team" component={Team} exact />
        <Route path="/faq" component={QuestionAnswer} exact />
        <Route path="/academy" component={Academies} exact />
        <Route path="/academy/:id" component={Academy} exact />
        <Route path="/category-academy/:id" component={AcademyCategory} exact />
      </Switch>
      <Footer />
    </div>
  );
}
export default App;