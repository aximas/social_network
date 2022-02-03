import React from 'react';
import style from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    // let path = "/messages/" + props.id;
    return (
        <div className={style.dialogWrapper + ' ' + style.active}>
            <img className={style.avatar} src={props.imgSrc} alt={props.name}/>
            <NavLink to={"/messages/" + props.id}>{props.name}</NavLink>
        </div>
    );
}
export default DialogItem;