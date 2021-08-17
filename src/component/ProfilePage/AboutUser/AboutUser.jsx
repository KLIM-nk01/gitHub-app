import React from 'react';
import AboutUser_style from './AboutUser.module.scss'
import flows from '../../../assets/shared.png'
import flowg from '../../../assets/provate.png'

const AboutUser = ({userDat}) => {
    return (
        <div className={AboutUser_style.aboutUser_wrapper}>
            <img src={userDat.avatar_url} alt={"userAvatar"}/>
            <div className={AboutUser_style.userName_wrapper}>
                <a target={'_blank'} href={userDat.html_url}>{userDat.login}</a>
                <span>{userDat.name}</span>
            </div>

            <div className={AboutUser_style.information_wrapper}>
                <div>
                    <img src={flows} alt={'png'}/>
                    <span>{userDat.followers} followers</span>
                </div>
                <div>
                    <img src={flowg} alt={'png'}/>
                    <span>{userDat.following} following</span>
                </div>
            </div>
        </div>
    );
};

export default AboutUser;