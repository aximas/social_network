import React from "react";
import styles from "./Users.module.css";
import * as axios from "axios";
import userPhoto from "../../assets/images/user.jpg";

class Users extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(
                response => {
                    this.props.setUsers(response.data.items)
                    this.props.setTotalUsersCount(response.data.totalCount)
                }
            )
    }

    onCurrentPage(pageNum) {
        this.props.setCurrentPage(pageNum);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`)
            .then(
                response => {
                    this.props.setUsers([...response.data.items])
                }
            )
    }

    pagesCount() {
        return Math.ceil(this.props.totalUsersCount / this.props.pageSize)
    }

    user = () => {
        return this.props.users.map(u => (
            <div key={u.id} className={styles.user}>
                <div className={styles.userAvatar}>
                    <img
                        src={u.photos.small != null ? u.photos.small : userPhoto}
                        alt="" className={styles}/>
                    {u.followed
                        ? <button onClick={() => {
                            this.props.unfollowF(u.id)
                        }}>Un follow</button>
                        : <button onClick={() => {
                            this.props.followF(u.id)
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
        ))
    }

    render() {

        let pages = [];
        for (let i = 1; i <= this.pagesCount(); i++) {
            pages.push(i);
        }

        return (
            <div className={styles.users}>
                <div className={styles.pages}>
                    {pages.map(pageNum => {
                        return <span key={pageNum}
                                     className={`${styles.page} ${this.props.currentPage === pageNum ? styles.selectedPage : ''}`}
                                     onClick={() => this.onCurrentPage(pageNum)}>{pageNum}</span>
                    })}
                </div>
                {this.user()}
            </div>
        )
    }


}

export default Users;