import {connect} from "react-redux";
import {
    followF,
    ToggleIsFetching,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    unFollowF, ToggleFollowingProgress
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import {usersAPI} from "../../api/api";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.ToggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(
                response => {
                    this.props.ToggleIsFetching(false);
                    this.props.setUsers(response.items)
                    this.props.setTotalUsersCount(response.totalCount)
                }
            )
    }

    onPageChanged = (pageNum) => {
        this.props.setCurrentPage(pageNum);
        this.props.ToggleIsFetching(true);
        usersAPI.getUsers(pageNum, this.props.pageSize)
            .then(response => {
                this.props.ToggleIsFetching(false);
                this.props.setUsers(response.items);
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
                      isFollowingProgress={this.props.isFollowingProgress}
                      ToggleFollowingProgress={this.props.ToggleFollowingProgress}
        />
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowingProgress: state.usersPage.isFollowingProgress
    }
};

export default connect(mapStateToProps, {
    followF,
    unFollowF,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    ToggleIsFetching,
    ToggleFollowingProgress
})(UsersContainer);
