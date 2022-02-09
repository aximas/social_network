// import React from "react";
// import * as axios from "axios";
// import Users from "./Users";
//
// class UsersAPIComponent extends React.Component {
//     componentDidMount() {
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
//             .then(
//                 response => {
//                     this.props.setUsers(response.data.items)
//                     this.props.setTotalUsersCount(response.data.totalCount)
//                 }
//             )
//     }
//
//     onPageChanged = (pageNum) => {
//         this.props.setCurrentPage(pageNum);
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`)
//             .then(response => {
//                 this.props.setUsers(response.data.items);
//             });
//     }
//
//     render() {
//         return <Users users={this.props.users}
//                       followF={this.props.followF}
//                       unfollowF={this.props.unfollowF}
//                       totalUsersCount={this.props.totalUsersCount}
//                       pageSize={this.props.pageSize}
//                       currentPage={this.props.currentPage}
//                       onCurrentPage={this.onPageChanged}
//                 />
//     }
//
//
// }
//
// export default UsersAPIComponent;