import React from 'react';
import logo from './../../logo.svg';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <img src={logo}></img>
        </header>
    );
}

export default Header;