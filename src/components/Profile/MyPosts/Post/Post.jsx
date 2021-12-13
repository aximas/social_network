import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
    return (
        <div className={styles.item}>
            <img src={props.avatar} alt="" />
            {props.text}
            <div>
                likes {props.likesCount}
            </div>
        </div>
    );
}

export default Post;