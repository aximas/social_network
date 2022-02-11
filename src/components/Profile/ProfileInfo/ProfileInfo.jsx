import React from 'react';
import styles from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img src="https://lookw.ru/8/829/1476173947-o-nas-236.jpg"></img>
            </div>
            <div  className={styles.item}>
                <p>{props.userProfile.fullName}</p>
                ava + descriptions
            </div>
        </div>
    );
}

export default ProfileInfo;