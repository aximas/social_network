import React from 'react';
import styles from './Friend.module.css';

const Friend = (props) => {
    return(
        <div className={styles.friendBlock}>
            <img src={props.imgSrc} alt={props.name} />
            <p>{props.name}</p>
        </div>
    )
}

export default Friend;