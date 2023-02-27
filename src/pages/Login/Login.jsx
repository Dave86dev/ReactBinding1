
import React, {useState} from 'react';
import { Navigator } from '../../common/Navigator/Navigator';
import { ErrorCheck } from '../../services/useful';
import './Login.css';

export const Login = () => {

    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    })

    const [errorCredentials, setErrorCredentials] = useState({
        emailError: "",
        passwordError: ""
    });

    const inputHandler = (e) => {
        setCredentials((prevState)=>({...prevState, 
            [e.target.name] : e.target.value           
        }));
    }

    const Errors = (e) => {

        let foundError = false;

        foundError = ErrorCheck(e.target.name, e.target.value);

        if(foundError){
            setErrorCredentials((prevState)=>({...prevState, 
                [e.target.name + "Error"] : `There is an error in the ${e.target.name}`          
            }));
        }else{
            setErrorCredentials((prevState)=>({...prevState, 
                [e.target.name + "Error"] : ""           
            }));
        }


    }

    return (
        <div className="loginDesign">
            <div className="navDesign">
                <Navigator destination={"Home"} path="/" />
                <Navigator destination={"Login"} path="/login" />
                <Navigator destination={"User Profile"} path="/profile" />
            </div>

            <div className="loginMenu">
                <input className="inputDesign" onChange={(e)=>inputHandler(e)} onBlur={(e)=>Errors(e)} name="email" type="email" placeholder={"Write your e-mail"}/>
                <div>{errorCredentials.emailError}</div>
                <input className="inputDesign" onChange={(e)=>inputHandler(e)} onBlur={(e)=>Errors(e)} name="password" type="password" placeholder={"Password"}/>
                <div>{errorCredentials.passwordError}</div>
                <div className="loginButton" onClick={()=>console.log(credentials)}>Login me!</div>
            </div>
        </div>
    )
}