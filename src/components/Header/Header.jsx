import React from 'react';
import logo from './../../logo.svg';
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";
import imgPlaceholder from "../../assets/images/user.jpg";

const Header = (props) => {
    return (
        <header className={styles.header}>
            <img src={logo} alt="logo"></img>
            {props.isAuth ? <div><p>{props.login}</p><button onClick={() => props.logoutUser()}>LogOut</button></div> : <NavLink to={"/login/"}>
                Login
            </NavLink>}
            <img src={props.imgSrc ?? imgPlaceholder} alt="user profile photo small" className={styles.userPhotoSmall}/>
        </header>
    );
}

export default Header;