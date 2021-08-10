import React from "react";

import "../../assets/style/styleWorkCouncil.css"

import Query from "../../components/Query";
import SHOP_QUERY from "../../queries/shop/shop.js";


const WorkCouncil = () => {
    
    return(
        <div>
            <div className="content">
                <h1>Notre comité d'entreprise</h1>
                <div>
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
            </div>
        </div>
    )
}

export default WorkCouncil;