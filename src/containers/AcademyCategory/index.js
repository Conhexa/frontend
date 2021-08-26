import React from 'react';

import Query from "../../components/Query";
import CATEGORY_ACADEMY_QUERY from "../../queries/academyCategory/categories.js";
import { Link } from "react-router-dom";
import CATEGORY_ACADEMIES_QUERY from "../../queries/academyCategory/academy.js";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { useParams } from "react-router";
import LogoAcademy from "../../assets/img/conhexa_academy.png";

import "../../assets/style/styleAcademy.css";
import Academy from '../../components/Academy';

const AcademyCategory = () => {
    let { id } = useParams();
    return (
        <div>
           <Query query={CATEGORY_ACADEMIES_QUERY} slug={id}>
                {({ data: { academyCategories } }) => {
                    if (academyCategories.length) {
                    return (
                        <div>
                        <div>
                            <div className="content">
                            <div className="logoAcademy">
                                <img
                                    src={LogoAcademy}
                                    alt="logo Conhexa Academy"
                                    className="academyLogo"
                                />
                            </div>
                            <h1>{academyCategories[0].name}</h1>
                            <div className="menuCategory">
                            <Query query={CATEGORY_ACADEMY_QUERY} id={null}>
                                {({ data: { academyCategories } }) => {
                                return (
                                    <div>
                                    <Breadcrumbs aria-label="breadcrumb">
                                    <Link to="/academy" className="backBlog">Revenir sur Conhexa Academy</Link>
                                    {academyCategories.map((category, i) => {
                                        return (
                                        <div className="navCategory">
                                            <Link
                                            to={`/category-academy/${category.slug}`}
                                            >
                                            {category.name}
                                            </Link>
                                        </div>
                                        );
                                    })}
                                    </Breadcrumbs>
                                    </div>
                                )}}
                            </Query>
                            </div>
                             <Academy academies={academyCategories[0].academies} />
                           </div>
                        </div>
                        </div>  
                    );
                    }
                }}
            </Query>
        </div>
    )
}

export default AcademyCategory;