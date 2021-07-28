import React, {useEffect} from 'react';
import DisneyLogo from '../../assets/images/logo.svg';

import HomeIcon from '../../assets/images/home-icon.svg';
import SearchIcon from "../../assets/images/search-icon.svg";
import WatchList from "../../assets/images/watchlist-icon.svg";
import Original from "../../assets/images/original-icon.svg";
import MovieIcon from "../../assets/images/movie-icon.svg";
import SeriesIcon from "../../assets/images/series-icon.svg";

import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import {auth, provider} from '../../firebase';
import {setUserLogin, setSignOut} from '../../store/user/userSlice.js';

function Header() {
    const { name, photo } = useSelector(state => state.user);

    const dispatch = useDispatch();

    const history = useHistory();

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result => {
            let user = result.user;
            dispatch(setUserLogin({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            }))

            history.push("/")
        })
        .catch(err => console.log(err))
    }

    const signOut = () => {
        auth.signOut()
        .then(() => {
            dispatch(setSignOut())
            history.replace("/login")
        })
    }

    useEffect(() => {
        auth.onAuthStateChanged(async user => {
            if (user) {
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }))
    
                history.push("/")
            }
        })

    }, [dispatch])


    return (
        <nav className="header">

            {/* LOGO */}
            <img
                alt="Disney Logo"
                className="header__logo"
                src={DisneyLogo}
            />

            {
                !name && <div className="login-container">
                    <a onClick={signIn} className="login">
                        Login
                    </a>
                </div>
            }

            {
                name && <>

                    <div className="header__menu">
                        <a className="header__menu--item">
                            <img src={HomeIcon} alt="Home icon" />
                            <span>home</span>
                        </a>

                        <a className="header__menu--item">
                            <img src={SearchIcon} alt="Home icon" />
                            <span>Search</span>
                        </a>

                        <a className="header__menu--item">
                            <img src={WatchList} alt="Home icon" />
                            <span>watchlist</span>
                        </a>

                        <a className="header__menu--item">
                            <img src={Original} alt="Home icon" />
                            <span>original</span>
                        </a>

                        <a className="header__menu--item">
                            <img src={MovieIcon} alt="Home icon" />
                            <span>movies</span>
                        </a>

                        <a className="header__menu--item">
                            <img src={SeriesIcon} alt="Home icon" />
                            <span>series</span>
                        </a>
                    </div>

                    {/* user logo */}
                    <img
                        onClick={signOut}
                        className="header__user-image"
                        src={photo}
                        alt="User Logo"
                    />
                </>
            }
        </nav>
    )
}

export default Header
