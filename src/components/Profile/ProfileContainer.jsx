import React from 'react';
import Profile from "./Profile";
import {getUserProfileThunk, setUserProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId ?? ((this.props.isAuth) ? this.props.userId : 22333);
        this.props.getUserProfileThunk(userId);
    }

    render() {
        return <Profile {...this.props}/>;
    }
}
const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    userId: state.auth.userId

})

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile, getUserProfileThunk})(WithUrlDataContainerComponent);