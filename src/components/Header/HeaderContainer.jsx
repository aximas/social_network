import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthData, setAuthUserImg} from "../../redux/auth-reducer";
import {usersAPI} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        usersAPI.authUser()
            .then(response => {
                if (response.resultCode === 0) {
                    const {id, login, email} = response.data
                    this.props.setAuthData(id, login, email);

                    usersAPI.getUserProfile(id)
                        .then(response => {
                            this.props.setAuthUserImg(response.data.photos.small)
                        })
                }
            })
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
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {setAuthData, setAuthUserImg})(HeaderContainer)