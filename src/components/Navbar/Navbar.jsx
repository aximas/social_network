import React from 'react';
import styles from './Navbar.module.css';

const Navbar = (props) => {
    return (
        <nav className={styles.nav}>
            <div className={styles.item}>
                <a href="/profile">Profile</a>
            </div>
            <div className={styles.item}>
                <a href="/login">Login</a>
            </div>
            <div className={styles.item}>
                <a href="/messages">Messages</a>
            </div>
            <div className={styles.item}>
                <a href="/users">Users</a>
            </div>
            <div className={`${styles.item} ${styles.active}`}>
                <a href="/news">News</a>
            </div>
            <div className={styles.item}>
                <a href="/music">Music</a>
            </div>
            <div className={styles.item}>
                <a href="/settings">Settings</a>
            </div>
            <div className={styles.item}>
                <a href="/friends">Friends</a>
            </div>
        </nav>
    );
}

export default Navbar;