import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.jpg";


const Users = (props) => {
     const user = props.users.map(u => (
            <div key={u.id} className={styles.user}>
                <div className={styles.userAvatar}>
                    <img
                        src={u.photos.small != null ? u.photos.small : userPhoto}
                        alt="" className={styles}/>
                    {u.followed
                        ? <button onClick={() => {
                            props.unfollowF(u.id)
                        }}>Un follow</button>
                        : <button onClick={() => {
                            props.followF(u.id)
                        }}>Follow </button>}
                </div>
                <div className="userInfo">
                    <p className="userName">
                        {u.name}
                    </p>
                    <p className="userStatus">
                        {u.status ? u.status : 'without status'}
                    </p>
                    <p className="userLocation">
                    <span className={styles}>

                    </span>
                        {/*{u.location.city}*/}
                        {/*{u.location.country}*/}
                    </p>
                </div>
            </div>
        ));

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    };

    return (
        <div className={styles.users}>
            <div className={styles.pages}>
                {pages.map(pageNum => {
                    return <span key={pageNum}
                                 className={`${styles.page} ${props.currentPage === pageNum ? styles.selectedPage : ''}`}
                                 onClick={() => {
                                     props.onCurrentPage(pageNum);
                                 }}>
                        {pageNum}
                    </span>
                })}
            </div>
            {user}
        </div>
    )

}

export default Users;