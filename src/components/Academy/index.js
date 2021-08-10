import React from "react";

import { Link } from 'react-router-dom';

import "../../assets/style/styleAcademy.css";

const Academy = ({ academies }) => {
  const gridAcademy = academies.slice(0, academies.length);
  return (
        <div>
            <div className="gridAcademy">
                {gridAcademy.reverse().map((academy, i) => {
                    return (
                        <div className="cardAcademy">
                            <Link to={`/academy/${academy.slug}`} className="link">
                                <div className="labelAcademy">{academy.academy_category.name}</div>
                                <img
                                    src={"http://localhost:1337"+academy.image.url}
                                    alt={"http://localhost:1337"+academy.image.name}
                                    height="100"
                                    className="imgAcademy"
                                />
                                <h2 className="titleAcademy">{academy.title}</h2>
                                <p className="descriptionAcademy">{academy.description}</p>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
  );
};
export default Academy;