import React, {useState, useContext} from 'react';
import { Button, TextField } from '@material-ui/core';
import useStyles from '../theme/forms.css';
import { appStore } from '../store/';

const LoginForm = (props) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const store = useContext(appStore);
    const classes = useStyles();


    const handleClick = async (e) => {
        console.log(username, password);

        store.user.dispatch({
            type: 'LOGIN', 
            payload: "tokenblabli"
        }, store.user);
    }

    
    return (
        <div>
            <div>
                <div className={`wrapper ${classes.loginForm}`}>
                    <TextField
                        className="input"
                        label="Username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <br />
                    <TextField
                        className="input"
                        label="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />
                    <Button
                        variant="outlined" color="primary"
                        onClick={event => handleClick(event)}>
                        Se connecter
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;