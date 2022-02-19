import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthData, setAuthUserImg} from "../../redux/auth-reducer";
import axios from "axios";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    const {id, login, email} = response.data.data
                    this.props.setAuthData(id, login, email);

                    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + id)
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