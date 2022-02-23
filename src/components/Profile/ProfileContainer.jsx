import React from 'react';
import Profile from "./Profile";
import {getUserProfileThunk, setUserProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {withAuthRedirectHOC} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId ?? 22333;
        this.props.getUserProfileThunk(userId);
    }

    render() {
        return <Profile {...this.props}/>;
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    userId: state.auth.userId
})

// export default compose(
//     connect(mapStateToProps, {setUserProfile, getUserProfileThunk}),
//     withRouter,
//     withAuthRedirectHOC
// )(ProfileContainer)

let withAuthRedirect = withAuthRedirectHOC(ProfileContainer)

let WithUrlDataContainerComponent = withRouter(withAuthRedirect);

export default connect(mapStateToProps, {setUserProfile, getUserProfileThunk})(WithUrlDataContainerComponent);