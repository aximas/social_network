import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from "./Message/Message";
import {Field, reduxForm, reset} from "redux-form";

const Dialogs = (props) => {

    let dialogsItems = props.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name}  id={dialog.id}
                                                                           imgSrc={dialog.imgSrc}/>);
    let messagesElements = props.messages.map((message, i) => <Message key={i} message={message.text} id={message.id}/>);

    let sendMessage = (values, dispatch) => {
        console.log(values.dialogMessage);
        props.addMessage(values.dialogMessage);
        dispatch(reset('DialogForm'))
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {dialogsItems}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <DialogForm onSubmit={sendMessage} />
            </div>
        </div>
    );
}

let DialogForm = (props) => {
    const {handleSubmit} = props;
    return <form onSubmit={handleSubmit}>
        <Field component="textarea" name="dialogMessage" className={style.messagesInput}>
        </Field>
        <button>Send</button>
    </form>
}

DialogForm = reduxForm({form: 'DialogForm'})(DialogForm)

export default Dialogs;