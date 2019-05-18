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
                    <Card raised={true}>
                        <CardContent>
                            <div className="inputs">
                                <TextField
                                    label="Email"
                                    margin="normal"
                                    fullWidth
                                />
                                <TextField
                                    label="Password"
                                    type="password"
                                    autoComplete="current-password"
                                    margin="normal"
                                    fullWidth
                                />
                            </div>
                        </CardContent>
                    </Card>
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
        .container {
            padding-top: 32px;
            align-items: center;
            background: linear-gradient(rgba(255, 255, 255, 0.1) 80%, rgba(255, 255, 255, 1)), url("/static/login-background.jpg") no-repeat; 
            background-size: 100% 80%;
            min-height:100%
        }
        .root { 
            height: 100%;
            min-height:100%;
        };
      `}
        </style>
    </div>
);


export default Login