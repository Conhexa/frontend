import React from 'react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

import '../../assets/style/styleContact.css'

const Contact = () =>{

    return (
        <div>
            <Nav />
                <div className='content'>
                    <h1> Contacter directement le service RH</h1>
                </div>
            <Footer />
        </div>
    );
};

export default Contact;