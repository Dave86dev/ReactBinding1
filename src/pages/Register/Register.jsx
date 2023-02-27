
import React from 'react';
import './Register.css';
import { Navigator } from '../../common/Navigator/Navigator';

export const Register = () => {

    return (
        <div className="registerDesign">I am register

            <Navigator destination={"Login"} path={"/login"} />
            <Navigator destination={"Home"} path={"/"} />
            <Navigator destination={"User Profile"} path={"/profile"} />
        </div>
    )
}