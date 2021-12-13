import React from 'react';
import style from './Music.module.css';

const Music = () => {
    return (
        <div className={style.item}>
            <p>
                Dj Snake
            </p>
            <audio src='./../../../public/1.mp3' controls />
        </div>
    )
}

export default Music;