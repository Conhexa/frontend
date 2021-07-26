import React from 'react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

import '../../assets/style/styleRhContact.css'

const Manager = () =>{

    return (
        <div>
            <Nav />
                <div className='content'>
                    <h1 className="contactTitle"> 
                        Vous souhaitez contacter Margaux Tacquez ?
                    </h1>
                    <div className="contactRhUser">
                            <div>
                            <p className="posteRh">Gestionnaire RH</p>
                            <p className="descPosteRh">(Gestion administrative et Paie)</p>
                            </div>
                            <div>
                            <p className="userContactRh">Téléphone:</p>
                            <p className="infoUserContactRh">03.28.43.86.92</p>
                            </div>
                            <div>
                            <p className="userContactRh">Adresse e-mail:</p>
                            <p className="infoUserContactRh">m.tacquez@conhexa.com</p>
                            </div>
                    </div>
                    <div className="formContact">
                        <form>
                            <label for="fname">Prénom</label>
                            <input type="text" id="fname" name="firstname" placeholder="Votre prénom.." required/>

                            <label for="lname">Nom</label>
                            <input type="text" id="lname" name="lastname" placeholder="Votre nom.." required/>
                            
                            <label for="lname">Adresse e-mail</label>
                            <input type="text" id="lname" name="lastname" placeholder="Votre adresse mail.." pattern="[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.+[a-zA-Z.]{2,15}" required/>

                            <label for="country">Objet</label>
                            <select id="country" name="country">
                                <option value="australia">Objet 1</option>
                                <option value="canada">Objet 2</option>
                                <option value="usa">Objet 3</option>
                            </select>

                            <label for="subject">Sujet</label>
                            <textarea id="subject" name="subject" placeholder="Votre message.." required/>

                            <input type="submit" value="Envoyer"/>
                        </form>
                    </div>
                </div>
            <Footer />
        </div>
    );
};

export default Manager;