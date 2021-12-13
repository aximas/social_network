import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsItems = props.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name}  id={dialog.id}
                                                                           imgSrc={dialog.imgSrc}/>);
    let messagesElements = props.messages.map(message => <Message key={message.id} message={message.text} id={message.id}/>);

    let sendMessage = () => {
        props.addMessage();
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessage(text);
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {dialogsItems}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <textarea className={style.messagesInput} onChange={onMessageChange}
                          value={props.newMessage}/>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
}

export default Dialogs;