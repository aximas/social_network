import React from 'react';
import styles from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if(!props.profile) {
     return (
         <Preloader />
     )
    }
    return (
        <div>
            <div>
                <img src="https://lookw.ru/8/829/1476173947-o-nas-236.jpg"></img>
            </div>
            <div  className={styles.item}>
                <p>{props.profile.fullName}</p>
                <p>{props.profile.userId}</p>
                <p>{props.profile.contacts.youtube ?? 'is not yet'}</p>
                ava + descriptions
            </div>
        </div>
    );
}

export default ProfileInfo;