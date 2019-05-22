import React from 'react';

import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';
import Eye from '@material-ui/icons/RemoveRedEye';


import { InputAdornment } from '@material-ui/core';

//<img src="/static/login-background.jpg" alt="login image"/>
const LoginCard = (props) => (
    <div className="root">
        <Paper>
            <div className="container">
            <Typography component="h4" variant="h4" color='primary' align="left" gutterBottom>
                        Bienvenue
                    </Typography>
            <Grid container={true} justify="center" alignItems="center" spacing={8}>
                <Grid item xs={12}>
                    <TextField label="Email" variant="filled" InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle color="primary"/>
                            </InputAdornment>
                        )
                    }} fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Password"
                        type="password" variant="filled"
                        autoComplete="current-password"
                        fullWidth
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Lock color="primary"/>
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position="end">
                                    <Eye color="primary"/>
                                </InputAdornment>
                            )
                        }} />
                </Grid>
            </Grid>
            </div>
        </Paper>
        <style jsx>{`
        Paper {
            padding: 20px;
        };
        TextField {
            margin :0;
            padding: 0;
        };
        .inputs {
          display: flex;
          flex-direction: column;
          align-items: center;
        };
        .test {
        font-size: 72px;
            background: -webkit-linear-gradient(left top, #d16b7d, #d16d93, #cb73aa, #be7bc0, #ab85d3, #9992e3, #839ff0, #69abf8, #54bcff, #48cbff, #4cdaff, #5fe7fb)
        }
        .container {
            padding: 20px;
            align-items: center;
            min-height:100%
        }
      `}
        </style>
    </div>
);


export default LoginCard