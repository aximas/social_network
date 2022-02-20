import React from 'react';
import Profile from "./Profile";
import {setUserProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId ?? ((this.props.isAuth) ? this.props.userId : 22333);
        usersAPI.getUserProfile(userId)
            .then(response => {
                console.log(response.data);
                this.props.setUserProfile(response.data);
            })
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

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);