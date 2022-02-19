import React from 'react';
import logo from './../../logo.svg';
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={styles.header}>
            <img src={logo} alt="logo"></img>
            {props.isAuth ? <p>{props.login}</p> : <NavLink to={"/login/"}>
                Login
            </NavLink>}

        </header>
    );
}

export default Header;