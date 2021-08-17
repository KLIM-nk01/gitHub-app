import React from 'react';
import Header_style from './Header.module.scss'
import gitLogo from '../../assets/gitLogo.png'

const Header = ({children, initialState}) => {
    return (
        <div className={Header_style.headerWrapper}>
            <button onClick={initialState}><img src={gitLogo} alt={'gitLogo'}/></button>
            {
                children
            }
        </div>
    );
};

export default Header;