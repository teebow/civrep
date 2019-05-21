import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';
import Eye from '@material-ui/icons/RemoveRedEye';

import GradientButton from '../components/GradientButton';
import { InputAdornment } from '@material-ui/core';

//<img src="/static/login-background.jpg" alt="login image"/>
const LoginCard = (props) => (
    <div className="root">
        <Paper>
            <div className="container">
            <Grid container={true} justify="center" alignItems="center" spacing={0} >
                <Grid item xs={12}>
                    <Typography component="h2" variant="h5" color='primary' align="left" gutterBottom>
                        Bienvenue
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Email" variant="filled" InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        )
                    }} fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Password"
                        type="password" variant="filled"
                        margin="normal"
                        autoComplete="current-password"
                        fullWidth
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Lock />
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position="end">
                                    <Eye />
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
}
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
        .root { 
            height: 100vh;
            min-height:100%;
            background-image: linear-gradient(to right top, #062c3f, #064664, #03628c, #0080b6, #009ee2);
        };
      `}
        </style>
    </div>
);


export default LoginCard