import React from 'react';
import img from '../../assets/image.png'
import InitialState_style from './InitialState.module.scss'

const InitialState = () => {
    return (
        <div className={InitialState_style.wrapper}>
            <img alt={'Search Icon'} src={img}/>
            <p>Start with searching
                a GitHub user</p>
        </div>
    );
};

export default InitialState;