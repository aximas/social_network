import {connect} from "react-redux";
import {
    followF,
    ToggleIsFetching,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    unFollowF
} from "../../redux/users-reducer";
import React from "react";
import * as axios from "axios";
import Users from "./Users";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.ToggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(
                response => {
                    this.props.ToggleIsFetching(false);
                    this.props.setUsers(response.data.items)
                    this.props.setTotalUsersCount(response.data.totalCount)
                }
            )
    }
    onPageChanged = (pageNum) => {
        this.props.setCurrentPage(pageNum);
        this.props.ToggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.ToggleIsFetching(false);
                this.props.setUsers(response.data.items);
            });
    }
    render() {
        return <Users users={this.props.users}
                              followF={this.props.followF}
                              unFollowF={this.props.unFollowF}
                              totalUsersCount={this.props.totalUsersCount}
                              pageSize={this.props.pageSize}
                              currentPage={this.props.currentPage}
                              onCurrentPage={this.onPageChanged}
                              isFetching={this.props.isFetching}
                />
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
};

export default connect(mapStateToProps, {followF, unFollowF, setUsers, setCurrentPage, setTotalUsersCount, ToggleIsFetching})(UsersContainer);
