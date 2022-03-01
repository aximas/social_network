import React from 'react';
import Profile from "./Profile";
import {
    getUserProfileThunk,
    setUserProfile,
    getUserStatusThunk,
    updateUserStatusThunk
} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {withAuthRedirectHOC} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId ?? 22645;
        this.props.getUserProfileThunk(userId);
        this.props.getUserStatusThunk(userId);
    }

    render() {
        return <Profile {...this.props}/>;
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    userId: state.auth.userId,
    status: state.profilePage.status
})

export default compose(
    connect(mapStateToProps, {setUserProfile, getUserProfileThunk, getUserStatusThunk, updateUserStatusThunk}),
    withRouter,
    withAuthRedirectHOC
)(ProfileContainer)

