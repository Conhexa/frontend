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
                        <form>
                            <label for="fname">Prénom</label>
                            <input type="text" id="fname" name="firstname" placeholder="Votre prénom.."/>

                            <label for="lname">Nom</label>
                            <input type="text" id="lname" name="lastname" placeholder="Votre nom.."/>
                            
                            <label for="lname">Adresse e-mail</label>
                            <input type="text" id="lname" name="lastname" placeholder="Votre adresse mail.."/>

                            <label for="country">Objet</label>
                            <select id="country" name="country">
                                <option value="australia">Theme 1</option>
                                <option value="canada">Theme 2</option>
                                <option value="usa">Theme 3</option>
                            </select>

                            <label for="subject">Sujet</label>
                            <textarea id="subject" name="subject" placeholder="Votre message.." />

                            <input type="submit" value="Envoyer"/>
                        </form>
                    </div>
                </div>
            <Footer />
        </div>
    );
};

export default Contact;