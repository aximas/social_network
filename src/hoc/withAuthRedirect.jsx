import React from "react";
import Login from "../components/Login/Login";
import connect from "react-redux/lib/connect/connect";
import {Redirect} from "react-router-dom";
import store from "../redux/redux-store";

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})

export const withAuthRedirectHOC = (Component) => {


    class RedirectComponent extends React.Component {

        render() {
            if (!this.props.isAuth) return <Login store={store} />
            return <Component {...this.props} />
        }

    }

    return connect(mapStateToProps)(RedirectComponent);
}

