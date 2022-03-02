import React from 'react'
import {Field, reduxForm} from 'redux-form'

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

ContactForm = reduxForm({
    form: 'login'
})(ContactForm)

const Login = () => {
    return <div>
        <h1>Login</h1>
            <ContactForm/>
         </div>
}

export default Login