import React from "react";
import "../../assets/style/styleTeam.css";

import imgFanny from "../../assets/img/Fanny.jpg";
import imgNico from "../../assets/img/nico.jpg";
import imgThomas from "../../assets/img/thomas.jpg";
import imgHildeLuc from "../../assets/img/hilde_luc.jpg";

import Query from "../../components/Query";
import TEAM_QUERY from "../../queries/team/teams.js";

const Team = () =>{

    return(
        <div>
            <div className="content">
                <h1>L'équipe Conhexa</h1>
                <div>
                    <Query query={TEAM_QUERY} id={null}>
                        {({ data: { teams } }) => {
                            return (
                                <div className="teamGrid">{teams.map((employee, i) => {
                                    return (
                                        <div className="teamCard">
                                            <img src={"http://localhost:1337"+employee.picture.url} alt={employee.firstName + " " + employee.lastName} />
                                            <div className="teamContainer">
                                                <h2 className="teamName">{employee.firstName +" "+ employee.lastName}</h2>
                                                <p className="teamTitle">{employee.job}</p>
                                                <p>{employee.description}</p>
                                                <p className="teamMail">{employee.mail}</p>
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
    )
}

export default Team;