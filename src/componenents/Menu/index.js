import React from 'react';
import Button from '../Button';
// import ButtonLink from './components/ButtonLink';

import Logo from '../../assets/img/Logo.svg';

import './Menu.css';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img src={Logo} className="Logo" alt="AluraFlix logo"/>
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;
