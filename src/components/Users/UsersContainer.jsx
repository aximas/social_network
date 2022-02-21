import {connect} from "react-redux";
import {
    followF,
    ToggleIsFetching,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    unFollowF, ToggleFollowingProgress, getUsers, followUsers, unFollowUsers
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNum) => {
        this.props.getUsers(pageNum, this.props.pageSize, true);
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
                      followUsers={this.props.followUsers}
                      unFollowUsers={this.props.unFollowUsers}
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
    ToggleFollowingProgress,
    getUsers,
    followUsers,
    unFollowUsers
})(UsersContainer);
