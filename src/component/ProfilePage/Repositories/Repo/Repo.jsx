import React from 'react';
import Repo_style from './Repo.module.scss'

const Repo = ({repo}) => {

    return (
        <div className={Repo_style.repo_wrapper}>
            <a href={repo.html_url} target={'_blank'}>
                {repo.name}
            </a>
            <span>Language: {repo.language}</span>
        </div>

    );
};

export default Repo;