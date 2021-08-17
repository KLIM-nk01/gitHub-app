import React, {useState} from 'react';
import ProfilePage_style from './ProfilePage.module.scss'
import AboutUser from "./AboutUser/AboutUser";
import Repositories from "./Repositories/Repositories";
import RepositoriesListEmpty from "./RepositoriesListEmpty/RepositoriesListEmpty";
import Loader from "../Loader/Loader";

const ProfilePage = ({userDat}) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [repoPerCount] = useState(3)


    const lastReposIndex = currentPage * repoPerCount
    const firstReposIndex = lastReposIndex - repoPerCount
    const currentRepos = userDat.repositories.slice(firstReposIndex, lastReposIndex)

    const paginate = reposNumber => setCurrentPage(reposNumber)

    return (
        <div className={ProfilePage_style.profilePage_wrapper}>

                <AboutUser userDat={userDat}/>
            {
                userDat.repositories.length === 0
                ? <RepositoriesListEmpty/>
                :
                    <Repositories
                        paginate={paginate}
                        totalRepositories={userDat.repositories.length}
                        currentPage={currentPage}
                        repoPerCount={repoPerCount}
                        userRepo={currentRepos}
                    />


            }


        </div>
    );
};

export default ProfilePage;