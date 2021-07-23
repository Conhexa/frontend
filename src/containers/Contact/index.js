import React from 'react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

import '../../assets/style/styleContact.css'

const Contact = () =>{

    return (
        <div>
            <Nav />
                <div className='content'>
                    <h1 className="contactTitle"> 
                        Contacter directement le service RH
                    </h1>
                    <div className="contactUser">
                        <div className="line">
                            <h2>Fanny Adam</h2>
                            <p className="poste">Talent Manager</p>
                            <p className="descPoste">(Recrutement / Formation)</p>
                            <p className="userContact">Téléphone:</p>
                            <p className="infoUserContact">03.28.28.93.76</p>
                            <p className="userContact">Adresse e-mail:</p>
                            <p className="infoUserContact">f.adam@conhexa.com</p>
                        </div>
                        <div>
                            <h2>Margaux Tacquez</h2>
                            <p className="poste">Gestionnaire RH</p>
                            <p className="descPoste">(Gestion administrative et Paie)</p>
                            <p className="userContact">Téléphone:</p>
                            <p className="infoUserContact">03.28.43.86.92</p>
                            <p className="userContact">Adresse e-mail:</p>
                            <p className="infoUserContact">m.tacquez@conhexa.com</p>
                        </div>
                    </div>
                    <div className="formContact">
                        <form className={"formGrid"}>
                            <div className="lastName">
                                <label>
                                    Nom
                                </label>
                                <input/>
                            </div>

                            <div className="firstName">
                                <label>
                                    Prénom
                                </label>
                                <input/>
                            </div>
                                    
                            <div className="phone">
                                <label>
                                    Téléphone
                                </label>
                                <input/>
                            </div>

                            <div className="object">
                                <label>
                                    Objet
                                </label>
                                <input/>
                            </div>
                    
                            <div className="mail">
                                <label>
                                    Adresse e-mail
                                </label>
                                <input/>
                            </div>
                            
                            <div className="message">
                                <label>
                                    Votre message
                                </label>
                                <textarea/>
                            </div>     
                        </form>
                    </div>
                </div>
            <Footer />
        </div>
    );
};

export default Contact;