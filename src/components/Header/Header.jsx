import React from 'react';
import logo from './../../logo.svg';
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";
import imgPlaceholder from "../../assets/images/user.jpg";

const Header = (props) => {
    return (
        <header className={styles.header}>
            <img src={logo} alt="logo"></img>
            {props.isAuth ? <p>{props.login}</p> : <NavLink to={"/login/"}>
                Login
            </NavLink>}
            <img src={props.imgSrc ?? imgPlaceholder} alt="user profile photo small" className={styles.userPhotoSmall}/>
        </header>
    );
}

export default Header;