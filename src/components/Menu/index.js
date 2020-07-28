import React from 'react';
import Button from '../Button';
import { Link } from 'react-router-dom';
// import ButtonLink from './components/ButtonLink';

import Logo from '../../assets/img/Logo.svg';

import './Menu.css';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img src={Logo} className="Logo" alt="AluraFlix logo"/>
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;
