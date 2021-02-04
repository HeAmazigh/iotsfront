import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom'; 
import { AuthContext } from '../context/auth-context';

import './NavLinks.css';

const NavLinks = props => {

    const Auth = useContext(AuthContext);

    return (
        <ul className="nav-links">
            <li>
                <NavLink to="/" exact> All Users </NavLink>
            </li>
            {Auth.isLoggedIn && (<li>
                <NavLink to= {`/${Auth.userId}/places`}> My Places </NavLink>
            </li>)}
            {Auth.isLoggedIn && (<li>
                <NavLink to="/place/new"> Add Places </NavLink>
            </li>)}
            {!Auth.isLoggedIn &&( <li>
                <NavLink to="/auth">Authenticate </NavLink>
            </li>)}
            {Auth.isLoggedIn && (<li>
                <NavLink to="/logout" onClick={Auth.logout}> Logout </NavLink>
            </li>)}
        </ul>
    );
};

export default NavLinks;