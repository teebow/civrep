import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CssBaseline from '@material-ui/core/CssBaseline';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';

import GradientButton from '../components/GradientButton';

//<img src="/static/login-background.jpg" alt="login image"/>
const Login = (props) => (
    <div className="root">
        <CssBaseline />
        <div className="container">
            <Grid container={true} justify="center" alignItems="center" spacing={24} >
                <Grid item xs={12}  >
                    <Typography component="h1" mt={100} variant="h1" color='primary' align="center" gutterBottom>
                        CivRep
            </Typography>
                </Grid >
                <Grid item xs={8}>
                     <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <AccountCircle />
                        </Grid>
                        <Grid item>
                            <TextField  label="Email"
                                                    margin="normal"
                                                    fullWidth />
                        </Grid>
                    </Grid>
                     <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <AccountCircle />
                        </Grid>
                        <Grid item>
                            <TextField
                                            label="Password"
                                            type="password"
                                            autoComplete="current-password"
                                            margin="normal"
                                            fullWidth />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <GradientButton>Connexion</GradientButton>
                
                </Grid>
            </Grid>
        </div>
        <style jsx>{`
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
            padding-top: 32px;
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


export default Login