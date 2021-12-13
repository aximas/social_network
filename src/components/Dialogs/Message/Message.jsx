import React from 'react';
import style from './../Dialogs.module.css';

const Message = (props) => {
    return (
        <div className={style.dialogWrapper}>
            <div className={style.dialog}>
                {props.message}
            </div>
        </div>
    )
}

export default Message;