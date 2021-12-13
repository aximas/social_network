import React from 'react';
import styles from './Friends.module.css';
import Friend from "./Friend/Friend";

const Friends = (props) => {
    let friend = props.friends.map(friendData => <Friend name={friendData.name} imgSrc={friendData.imgSrc}/>)
    return (
        <div className={styles.friendsWrapper}>
            {friend}
        </div>
    );
}

export default Friends;