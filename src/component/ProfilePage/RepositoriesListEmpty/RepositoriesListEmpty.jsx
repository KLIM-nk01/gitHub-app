import React from 'react';
import RepositoriesListEmpty_style from './RepositoriesListEmpty.module.scss'
import srcImg from '../../../assets/Empty.png'

const RepositoriesListEmpty = () => {
    return (
        <div className={RepositoriesListEmpty_style.empty_wrapper}>
            <img src={srcImg} alt={'Empty'}/>
            <p>Repository list is empty</p>
        </div>
    );
};

export default RepositoriesListEmpty;