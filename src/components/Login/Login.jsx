import React from 'react'
import {Field, reduxForm} from 'redux-form'
import connect from "react-redux/lib/connect/connect";
import {loginProfileThunk} from "../../redux/profile-reducer";

let ContactForm = props => {
    const {handleSubmit} = props;
    return <form onSubmit={handleSubmit}>
            <div>
                <Field name="login" component="input" type="text" placeholder={"Login"}/>
            </div>
            <div>
                <Field name="password" component="input" type="text" placeholder={"Password"}/>
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
    dispatch(loginProfileThunk(values.login, values.password, values.rememberMe))
};


export default connect(null, {loginProfileThunk})(reduxForm({
    form: 'login',
    onSubmit,
})(ContactForm));

