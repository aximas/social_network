import React from "react";
import "./FormControls.scss";

export const TextArea = ({input, placeholder, meta}) => {
    const {error, touched, warning, form} = meta;
    console.log(meta);
    let hasError = error && touched;

    const myPostForm = <div>
        <textarea {...input} placeholder={placeholder} className={hasError ? "error" : ""}/>
        {
            hasError && (error && <span>{error}</span> || warning && <span>{error}</span>)
        }
    </div>;

    const dialogForm = <div>
        <input {...input} placeholder={placeholder} className={`dialogForm ${hasError ? "error" : ""}`}/>
        {
            hasError && (error && <span>{error}</span> || warning && <span>{error}</span>)
        }
    </div>;

    const loginForm = <div>
        <input {...input} placeholder={placeholder} className={hasError ? "error" : ""}/>
        {
            hasError && (error && <span>{error}</span> || warning && <span>{error}</span>)
        }
    </div>;

    const renderFormSwitch = (form) => {
       switch (form) {
           case "DialogForm": return dialogForm;
           case "MyPostForm": return myPostForm;
           case "login": return loginForm;
       }

    }

    return renderFormSwitch(form)
}