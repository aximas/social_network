import React from 'react'
import {Field, reduxForm} from 'redux-form'
import connect from "react-redux/lib/connect/connect";
import {loginUser} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {TextArea} from "../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLength18 = maxLengthCreator(18);

let ContactForm = props => {
    const {handleSubmit} = props;

    console.log(props.isAuth)
    if(props.isAuth) {
        return <Redirect to="/profile" />
    }

    return <form onSubmit={handleSubmit}>
            <div>
                <Field name="login" component={TextArea} type="text" placeholder={"Login"} validate={[required, maxLength18]}/>
            </div>
            <div>
                <Field name="password" component={TextArea} type="text" placeholder={"Password"} validate={[required, maxLength18]}/>
            </div>
            <div>
                <label htmlFor="remember">Remember me</label>
                <Field name="rememberMe" component="input" type="checkbox"/>
            </div>
            <button>Submit</button>
        </form>
}

const onSubmit = (values, dispatch) => {
    console.log(values);
    console.log(dispatch);
    dispatch(loginUser(values.login, values.password, values.rememberMe))
};


export default connect((state) => ({isAuth: state.auth.isAuth}), {loginUser})(reduxForm({
    form: 'login',
    onSubmit,
})(ContactForm));

