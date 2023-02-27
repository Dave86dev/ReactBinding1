
import React from 'react';
import { Navigator } from '../../common/Navigator/Navigator';
import './Home.css';

export const Home = () => {

    return (
        <div className="homeDesign">I am home

            <Navigator destination={"Login"} path={"/login"}/>
            <Navigator destination={"Register"} path={"/register"}/>
            <Navigator destination={"User Profile"} path={"/profile"}/>

        </div>
    )
}