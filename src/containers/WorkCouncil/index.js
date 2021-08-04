import React from "react";

import "../../assets/style/styleWorkCouncil.css"

import charbon from '../../assets/img/charbon.jpg';
import Query from "../../components/Query";
import SHOP_QUERY from "../../queries/shop/shop.js";


const WorkCouncil = () => {
    
    return(
        <div>
            <div className="content">
                <h1>Notre comité d'entreprise</h1>
                <div className="gridContent">
                    <div className="filterMenu">
                        <p className="filterTitle">Rechercher:</p>
                        <input class="search__input" type="text" placeholder="Search" />
                        <p className="filterTitle">Catégorie:</p>
                        <div className="filterCheckbox">
                            <input type="checkbox" id="product" name="produit"/>
                            <label for="produit">Produit</label>
                            <input type="checkbox" id="hobby" name="loisir"/>
                            <label for="hobby">Loisir</label>
                            <input type="checkbox" id="travel" name="voyage"/>
                            <label for="travel">Voyage</label>
                        </div>
                    </div>
                    <div>
                        <Query query={SHOP_QUERY} id={null}>
                        {({ data: { shops } }) => {
                            return (
                            <div className="listSell">{shops.map((article, i) => {
                                return (
                                    <div className="item">
                                        <img src={charbon} alt="charbon" />
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