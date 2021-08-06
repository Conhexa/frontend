import React from "react";
import '../../assets/style/styleMain.css';

import Articles from "./articles.js";
import Query from "../../components/Query";
import ARTICLES_QUERY from "../../queries/article/articles";
import EMPLOYEE_QUERY from "../../queries/employee/employee";

import Banner from "../../assets/img/distribuer_et_transporter.jpg";

const MainPage = () => {

    return (
        <div>
            <section className="top-banner-section">
                <div className="banner-image-div">
                    <img className="banner-image" src={Banner} alt={Banner} />
                </div>
                <div className="banner-overlay-div"></div>
                <div className="banner-text-div">
                    <span className="banner-text">
                    <p className="banner-h1-text">Bienvenue sur l'intranet Conhexa</p>
                    <p className="banner-body-text">Vous retrouverez toute les informations concernant l'interne de l'entreprise</p>
                    <p className="banner-btn"><a className="banner-btn-item" href="/faq">Plus d'information &#8594;</a></p>
                    </span>
                </div>
            </section>
            <div className="">
                <h1 className="actualityTitle">Les actualités</h1>
                    <Query query={ARTICLES_QUERY}> 
                        {({ data: { articles } }) => {
                            return <Articles articles={articles} />;
                        }}
                    </Query>
            </div>
            <div className="newEmployee">
                
                <div className="content">
                    <h1>Bienvenue chez Conhexa</h1>
                    <Query query={EMPLOYEE_QUERY} id={null}>
                        {({ data: { employees } }) => {
                            const tabEmployee = employees.slice(employees.length-3, employees.length);
                            return (
                                <div className="teamGrid">{tabEmployee.reverse().map((employee, i) => {
                                    return (
                                        <div className="teamCard">
                                            <img src={"http://localhost:1337"+employee.picture.url} alt={employee.firstName + " " + employee.lastName} />
                                            <div className="teamContainer">
                                                <h2 className="teamName">{employee.firstName +" "+ employee.lastName}</h2>
                                                <p className="teamTitle">{employee.job}</p>
                                                <p>{employee.description}</p>
                                            </div>
                                        </div>
                                    );
                                    })}
                                </div>
                        )}}
                    </Query>
                </div>
            </div>
        </div>
    );
}

export default MainPage;