import React from 'react';
import styles from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContaier";
import ProfileStatus from "./ProfileInfo/ProfileStatus";


const Profile = (props) => {
    return (
        <div className={styles.content}>
            <ProfileInfo profile={props.profile} />
            <ProfileStatus userStatus="Today nice day" />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;