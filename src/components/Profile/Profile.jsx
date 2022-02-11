import React from 'react';
import styles from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContaier";


const Profile = (props) => {
    return (
        <div className={styles.content}>
            <ProfileInfo userProfile={props.userProfile} />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;