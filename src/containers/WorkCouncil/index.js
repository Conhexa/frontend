import React from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

import "../../assets/style/styleWorkCouncil.css"

import charbon from '../../assets/img/charbon.jpg';



const WorkCouncil = () => {
    
    return(
        <div>
            <Nav />
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
                        <p className="filterTitle">Prix:</p>
                        <label>Min:</label>
                        <input className="inputPrice"/>
                        <label>Max:</label>
                        <input className="inputPrice"/>
                    </div>
                    <div className="listSell">
                        <div className="item">
                            <img src={charbon} alt="charbon" />
                            <div className="itemDescription">
                                <h2 className="itemTitle">Charbon</h2>
                                <p>
                                    Description:
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non rutrum diam.
                                </p>
                            </div>
                            <div className="itemPrice">
                                <p className="itemTitle">Prix:</p>
                                <p className="priceItem">5€</p>
                            </div>
                        </div>
                        <div className="item">
                            <img src={charbon} alt="charbon" />
                            <div className="itemDescription">
                                <h2 className="itemTitle">Charbon</h2>
                                <p>
                                    Description:
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non rutrum diam.
                                </p>
                            </div>
                            <div className="itemPrice">
                                <p className="itemTitle">Prix:</p>
                                <p className="priceItem">300€</p>
                            </div>
                        </div>
                        
                        <div className="item">
                            <img src={charbon} alt="charbon" />
                            <div className="itemDescription">
                                <h2 className="itemTitle">Charbon</h2>
                                <p>
                                    Description:
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non rutrum diam.
                                </p>
                            </div>
                            <div className="itemPrice">
                                <p className="itemTitle">Prix:</p>
                                <p className="priceItem">15€</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default WorkCouncil;