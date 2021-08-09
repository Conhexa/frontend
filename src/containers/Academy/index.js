import React from 'react';
import LogoAcademy from "../../assets/img/conhexa_academy.png";

import "../../assets/style/styleAcademy.css";

const Academy = () => {
    
    return (
        <div className="content">
            <div className="logoAcademy">
                <img
                    src={LogoAcademy}
                    alt="logo Conhexa Academy"
                />
            </div>
        </div>
    )
}

export default Academy;