import React from "react";
import styles from "./Users.module.css";
import * as axios from "axios";
import userPhoto from "../../assets/images/user.jpg";

class Users extends React.Component{

    constructor(props) {
        super(props);

        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(
                response => {
                    this.props.setUsers([...response.data.items])
                }
            )
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
                    {u.status}
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
      return (
          <div className={styles.users}>
              {this.user()}
          </div>
          )
    }


}

export default Users;