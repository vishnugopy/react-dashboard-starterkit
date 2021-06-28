import React, {useState , Redirect , useContext}  from 'react';
import { Button, TextField } from '@material-ui/core';
import useStyles from '../theme/forms.css';
import { login } from '../services';
import { AppContext } from '../store';

const LoginForm = (props) => {

    const store = useContext(AppContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleClick = async (e) => {
        const loginData = await login(username, password);
        console.log(loginData);
        try {
            if(loginData.data.success){
                const {token} = loginData.data;
                localStorage.setItem("token" , token);
                //store.setAuth(true);
                props.history.push('/dashboard');
            }
        } catch (error) {
            console.log(error);
        }
    }

    const classes = useStyles();
    
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