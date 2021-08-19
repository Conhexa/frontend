import React from "react";

import "../../assets/style/styleWorkCouncil.css"

import Query from "../../components/Query";
import SHOP_QUERY from "../queries/shop/shop.js";
import INFORMATION_CE_QUERY from "../queries/shop/information.js";
import ReactMarkdown from "react-markdown";

import imgLogo from '../../assets/img/logo.png';


const WorkCouncil = () => {
    
    return(
        <div>
            <div className="content shop">
                <h1>Notre comité d'entreprise</h1>
                <p>Vous retrouverez sur cette page les articles actuellement en vente au sein du CE</p>
                <p>Vous pourrez aussi retrouver les informations que le CE souhaite communiquer</p>
                <div>
                    <h3>Nos articles disponibles actuellements : </h3>
                    <div>
                        <Query query={SHOP_QUERY} id={null}>
                        {({ data: { shops } }) => {
                            return (
                            <div className="listSell">{shops.map((article, i) => {
                                return (
                                    <div className="item">
                                        <img src={"http://localhost:1337"+article.picture.url} alt={article.name} />
                                        <div className="itemDescription">
                                            <h2 className="itemTitle">{article.name}</h2>
                                            <p>
                                                Description:
                                            </p>
                                            <p>
                                                {article.description}
                                            </p>
                                        </div>
                                        <div className="itemPrice">
                                            <p className="itemTitle">Prix:</p>
                                            <p className="priceItem">{article.price+" €"}</p>
                                        </div>
                                        {console.log(article.description.length)}
                                    </div>
                                );
                                })}
                            </div>)}}
                        </Query>
                    </div>
                </div>
                <div>
                    <Query query={INFORMATION_CE_QUERY} id={null}>
                        {({ data : {informationCes} }) => {
                            return (
                                <div className="ceInformation">
                                    <h3>Information du CE: </h3>
                                    <div className="ceGridCard">
                                    {informationCes.map((information, i) => {
                                    return (
                                        <div className="ceCard">
                                            <div className="ceBox">
                                                <div className="ceContentCard">
                                                    <img src={imgLogo} alt={imgLogo} className="logoMemo"/>
                                                    <h3>{information.title}</h3>
                                                    <ReactMarkdown>{information.content}</ReactMarkdown>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                    })}
                                    </div>
                                </div>
                            )
                        }
                        }
                    </Query>
                </div>
            </div>
        </div>
    )
}

export default WorkCouncil;
