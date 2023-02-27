
import React, {useState} from 'react';
import { Navigator } from '../../common/Navigator/Navigator';
import './Login.css';

export const Login = () => {

    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    })

    const inputHandler = (e) => {
        setCredentials((prevState)=>({...prevState, 
            [e.target.name] : e.target.value           
        }));
    }

    return (
        <div className="loginDesign">
            <div className="navDesign">
                <Navigator destination={"Home"} path="/" />
                <Navigator destination={"Login"} path="/login" />
                <Navigator destination={"User Profile"} path="/profile" />
            </div>

            <div className="loginMenu">
                <input className="inputDesign" onChange={(e)=>inputHandler(e)} name="email" type="email" placeholder={"Write your e-mail"}/>
                <input className="inputDesign" onChange={(e)=>inputHandler(e)} name="password" type="password" placeholder={"Password"}/>
                <div className="loginButton" onClick={()=>console.log(credentials)}>Login me!</div>
            </div>
        </div>
    )
}