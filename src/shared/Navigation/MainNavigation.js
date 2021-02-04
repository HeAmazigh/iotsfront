import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import './MainNavigation.css'
import MainHeader from './MainHeader';
import SideDrawer from './SideDrawer';
import NavLinks from './NavLinks';

import Backdrop from '../UIElements/Backdrop/Backdrop';

const MainNavigation = props => {

    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    const drawerOpenHandler = () => {
        setDrawerIsOpen(true);
    }

    const drawerCloseHandler = () => {
        setDrawerIsOpen(false);
    }

    return (
        <React-fragment>
            {drawerIsOpen && <Backdrop onClick={drawerCloseHandler}/> }
            <SideDrawer show={drawerIsOpen} onClick={drawerCloseHandler}>
                <nav className="main-navigation__drawer-nav">
                    <NavLinks />
                </nav>
            </SideDrawer>
            <MainHeader>
                <button className="main-navigation__menu-btn" onClick={drawerOpenHandler}>
                    <span />
                    <span />
                    <span />
                </button>
                <h1 className="main-navigation__title"> 
                    <Link to="/"> Your places </Link>
                </h1>
                <nav className="main-navigation__header-nav">
                    <NavLinks />
                </nav>
            </MainHeader>
        </React-fragment>
    );
};

export default MainNavigation;