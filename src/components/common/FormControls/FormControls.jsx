import React from "react";
import "./FormControls.scss";

export const TextArea = ({input, placeholder, meta}) => {
    const {error, touched, warning, form} = meta;
    console.log(meta);
    let hasError = error && touched;

    const MyPostForm = <div>
        <textarea {...input} placeholder={placeholder} className={hasError ? "error" : ""}/>
        {
            hasError && (error && <span>{error}</span> || warning && <span>{error}</span>)
        }
    </div>;

    const DialogForm = <div>
        <input {...input} placeholder={placeholder} className={`${hasError ? "error" : ""}`}/>
        {
            hasError && (error && <span>{error}</span> || warning && <span>{error}</span>)
        }
    </div>;

    const renderFormSwitch = (form) => {
       switch (form) {
           case "DialogForm": return DialogForm;
           case "MyPostForm": return MyPostForm;
       }

    }

    return renderFormSwitch(form)
}