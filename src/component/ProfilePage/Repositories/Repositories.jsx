import React, {useState} from 'react';
import Repositories_style from './Repositories.module.scss'
import Repo from "./Repo/Repo";
import Pagination from "../Pagination/Pagination";


const Repositories = ({userRepo, repoPerCount , totalRepositories, paginate}) => {

    return (
        <div className={Repositories_style.repositories_wrapper}>
            <h2>Repositories({totalRepositories})</h2>

           <div className={Repositories_style.repositories}>
               {
                   userRepo.map(repo => <Repo key={repo.id} repo={repo}/>)
               }
           </div>
            <Pagination paginate={paginate} repoPerCount={repoPerCount} totalRepositories={totalRepositories}/>
        </div>
    );
};

export default Repositories;