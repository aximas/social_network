import React from 'react';
import styles from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import imgPlaceholder from "../../../assets/images/user.jpg";

const ProfileInfo = (props) => {
    if(!props.profile) {
     return (
         <Preloader />
     )
    }
    return (
        <div>
            <div>
                <img src="https://lookw.ru/8/829/1476173947-o-nas-236.jpg" alt="profile-img"></img>
            </div>
            <div  className={styles.item}>
                <p>{props.profile.fullName}</p>
                <p>{props.profile.userId}</p>
                <p>{props.profile.contacts.youtube ?? 'is not yet'}</p>
                <img src={props.profile.photos.small ?? imgPlaceholder} alt="user-profile-img" className={styles.userProfileImg}/>
                ava + descriptions
            </div>
        </div>
    );
}

export default ProfileInfo;