
import React from 'react';
import './UserProfile.css';
import { Navigator } from '../../common/Navigator/Navigator';

export const UserProfile = () => {

    return (
        <div className="profileDesign">
            I am UserProfile
            <Navigator destination={"Login"} path={"/login"}/>
            <Navigator destination={"Register"} path={"/register"}/>
            <Navigator destination={"Home"} path={"/"}/>
        </div>
    )
}