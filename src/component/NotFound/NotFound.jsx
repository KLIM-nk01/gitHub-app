import React from 'react';
import img from '../../assets/Union.png'
import NotFound_style from './NotFound.module.scss'

const NotFound = () => {
    return (
        <div className={NotFound_style.wrapper}>
            <img alt={'Search Icon'} src={img}/>
            <p>User not found</p>
        </div>
    );
};

export default NotFound;