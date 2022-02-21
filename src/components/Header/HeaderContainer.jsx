import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {authUser, setAuthData, setAuthUserImg} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authUser();
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        login: state.auth.login,
        email: state.auth.email,
        isAuth: state.auth.isAuth,
        imgSrc: state.auth.imgSrc
    }
}

export default connect(mapStateToProps, {setAuthData, setAuthUserImg, authUser})(HeaderContainer)