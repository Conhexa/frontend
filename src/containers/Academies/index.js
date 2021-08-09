import React from 'react';

import Query from "../../components/Query";
import CATEGORY_ACADEMY_QUERY from "../../queries/academyCategory/categories.js";
import { Link } from "react-router-dom";
import ACADEMY_CATEGORIES_QUERY from "../../queries/academy/categories.js";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

import LogoAcademy from "../../assets/img/conhexa_academy.png";

import "../../assets/style/styleAcademy.css";
import Academy from '../../components/Academy';

const Academies = () => {
    
    return (
        <div className="content">
            <div className="logoAcademy">
                <img
                    src={LogoAcademy}
                    alt="logo Conhexa Academy"
                />
            </div>
            <div className="menuCategory">
                <Query query={CATEGORY_ACADEMY_QUERY} id={null}>
                    {({ data: { academyCategories } }) => {
                    return (
                    <div>
                        <Breadcrumbs aria-label="breadcrumb">
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
            <Query query={ACADEMY_CATEGORIES_QUERY}>
              {({ data: { academies } }) => {
                return <Academy academies={academies} />;
              }}
            </Query>
        </div>
    )
}

export default Academies;