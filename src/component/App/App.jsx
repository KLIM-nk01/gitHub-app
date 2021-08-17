import React, {useEffect, useState} from 'react';
import App_style from './App.module.scss'
import InitialState from "../InitialState/InitialState";
import Search from "../Search/Search";
import ProfilePage from "../ProfilePage/ProfilePage";
import NotFound from "../NotFound/NotFound";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import axios from "axios";
import ErrorPage from "../ErrorPage/ErrorPage";

const App = () => {
    const [userDat, setUserDat] = useState({
        allDataReceived: false,
        errorData: false,
        login: '',
        avatar_url: '',
        urlUserProfile: '',
        repositories: [],
        name: '',
        followers: undefined,
        following: undefined

    })
    const [userData, setUserData] = useState({});
    const [loader, setLoader] = useState({
        isLoader: false
    });

    const getUserData = async (userName) => {
        await setLoader({isLoader: true})
        // await fetch(`https://api.github.com/users/${userName}`)
        //     .then(data => {
        //         data.status
        //         return data.json()
        //     })
        //     .then(data => {
        //         fetch(`https://api.github.com/users/${userName}/repos`)
        //             .then(data => data.json())
        //             .then(arr => {
        //                 // console.log(data, arr)
        //                 setUserDat({
        //                     allDataReceived: true,
        //                     login: data.login,
        //                     avatar_url: data.avatar_url,
        //                     urlUserProfile: data.url,
        //                     repositories: arr,
        //                     name: data.name,
        //                     followers: data.followers,
        //                     following: data.following
        //                 })
        //             })
        //
        //     })

        try {
            await axios.get(`https://api.github.com/users/${userName}`)
                .then(responseUserData => {
                    axios.get(`https://api.github.com/users/${userName}/repos`)
                        .then(responseUserRepos => {
                            setUserDat({
                                errorData: false,
                                allDataReceived: true,
                                login: responseUserData.data.login,
                                avatar_url: responseUserData.data.avatar_url,
                                urlUserProfile: responseUserData.data.url,
                                repositories: responseUserRepos.data,
                                name: responseUserData.data.name,
                                followers: responseUserData.data.followers,
                                following: responseUserData.data.following
                            })
                        })
                })
        } catch (e) {
            setUserDat({
                allDataReceived: false,
                errorData: true,
            })
        }
        await setLoader({isLoader: false})
    }

    const initialState = () => {
        setUserDat({
            allDataReceived: false,
            errorData: false,
        })
    }


    return (
        <div className={App_style.appWrapper}>
            <Header initialState={initialState}>
                <Search getUserData={getUserData}/>
            </Header>

            <div className={App_style.mainWrapper}>
                {
                    userDat.allDataReceived
                        ? loader.isLoader ? <Loader/> : <ProfilePage loader={loader} userDat={userDat}/>
                        : !userDat.errorData ? <InitialState/> : <ErrorPage/>
                }
            </div>
        </div>
    );
};

export default App;